"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp, Copy, ImagePlus, Loader2, Plus, Trash2 } from "lucide-react";
import { ICONS, ICON_NAMES } from "@/lib/icons";
import { uploadImage } from "@/lib/content/store";

/* ---------- helpers ---------- */

const IMAGE_KEY = /(image|img|src|avatar|cover|bgurl|photo|logo|gallery|images|collage)/i;
const IMAGE_VALUE = /(\.(png|jpe?g|webp|avif|gif|svg)(\?.*)?$)|^data:image\//i;
const LONG_KEY = /(desc|description|text|message|quote|content|summary|excerpt|paragraph|detail|about|subtitle|tbsSupport|idealFor)/i;
const TITLE_KEYS = ["title", "name", "heading", "label", "year", "grade", "parent", "parentName", "className", "role", "code", "value", "text", "quote", "id"];

export function humanize(key) {
  return String(key)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/^./, (c) => c.toUpperCase());
}

function itemTitle(item, index) {
  if (item && typeof item === "object") {
    for (const k of TITLE_KEYS) {
      const v = item[k];
      if (typeof v === "string" && v.trim()) return v.length > 70 ? v.slice(0, 70) + "…" : v;
    }
    const nested = item.top?.title || item.bottom?.title || item.price?.label;
    if (nested) return nested;
  }
  return `Item ${index + 1}`;
}

/** Builds an empty item with the same shape as an existing one. */
function blankLike(sample) {
  if (Array.isArray(sample)) return [];
  if (sample === null || sample === undefined) return "";
  if (typeof sample === "object") {
    return Object.fromEntries(Object.entries(sample).map(([k, v]) => [k, blankLike(v)]));
  }
  if (typeof sample === "number") return 0;
  if (typeof sample === "boolean") return false;
  return "";
}

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-[#1e3a8a] focus:ring-2 focus:ring-[#1e3a8a]/15";

/* ---------- leaf fields ---------- */

// Cloudinary's free plan rejects images over 10 MB
const MAX_UPLOAD_MB = 10;

function ImageField({ value, onChange }) {
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
      setError(`Image ${MAX_UPLOAD_MB} MB se chhoti honi chahiye.`);
      return;
    }
    setError("");
    setUploading(true);
    try {
      onChange(await uploadImage(file));
    } catch (err) {
      setError(`Upload failed: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const isData = typeof value === "string" && value.startsWith("data:");

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div className="h-20 w-28 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-[11px] text-slate-400">No image</div>
        )}
      </div>
      <div className="flex-1 space-y-2">
        <input
          className={inputCls}
          value={isData ? "(uploaded image)" : value ?? ""}
          readOnly={isData}
          placeholder="/image.webp or https://…"
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          <label className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 ${uploading ? "pointer-events-none opacity-60" : "cursor-pointer"}`}>
            {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <ImagePlus className="h-3.5 w-3.5" />}
            {uploading ? "Uploading…" : "Upload"}
            <input type="file" accept="image/*" className="hidden" onChange={onFile} disabled={uploading} />
          </label>
          {isData && (
            <button type="button" onClick={() => onChange("")} className="rounded-lg px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50">
              Remove upload
            </button>
          )}
        </div>
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    </div>
  );
}

