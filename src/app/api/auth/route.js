import { NextResponse } from "next/server";
import { SESSION_COOKIE, checkPassword, createSessionCookie, handle, isAdmin } from "@/lib/server/auth";

export const dynamic = "force-dynamic";

// GET: is the admin logged in?
export const GET = handle(async () => NextResponse.json({ loggedIn: await isAdmin() }));

// POST { password }: log in
export const POST = handle(async (request) => {
  const { password } = await request.json().catch(() => ({}));
  if (!checkPassword(password)) {
    // small delay to slow down password guessing
    await new Promise((r) => setTimeout(r, 600));
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }
  const res = NextResponse.json({ loggedIn: true });
  res.cookies.set(createSessionCookie());
  return res;
});

// DELETE: log out
export const DELETE = handle(async () => {
  const res = NextResponse.json({ loggedIn: false });
  res.cookies.delete(SESSION_COOKIE);
  return res;
});
