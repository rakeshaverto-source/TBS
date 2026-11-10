import { SITE_URL, getSectionContent } from "@/lib/server/content";

// Rebuilt every hour so new or edited blog posts get listed
export const revalidate = 3600;

const PAGES = ["", "/about", "/admissions", "/core-curriculum", "/beyond-academics", "/beyond-the-classroom", "/why-families-stay", "/careers", "/blogs"];

export default async function sitemap() {
  const { posts } = await getSectionContent("blogs");
  return [
    ...PAGES.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "weekly", priority: p === "" ? 1 : 0.8 })),
    ...posts
      .filter((p) => p.slug && !p.seo?.noindex)
      .map((p) => ({
        url: `${SITE_URL}/blogs/${p.slug}`,
        lastModified: p.updatedAt || p.publishedAt || undefined,
        changeFrequency: "monthly",
        priority: 0.6,
      })),
  ];
}
