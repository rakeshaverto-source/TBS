"use client";

import { useSyncExternalStore } from "react";
import { DEFAULT_CONTENT } from "./defaults";
import { SUBMISSION_TYPES } from "./types";

export { SUBMISSION_TYPES };

// Browser-side store for admin-managed content and form submissions.
// Data lives in MongoDB behind the /api routes; this module keeps an in-memory
// copy so components can read it synchronously and re-render when it changes.

const state = {
  overrides: {}, // { [section]: value } for sections edited in the admin
  contentLoaded: false,
  submissions: {}, // { [type]: rows[] }, loaded only for the admin
};

const listeners = new Set();
function emit() {
  listeners.forEach((l) => l());
}
function subscribe(listener) {
  listeners.add(listener);
  loadContent();
  return () => listeners.delete(listener);
}

async function api(path, { method = "GET", body, keepalive } = {}) {
  const res = await fetch(path, {
    method,
    keepalive,
    headers: body === undefined ? undefined : { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
    cache: "no-store",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `Request failed (${res.status})`);
    err.status = res.status;
    throw err;
  }
  return data;
}

/* ---------------- Content ---------------- */

let contentRequest = null;

/** Fetches edited content once per page load (call with force to refetch). */
export function loadContent(force = false) {
  if (typeof window === "undefined") return Promise.resolve();
  if (contentRequest && !force) return contentRequest;
  contentRequest = api("/api/content")
    .then((data) => {
      state.overrides = data || {};
    })
    .catch((err) => {
      // DB unreachable: the site keeps showing the default content
      console.error("[content] load failed:", err.message);
    })
    .finally(() => {
      state.contentLoaded = true;
      emit();
    });
  return contentRequest;
}

export function isContentLoaded() {
  return state.contentLoaded;
}

export function getContent(section) {
  return state.overrides[section] ?? DEFAULT_CONTENT[section];
}

export function isCustomized(section) {
  return section in state.overrides;
}

export async function saveContent(section, value) {
  await api(`/api/content/${section}`, { method: "PUT", body: value });
  state.overrides = { ...state.overrides, [section]: value };
  emit();
}

export async function resetContent(section) {
  await api(`/api/content/${section}`, { method: "DELETE" });
  const next = { ...state.overrides };
  delete next[section];
  state.overrides = next;
  emit();
}

export function exportAll() {
  return {
    content: Object.fromEntries(Object.keys(DEFAULT_CONTENT).map((k) => [k, getContent(k)])),
    submissions: state.submissions,
    exportedAt: new Date().toISOString(),
  };
}

/** Writes a backup file's content and submissions into the database. */
export async function importAll(data) {
  if (data.content) await api("/api/content", { method: "PUT", body: data.content });
  if (data.submissions) await api("/api/submissions", { method: "PUT", body: data.submissions });
  await Promise.all([loadContent(true), loadSubmissions()]);
}

/** Returns a section's content; re-renders when it loads or the admin saves changes. */
export function useContent(section) {
  return useSyncExternalStore(
    subscribe,
    () => getContent(section),
    () => DEFAULT_CONTENT[section]
  );
}

/** True once the edited content has been fetched from the database. */
export function useContentLoaded() {
  return useSyncExternalStore(subscribe, isContentLoaded, () => false);
}

/* ---------------- Old browser-only data ---------------- */

// Before the database, the admin saved everything in this browser's localStorage.
const LEGACY_CONTENT_KEY = "tbs_content_v1";
const LEGACY_SUBMISSIONS_KEY = "tbs_submissions_v1";

/** Returns { content, submissions } saved by the old localStorage admin, or null if none. */
export function getLegacyLocalData() {
  try {
    const content = JSON.parse(window.localStorage.getItem(LEGACY_CONTENT_KEY) || "{}");
    const submissions = JSON.parse(window.localStorage.getItem(LEGACY_SUBMISSIONS_KEY) || "{}");
    const hasAny = Object.keys(content).length > 0 || Object.values(submissions).some((r) => r?.length);
    return hasAny ? { content, submissions } : null;
  } catch {
    return null;
  }
}

export function clearLegacyLocalData() {
  try {
    window.localStorage.removeItem(LEGACY_CONTENT_KEY);
    window.localStorage.removeItem(LEGACY_SUBMISSIONS_KEY);
  } catch {
    // storage blocked — nothing to clear
  }
}

/* ---------------- Form submissions ---------------- */

const EMPTY = [];

/** Admin only: fetches all submissions from the database. */
export async function loadSubmissions() {
  state.submissions = await api("/api/submissions");
  emit();
}

export function getSubmissions(type) {
  return state.submissions[type] || EMPTY;
}

/** Public forms: sends an entry to the database. Never throws, so a form can't break. */
export function addSubmission(type, fields) {
  return api("/api/submissions", { method: "POST", body: { type, fields }, keepalive: true }).catch((err) => {
    console.error("[submissions] save failed:", err.message);
  });
}

export async function updateSubmission(type, id, patch) {
  await api(`/api/submissions/${encodeURIComponent(id)}`, { method: "PATCH", body: patch });
  state.submissions = {
    ...state.submissions,
    [type]: getSubmissions(type).map((s) => (s.id === id ? { ...s, ...patch } : s)),
  };
  emit();
}

export async function deleteSubmission(type, id) {
  await api(`/api/submissions/${encodeURIComponent(id)}`, { method: "DELETE" });
  state.submissions = { ...state.submissions, [type]: getSubmissions(type).filter((s) => s.id !== id) };
  emit();
}

export function useSubmissions(type) {
  return useSyncExternalStore(subscribe, () => getSubmissions(type), () => EMPTY);
}

/* ---------------- Admin login ---------------- */

export async function checkAdminSession() {
  const { loggedIn } = await api("/api/auth");
  return loggedIn;
}

export async function adminLogin(password) {
  await api("/api/auth", { method: "POST", body: { password } });
}

export async function adminLogout() {
  await api("/api/auth", { method: "DELETE" });
}

/* ---------------- Image upload ---------------- */

/** Admin only: uploads an image file to Cloudinary and returns its https URL. */
export async function uploadImage(file) {
  const { uploadUrl, fields } = await api("/api/upload-signature", { method: "POST" });
  const form = new FormData();
  Object.entries(fields).forEach(([k, v]) => form.append(k, v));
  form.append("file", file);
  const res = await fetch(uploadUrl, { method: "POST", body: form });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error?.message || "Upload failed");
  return data.secure_url;
}
