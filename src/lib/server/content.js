import "server-only";
import { contentCollection } from "./db";
import { DEFAULT_CONTENT } from "@/lib/content/defaults";

/**
 * A section's content for server-rendered pages: the admin's saved version
 * from MongoDB, or the default in the code if there is none or the DB is down
 * (so a build or page render never fails just because the DB is unreachable).
 */
export async function getSectionContent(section) {
  try {
    const doc = await (await contentCollection()).findOne({ _id: section });
    if (doc?.value) return doc.value;
  } catch (err) {
    console.error(`[content] ${section}: using defaults (${err.message})`);
  }
  return DEFAULT_CONTENT[section];
}

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://thebharatschool.com").replace(/\/$/, "");
