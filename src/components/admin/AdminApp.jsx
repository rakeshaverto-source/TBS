"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Braces, CheckCircle2, Download, ExternalLink, FileText, Inbox, LayoutDashboard, Lock, LogOut,
  DatabaseZap, Loader2, Menu, RotateCcw, Save, Trash2, Upload, X,
} from "lucide-react";
import FieldEditor from "./FieldEditor";
import { DEFAULT_CONTENT, SECTIONS } from "@/lib/content/defaults";
import {
  SUBMISSION_TYPES, adminLogin, adminLogout, checkAdminSession, clearLegacyLocalData, deleteSubmission,
  exportAll, getContent, getLegacyLocalData, importAll, isCustomized, loadSubmissions, resetContent,
  saveContent, updateSubmission, useContentLoaded, useSubmissions,
} from "@/lib/content/store";

const STATUS_OPTIONS = ["New", "Contacted", "Scheduled", "Closed"];

/* ---------------- Login ---------------- */

function Login({ onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await adminLogin(password);
      onLogin();
    } catch (err) {
      setError(err.status === 401 ? "Galat password." : `Login nahi ho saka: ${err.message}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a1226] px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e1251b]/10 text-[#e1251b]">
          <Lock className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-black text-[#1e3a8a]">Admin Panel</h1>
        <p className="mt-1 text-sm text-slate-500">The Bharat School website content</p>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(""); }}
          placeholder="Password"
          className="mt-6 w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/15"
        />
        {error && <p className="mt-2 text-xs font-medium text-red-600">{error}</p>}
        <button disabled={busy} className="mt-4 w-full rounded-lg bg-[#e1251b] py-2.5 text-sm font-bold text-white hover:bg-[#c81e15] disabled:opacity-60">
          {busy ? "Checking…" : "Login"}
        </button>
      </form>
    </div>
  );
}

/* ---------------- Section editor ---------------- */

function SectionEditor({ section, onDirtyChange }) {
  const meta = SECTIONS.find((s) => s.key === section);
  const [draft, setDraft] = useState(() => structuredClone(getContent(section)));
  const [saved, setSaved] = useState(() => JSON.stringify(getContent(section)));
  const [jsonMode, setJsonMode] = useState(false);
  const [jsonText, setJsonText] = useState("");
  const [jsonError, setJsonError] = useState("");
  const [toast, setToast] = useState("");
  const [saving, setSaving] = useState(false);

  const dirty = JSON.stringify(draft) !== saved;
  useEffect(() => onDirtyChange(dirty), [dirty, onDirtyChange]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e) => { e.preventDefault(); e.returnValue = ""; };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(""), 2200); };

  const save = async () => {
    setSaving(true);
    try {
      await saveContent(section, draft);
      setSaved(JSON.stringify(draft));
      flash("Saved — website par changes live hain");
    } catch (err) {
      flash(`Save failed: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const discard = () => {
    const current = getContent(section);
    setDraft(structuredClone(current));
    setJsonText(JSON.stringify(current, null, 2));
  };

  const reset = async () => {
    if (!confirm(`"${meta.label}" ko original default content par reset karein? Aapke edits hat jayenge.`)) return;
    try {
      await resetContent(section);
    } catch (err) {
      flash(`Reset failed: ${err.message}`);
      return;
    }
    const d = DEFAULT_CONTENT[section];
    setDraft(structuredClone(d));
    setSaved(JSON.stringify(d));
    setJsonText(JSON.stringify(d, null, 2));
    flash("Reset to default");
  };

  const toggleJson = () => {
    if (!jsonMode) {
      setJsonText(JSON.stringify(draft, null, 2));
      setJsonError("");
    } else if (jsonError) {
      return;
    }
    setJsonMode(!jsonMode);
  };

  const onJsonChange = (text) => {
    setJsonText(text);
    try {
      setDraft(JSON.parse(text));
      setJsonError("");
    } catch (e) {
      setJsonError(e.message);
    }
  };

  return (
    <div>
      <div className="sticky top-0 z-20 -mx-4 mb-6 border-b border-slate-200 bg-slate-50/95 px-4 py-3 backdrop-blur sm:-mx-8 sm:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-xl font-black text-slate-900">{meta.label}</h1>
            <p className="text-xs text-slate-500">
              {dirty ? <span className="font-semibold text-amber-600">Unsaved changes</span> : isCustomized(section) ? "Edited content" : "Default content"}
            </p>
          </div>
          <Link href={meta.page} target="_blank" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-white">
            <ExternalLink className="h-3.5 w-3.5" /> View page
          </Link>
          <button onClick={toggleJson} className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold ${jsonMode ? "border-[#1e3a8a] bg-[#1e3a8a] text-white" : "border-slate-200 bg-white text-slate-700"}`}>
            <Braces className="h-3.5 w-3.5" /> JSON
          </button>
          <button onClick={reset} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:text-red-600">
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
          {dirty && (
            <button onClick={discard} className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-white">Discard</button>
          )}
          <button
            onClick={save}
            disabled={!dirty || !!jsonError || saving}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#e1251b] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#c81e15] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />} Save
          </button>
        </div>
      </div>

      {jsonMode ? (
        <div>
          <textarea
            value={jsonText}
            onChange={(e) => onJsonChange(e.target.value)}
            spellCheck={false}
            className="h-[70vh] w-full rounded-xl border border-slate-200 bg-slate-900 p-4 font-mono text-xs leading-relaxed text-slate-100 outline-none"
          />
          {jsonError && <p className="mt-2 text-xs font-medium text-red-600">Invalid JSON: {jsonError}</p>}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <FieldEditor value={draft} onChange={setDraft} />
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-xl">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {toast}
        </div>
      )}
    </div>
  );
}

/* ---------------- Submissions ---------------- */

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return iso;
  }
}

function toCSV(rows) {
  const keys = Array.from(new Set(rows.flatMap((r) => Object.keys(r)))).filter((k) => k !== "id");
  const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  return [keys.join(","), ...rows.map((r) => keys.map((k) => esc(r[k])).join(","))].join("\n");
}

function download(filename, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function SubmissionsView({ type }) {
  const rows = useSubmissions(type);
  const label = SUBMISSION_TYPES[type];

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex-1">
          <h1 className="text-xl font-black text-slate-900">{label}</h1>
          <p className="text-xs text-slate-500">{rows.length} entries · website forms se aaye</p>
        </div>
        {rows.length > 0 && (
          <button onClick={() => download(`${type}.csv`, toCSV(rows), "text/csv")} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
            <Download className="h-3.5 w-3.5" /> Export CSV
          </button>
        )}
      </div>

      {rows.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <Inbox className="mx-auto h-8 w-8 text-slate-300" />
          <p className="mt-3 text-sm text-slate-500">Abhi koi entry nahi hai.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {rows.map((row) => (
            <div key={row.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400">{formatDate(row.createdAt)}</span>
                <div className="flex-1" />
                {"status" in row && (
                  <select
                    value={row.status}
                    onChange={(e) => updateSubmission(type, row.id, { status: e.target.value }).catch((err) => alert(`Update failed: ${err.message}`))}
                    className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700"
                  >
                    {STATUS_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                )}
                <button
                  onClick={() => confirm("Delete this entry?") && deleteSubmission(type, row.id).catch((err) => alert(`Delete failed: ${err.message}`))}
                  className="rounded p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {Object.entries(row)
                  .filter(([k]) => !["id", "createdAt", "status"].includes(k))
                  .map(([k, v]) => (
                    <div key={k} className="min-w-0">
                      <dt className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{k.replace(/([A-Z])/g, " $1")}</dt>
                      <dd className="break-words text-sm text-slate-800">{String(v || "—")}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- Dashboard ---------------- */

function Dashboard({ go }) {
  const counts = {
    tourBookings: useSubmissions("tourBookings").length,
    jobApplications: useSubmissions("jobApplications").length,
    newsletter: useSubmissions("newsletter").length,
    examReminders: useSubmissions("examReminders").length,
  };

  const onImport = (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    file.text().then((text) => {
      try {
        const data = JSON.parse(text);
        if (!confirm("Import karne se backup wale sections aur entries database mein replace ho jayenge. Continue?")) return;
        importAll(data)
          .then(() => alert("Import complete."))
          .catch((err) => alert(`Import failed: ${err.message}`));
      } catch {
        alert("Invalid backup file.");
      }
    });
  };

  // Content saved by the old browser-only admin, waiting to be moved to the database
  const [legacy, setLegacy] = useState(() => getLegacyLocalData());
  const [moving, setMoving] = useState(false);
  const moveLegacy = async () => {
    if (!confirm("Is browser mein save purana content aur form entries database mein bhej dein? Database ke same sections replace ho jayenge.")) return;
    setMoving(true);
    try {
      await importAll(legacy);
      clearLegacyLocalData();
      setLegacy(null);
      alert("Purana data database mein aa gaya.");
    } catch (err) {
      alert(`Move failed: ${err.message}`);
    } finally {
      setMoving(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-black text-slate-900">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-500">Website ka saara content yahan se manage karein.</p>

      {legacy && (
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <DatabaseZap className="h-5 w-5 shrink-0 text-amber-600" />
          <p className="min-w-0 flex-1 text-sm text-amber-900">
            Is browser mein purane admin ka saved data mila hai. Ise database mein bhejein taaki website par dikhe.
          </p>
          <button onClick={moveLegacy} disabled={moving} className="rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-white disabled:opacity-60">
            {moving ? "Moving…" : "Database mein bhejein"}
          </button>
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {Object.entries(SUBMISSION_TYPES).map(([k, label]) => (
          <button key={k} onClick={() => go(`sub:${k}`)} className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-[#1e3a8a]/40">
            <div className="text-3xl font-black text-[#1e3a8a]">{counts[k]}</div>
            <div className="mt-1 text-xs font-semibold text-slate-500">{label}</div>
          </button>
        ))}
      </div>

      <h2 className="mt-10 text-sm font-black uppercase tracking-wider text-slate-500">Content sections</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((s) => (
          <button key={s.key} onClick={() => go(s.key)} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-[#1e3a8a]/40">
            <FileText className="h-5 w-5 shrink-0 text-[#e1251b]" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-bold text-slate-800">{s.label}</div>
              <div className="text-xs text-slate-400">{isCustomized(s.key) ? "Edited" : "Default"}</div>
            </div>
          </button>
        ))}
      </div>

      <h2 className="mt-10 text-sm font-black uppercase tracking-wider text-slate-500">Backup</h2>
      <p className="mt-1 text-xs text-slate-500">
        Content aur form entries MongoDB database mein save hain, images Cloudinary par. Backup file download karke kabhi bhi wapas import kar sakte hain.
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button
          onClick={() => download(`tbs-backup-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(exportAll(), null, 2), "application/json")}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#1e3a8a] px-4 py-2 text-xs font-bold text-white"
        >
          <Download className="h-3.5 w-3.5" /> Download backup
        </button>
        <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700">
          <Upload className="h-3.5 w-3.5" /> Import backup
          <input type="file" accept="application/json" className="hidden" onChange={onImport} />
        </label>
      </div>
    </div>
  );
}