function IconField({ value, onChange }) {
  const Icon = ICONS[value];
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-[#1e3a8a]">
        {Icon ? <Icon className="h-4 w-4" /> : null}
      </span>
      <select className={inputCls} value={value || ""} onChange={(e) => onChange(e.target.value)}>
        <option value="">— none —</option>
        {ICON_NAMES.map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
    </div>
  );
}

function LeafField({ name, parentKey, value, onChange }) {
  const key = String(name ?? parentKey ?? "");

  if (typeof value === "boolean") {
    return (
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`relative h-6 w-11 rounded-full transition ${value ? "bg-emerald-500" : "bg-slate-300"}`}
        aria-pressed={value}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${value ? "left-5" : "left-0.5"}`} />
      </button>
    );
  }

  if (typeof value === "number") {
    return <input type="number" className={inputCls} value={value} onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))} />;
  }

  const str = value ?? "";

  if (key === "icon" && (str === "" || ICON_NAMES.includes(str))) {
    return <IconField value={str} onChange={onChange} />;
  }

  if (IMAGE_KEY.test(key) || IMAGE_VALUE.test(str)) {
    return <ImageField value={str} onChange={onChange} />;
  }

  if (LONG_KEY.test(key) || str.length > 80) {
    return (
      <textarea
        className={`${inputCls} min-h-[90px] resize-y leading-relaxed`}
        rows={Math.min(10, Math.max(3, Math.ceil(str.length / 90)))}
        value={str}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }

  return <input className={inputCls} value={str} onChange={(e) => onChange(e.target.value)} />;
}

/* ---------- containers ---------- */

function ArrayField({ name, value, onChange, depth }) {
  const primitive = value.every((v) => v === null || typeof v !== "object");
  const [open, setOpen] = useState(() => new Set());

  const update = (i, v) => onChange(value.map((x, idx) => (idx === i ? v : x)));
  const remove = (i) => {
    if (!confirm("Is item ko delete karein?")) return;
    onChange(value.filter((_, idx) => idx !== i));
  };
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= value.length) return;
    const next = [...value];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };
  const duplicate = (i) => {
    const next = [...value];
    next.splice(i + 1, 0, structuredClone(value[i]));
    onChange(next);
  };
  const add = () => {
    const item = value.length ? blankLike(value[value.length - 1]) : "";
    onChange([...value, item]);
    setOpen((s) => new Set(s).add(value.length));
  };
  const toggle = (i) =>
    setOpen((s) => {
      const n = new Set(s);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });

  const ItemTools = ({ i }) => (
    <div className="flex shrink-0 items-center gap-0.5">
      <button type="button" title="Move up" onClick={() => move(i, -1)} className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30" disabled={i === 0}>
        <ChevronUp className="h-4 w-4" />
      </button>
      <button type="button" title="Move down" onClick={() => move(i, 1)} className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30" disabled={i === value.length - 1}>
        <ChevronDown className="h-4 w-4" />
      </button>
      <button type="button" title="Duplicate" onClick={() => duplicate(i)} className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
        <Copy className="h-4 w-4" />
      </button>
      <button type="button" title="Delete" onClick={() => remove(i)} className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-600">
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <div className="space-y-2">
      {value.map((item, i) =>
        primitive ? (
          <div key={i} className="flex items-start gap-2">
            <div className="min-w-0 flex-1">
              <LeafField parentKey={name} value={item} onChange={(v) => update(i, v)} />
            </div>
            <ItemTools i={i} />
          </div>
        ) : (
          <div key={i} className="rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center gap-2 px-3 py-2">
              <button type="button" onClick={() => toggle(i)} className="flex min-w-0 flex-1 items-center gap-2 text-left">
                {open.has(i) ? <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" /> : <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />}
                <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">{i + 1}</span>
                <span className="truncate text-sm font-semibold text-slate-700">{itemTitle(item, i)}</span>
              </button>
              <ItemTools i={i} />
            </div>
            {open.has(i) && (
              <div className="border-t border-slate-100 p-3 sm:p-4">
                <FieldEditor value={item} onChange={(v) => update(i, v)} depth={depth + 1} />
              </div>
            )}
          </div>
        )
      )}
      <button
        type="button"
        onClick={add}
        className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-[#1e3a8a] hover:text-[#1e3a8a]"
      >
        <Plus className="h-3.5 w-3.5" /> Add {humanize(name || "item").replace(/s$/, "")}
      </button>
    </div>
  );
}

function ObjectField({ value, onChange, depth }) {
  return (
    <div className="space-y-4">
      {Object.entries(value).map(([k, v]) => {
        const set = (nv) => onChange({ ...value, [k]: nv });
        const isContainer = v !== null && typeof v === "object";
        if (isContainer) {
          return (
            <Group key={k} title={humanize(k)} count={Array.isArray(v) ? v.length : null} defaultOpen={depth < 1 && !Array.isArray(v)}>
              <FieldEditor name={k} value={v} onChange={set} depth={depth + 1} />
            </Group>
          );
        }
        return (
          <div key={k}>
            <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">{humanize(k)}</span>
            <LeafField name={k} value={v} onChange={set} />
          </div>
        );
      })}
    </div>
  );
}

export function Group({ title, count, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/60">
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center gap-2 px-3 py-2.5 text-left">
        {open ? <ChevronDown className="h-4 w-4 text-slate-400" /> : <ChevronRight className="h-4 w-4 text-slate-400" />}
        <span className="text-sm font-bold text-slate-800">{title}</span>
        {count !== null && count !== undefined && (
          <span className="rounded-full bg-[#1e3a8a]/10 px-2 py-0.5 text-[11px] font-bold text-[#1e3a8a]">{count}</span>
        )}
      </button>
      {open && <div className="border-t border-slate-200 p-3 sm:p-4">{children}</div>}
    </div>
  );
}

/** Renders a form for any JSON-shaped value. */
export default function FieldEditor({ name, value, onChange, depth = 0 }) {
  if (Array.isArray(value)) return <ArrayField name={name} value={value} onChange={onChange} depth={depth} />;
  if (value !== null && typeof value === "object") return <ObjectField value={value} onChange={onChange} depth={depth} />;
  return <LeafField name={name} value={value} onChange={onChange} />;
}
