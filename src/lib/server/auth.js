import "server-only";
import crypto from "node:crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// Admin login: the password lives only on the server (ADMIN_PASSWORD), and a
// successful login sets an httpOnly cookie holding "<expiry>.<HMAC signature>".
// No session table is needed; changing ADMIN_SESSION_SECRET logs everyone out.

export const SESSION_COOKIE = "tbs_admin";
const SESSION_DAYS = 7;

function secret() {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) throw new Error("ADMIN_SESSION_SECRET is not set in .env.local");
  return s;
}

function sign(payload) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("hex");
}

function safeEqual(a, b) {
  const ba = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
}

export function checkPassword(password) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) throw new Error("ADMIN_PASSWORD is not set in .env.local");
  return typeof password === "string" && safeEqual(password, expected);
}

export function createSessionCookie() {
  const expires = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const payload = String(expires);
  return {
    name: SESSION_COOKIE,
    value: `${payload}.${sign(payload)}`,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(expires),
  };
}

export async function isAdmin() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig || !safeEqual(sig, sign(payload))) return false;
  return Number(payload) > Date.now();
}

/** Returns a 401 response when the caller is not logged in, otherwise null. */
export async function requireAdmin() {
  return (await isAdmin()) ? null : NextResponse.json({ error: "Not logged in" }, { status: 401 });
}

/** Wraps a route handler so DB/config errors come back as JSON instead of an HTML 500 page. */
export function handle(fn) {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (err) {
      console.error("[api]", err);
      return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
    }
  };
}
