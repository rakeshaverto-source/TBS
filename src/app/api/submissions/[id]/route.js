import { NextResponse } from "next/server";
import { submissionsCollection } from "@/lib/server/db";
import { handle, requireAdmin } from "@/lib/server/auth";

export const dynamic = "force-dynamic";

const STATUS_OPTIONS = ["New", "Contacted", "Scheduled", "Closed"];

// PATCH (admin) { status }: change an entry's status
export const PATCH = handle(async (request, { params }) => {
  const denied = await requireAdmin();
  if (denied) return denied;
  const { id } = await params;
  const { status } = await request.json().catch(() => ({}));
  if (!STATUS_OPTIONS.includes(status)) return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  await (await submissionsCollection()).updateOne({ _id: id }, { $set: { status } });
  return NextResponse.json({ ok: true });
});

// DELETE (admin): remove an entry
export const DELETE = handle(async (request, { params }) => {
  const denied = await requireAdmin();
  if (denied) return denied;
  const { id } = await params;
  await (await submissionsCollection()).deleteOne({ _id: id });
  return NextResponse.json({ ok: true });
});
