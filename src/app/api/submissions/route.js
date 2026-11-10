import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { submissionsCollection } from "@/lib/server/db";
import { handle, requireAdmin } from "@/lib/server/auth";
import { SUBMISSION_TYPES } from "@/lib/content/types";

export const dynamic = "force-dynamic";

const MAX_FIELDS = 20;
const MAX_LEN = 2000;

// Public forms can only send short plain-text fields.
function cleanFields(fields) {
  const out = {};
  for (const [k, v] of Object.entries(fields || {}).slice(0, MAX_FIELDS)) {
    if (!/^[A-Za-z][A-Za-z0-9_]{0,40}$/.test(k) || ["_id", "id", "type", "createdAt"].includes(k)) continue;
    if (v === null || v === undefined) continue;
    out[k] = String(v).slice(0, MAX_LEN);
  }
  return out;
}

function toClient({ _id, type, ...rest }) {
  return { id: _id, ...rest, _type: type };
}

// GET (admin): all submissions grouped by type, newest first
export const GET = handle(async () => {
  const denied = await requireAdmin();
  if (denied) return denied;
  const docs = await (await submissionsCollection()).find({}).sort({ createdAt: -1 }).toArray();
  const grouped = Object.fromEntries(Object.keys(SUBMISSION_TYPES).map((t) => [t, []]));
  for (const d of docs) {
    if (!grouped[d.type]) continue;
    const { _type, ...row } = toClient(d);
    grouped[_type].push(row);
  }
  return NextResponse.json(grouped);
});

// POST (public) { type, fields }: a website form was submitted
export const POST = handle(async (request) => {
  const { type, fields } = await request.json().catch(() => ({}));
  if (!SUBMISSION_TYPES[type]) return NextResponse.json({ error: "Unknown form" }, { status: 400 });
  const doc = {
    _id: `${Date.now()}-${crypto.randomBytes(3).toString("hex")}`,
    type,
    createdAt: new Date().toISOString(),
    ...cleanFields(fields),
  };
  await (await submissionsCollection()).insertOne(doc);
  return NextResponse.json({ id: doc._id }, { status: 201 });
});

// PUT (admin) { [type]: [rows] }: bulk import from a backup file (existing ids are overwritten)
export const PUT = handle(async (request) => {
  const denied = await requireAdmin();
  if (denied) return denied;
  const body = await request.json();
  const ops = [];
  for (const [type, rows] of Object.entries(body || {})) {
    if (!SUBMISSION_TYPES[type] || !Array.isArray(rows)) continue;
    for (const { id, ...rest } of rows) {
      if (!id) continue;
      const doc = { _id: String(id), type, ...rest };
      ops.push({ replaceOne: { filter: { _id: doc._id }, replacement: doc, upsert: true } });
    }
  }
  if (ops.length) await (await submissionsCollection()).bulkWrite(ops);
  return NextResponse.json({ imported: ops.length });
});