/* ---------------- Shell ---------------- */

export default function AdminApp() {
  const [authed, setAuthed] = useState(null); // null = still checking
  const contentLoaded = useContentLoaded();
  const [view, setView] = useState("dashboard");
  const [dirty, setDirty] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (next) => {
    if (dirty && !confirm("Unsaved changes hain. Chhod kar aage badhein?")) return;
    setDirty(false);
    setView(next);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    checkAdminSession()
      .then(setAuthed)
      .catch(() => setAuthed(false));
  }, []);

  useEffect(() => {
    if (!authed) return;
    loadSubmissions().catch((err) => console.error("[admin] submissions:", err.message));
  }, [authed]);

  const logout = async () => {
    await adminLogout().catch(() => {});
    setAuthed(false);
  };

  const nav = useMemo(
    () => [
      { title: null, items: [{ key: "dashboard", label: "Dashboard", icon: LayoutDashboard }] },
      { title: "Content", items: SECTIONS.map((s) => ({ key: s.key, label: s.label, icon: FileText })) },
      { title: "Form submissions", items: Object.entries(SUBMISSION_TYPES).map(([k, label]) => ({ key: `sub:${k}`, label, icon: Inbox })) },
    ],
    []
  );

  if (authed === null || (authed && !contentLoaded)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
      </div>
    );
  }
  if (!authed) return <Login onLogin={() => setAuthed(true)} />;

  const sidebar = (
    <nav className="flex h-full flex-col">
      <div className="px-5 py-5">
        <div className="text-lg font-black text-white">The Bharat School</div>
        <div className="text-xs font-semibold uppercase tracking-wider text-[#f87171]">Admin</div>
      </div>
      <div className="flex-1 space-y-5 overflow-y-auto px-3 pb-4">
        {nav.map((group, gi) => (
          <div key={gi}>
            {group.title && <div className="mb-1 px-2 text-[10px] font-black uppercase tracking-widest text-slate-500">{group.title}</div>}
            {group.items.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => go(key)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition ${
                  view === key ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{label}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="space-y-1 border-t border-white/10 p-3">
        <Link href="/" target="_blank" className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-white">
          <ExternalLink className="h-4 w-4" /> Open website
        </Link>
        <button onClick={logout} className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-white">
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-64 bg-[#0a1226] lg:block">{sidebar}</aside>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-72 bg-[#0a1226]">
            <button onClick={() => setMenuOpen(false)} className="absolute right-3 top-4 text-slate-400"><X className="h-5 w-5" /></button>
            {sidebar}
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-slate-700"><Menu className="h-5 w-5" /></button>
          <span className="font-black text-[#1e3a8a]">TBS Admin</span>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-8">
          {view === "dashboard" && <Dashboard go={go} />}
          {view.startsWith("sub:") && <SubmissionsView type={view.slice(4)} />}
          {SECTIONS.some((s) => s.key === view) && <SectionEditor key={view} section={view} onDirtyChange={setDirty} />}
        </main>
      </div>
    </div>
  );
}
