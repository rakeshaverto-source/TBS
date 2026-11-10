import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { handle, requireAdmin } from "@/lib/server/auth";

export const dynamic = "force-dynamic";

const FOLDER = "tbs-website";

// POST (admin): returns a signed set of upload parameters. The browser then
// sends the file straight to Cloudinary, so large images never pass through
// this server and the API secret never leaves it.
export const POST = handle(async () => {
  const denied = await requireAdmin();
  if (denied) return denied;

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) throw new Error("Cloudinary keys are not set in .env.local");

  const timestamp = Math.floor(Date.now() / 1000);
  // Cloudinary signature: params sorted by name, joined as a query string, + secret, SHA-1
  const toSign = `folder=${FOLDER}&timestamp=${timestamp}`;
  const signature = crypto.createHash("sha1").update(toSign + apiSecret).digest("hex");

  return NextResponse.json({
    uploadUrl: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    fields: { api_key: apiKey, timestamp: String(timestamp), folder: FOLDER, signature },
  });
});
