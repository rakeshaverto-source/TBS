import { NextResponse } from "next/server";
import { contentCollection } from "@/lib/server/db";
import { handle, requireAdmin } from "@/lib/server/auth";
import { SECTIONS } from "@/lib/content/defaults";

export const dynamic = "force-dynamic";

const SECTION_KEYS = new Set(SECTIONS.map((s) => s.key));

async function sectionFrom(params) {
  const { section } = await params;
  return SECTION_KEYS.has(section) ? section : null;
}

// PUT (admin): save one section's content
export const PUT = handle(async (request, { params }) => {
  const denied = await requireAdmin();
  if (denied) return denied;
  const section = await sectionFrom(params);
  if (!section) return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  const value = await request.json();
  await (await contentCollection()).replaceOne(
    { _id: section },
    { _id: section, value, updatedAt: new Date() },
    { upsert: true }
  );
  return NextResponse.json({ ok: true });
});

// DELETE (admin): reset a section back to the default content in the code
export const DELETE = handle(async (request, { params }) => {
  const denied = await requireAdmin();
  if (denied) return denied;
  const section = await sectionFrom(params);
  if (!section) return NextResponse.json({ error: "Unknown section" }, { status: 404 });
  await (await contentCollection()).deleteOne({ _id: section });
  return NextResponse.json({ ok: true });
});
