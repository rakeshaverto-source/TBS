import { NextResponse } from "next/server";
import { contentCollection } from "@/lib/server/db";
import { handle, requireAdmin } from "@/lib/server/auth";
import { SECTIONS } from "@/lib/content/defaults";

export const dynamic = "force-dynamic";

const SECTION_KEYS = new Set(SECTIONS.map((s) => s.key));

// GET (public): every section the admin has edited, as { [section]: value }.
// Sections not in the result fall back to the defaults in the code.
export const GET = handle(async () => {
  const docs = await (await contentCollection()).find({}).toArray();
  const overrides = Object.fromEntries(docs.filter((d) => SECTION_KEYS.has(d._id)).map((d) => [d._id, d.value]));
  return NextResponse.json(overrides, { headers: { "Cache-Control": "no-store" } });
});

// PUT (admin) { [section]: value, ... }: save several sections at once (used by backup import)
export const PUT = handle(async (request) => {
  const denied = await requireAdmin();
  if (denied) return denied;
  const body = await request.json();
  const entries = Object.entries(body || {}).filter(([k]) => SECTION_KEYS.has(k));
  const col = await contentCollection();
  const now = new Date();
  await Promise.all(
    entries.map(([k, value]) => col.replaceOne({ _id: k }, { _id: k, value, updatedAt: now }, { upsert: true }))
  );
  return NextResponse.json({ saved: entries.map(([k]) => k) });
});
