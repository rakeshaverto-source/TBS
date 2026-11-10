// One-off importer: copies every blog post from the old WordPress site
// (thebharatschool.com) into this project.
//
//   node --env-file=.env.local scripts/import-wp-blogs.mjs
//
// - Reads posts + Yoast SEO data from the WordPress REST API
// - Re-hosts every cover and inline image on Cloudinary, so the posts keep
//   working after the old WordPress site is switched off
// - Writes src/data/blogPosts.json   (list data: title, excerpt, cover, SEO…)
//          src/data/blogContent.json (full article HTML, keyed by slug; server only)
// Safe to re-run: images already on Cloudinary are reused (see .blog-image-cache.json).

import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const WP = "https://thebharatschool.com";
const ROOT = path.resolve(import.meta.dirname, "..");
const CACHE_FILE = path.join(ROOT, "scripts", ".blog-image-cache.json");

const { CLOUDINARY_CLOUD_NAME: CLOUD, CLOUDINARY_API_KEY: KEY, CLOUDINARY_API_SECRET: SECRET } = process.env;
if (!CLOUD || !KEY || !SECRET) throw new Error("Cloudinary keys missing — run with --env-file=.env.local");

/* ---------- text helpers ---------- */

const NAMED = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", hellip: "…", ndash: "–", mdash: "—", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“" };
function decode(s) {
  return String(s)
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => NAMED[n.toLowerCase()] ?? m);
}
const shorten = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n)) + "…");
const stripTags =(html) => decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Kolkata" });
}

// The old site files every post under "Education"/"Uncategorized", so group
// them by topic instead, which makes the category filter on /blogs useful.
const CATEGORY_RULES = [
  ["Admissions", /admission/i],
  ["Exams & Study Tips", /topper|exam|study|memori[sz]e|focus|books for|math|homework|handwriting|board|score/i],
  ["Parenting", /parent|routine|habit|positive thinking/i],
  ["School Life", /teacher|classroom|assembl|outdoor|activity|project-based|english speaking|science facts|digital literacy|21st|lifelong/i],
  ["Choosing a School", /school|cbse/i],
];
function categoryFor(title) {
  return (CATEGORY_RULES.find(([, re]) => re.test(title)) || ["Education"])[0];
}

/* ---------- Cloudinary ---------- */

let cache = {};
try {
  cache = JSON.parse(await fs.readFile(CACHE_FILE, "utf8"));
} catch {}

function publicIdFor(url) {
  const base = path.basename(new URL(url).pathname).replace(/\.[a-z0-9]+$/i, "");
  const safe = base.toLowerCase().replace(/[^a-z0-9_-]+/g, "-").slice(0, 80);
  const hash = crypto.createHash("md5").update(url).digest("hex").slice(0, 6);
  return `tbs-website/blogs/${safe}-${hash}`;
}

async function rehost(url) {
  if (!url || !/^https?:\/\//.test(url)) return url;
  if (cache[url]) return cache[url];
  const params = { overwrite: "false", public_id: publicIdFor(url), timestamp: String(Math.floor(Date.now() / 1000)) };
  const toSign = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join("&");
  const form = new FormData();
  Object.entries(params).forEach(([k, v]) => form.append(k, v));
  form.append("api_key", KEY);
  form.append("signature", crypto.createHash("sha1").update(toSign + SECRET).digest("hex"));
  form.append("file", url); // Cloudinary downloads the image from the old site itself
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`, { method: "POST", body: form });
  const data = await res.json();
  if (!res.ok) {
    // usually a file that is already missing (404) on the old site
    console.warn(`  ! image skipped (${data.error?.message}): ${url}`);
    return null;
  }
  cache[url] = data.secure_url;
  await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 1));
  return data.secure_url;
}

/* ---------- HTML cleanup ---------- */

async function cleanHtml(html, slugs) {
  let out = html
    .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");
  // WordPress wraps most paragraphs in <span style="font-weight: 400;">
  for (let i = 0; i < 3; i++) out = out.replace(/<span(?:\s+style="[^"]*")?\s*>([\s\S]*?)<\/span>/gi, "$1");
  out = out
    .replace(/\s(style|class|id|srcset|sizes|decoding|data-[\w-]+)="[^"]*"/gi, "")
    .replace(/<p>\s*(&nbsp;)?\s*<\/p>/gi, "");

  // links to other old blog posts -> the new /blogs/<slug> page
  out = out.replace(/href="https?:\/\/(?:www\.)?thebharatschool\.com\/([^/"#?]+)\/?([#?][^"]*)?"/gi, (m, slug, rest = "") =>
    slugs.has(slug) ? `href="/blogs/${slug}${rest}"` : m
  );

  // unwrap links that only open the full-size image file on the old site
  out = out.replace(/<a href="[^"]*\/wp-content\/uploads\/[^"]+\.(?:jpe?g|png|webp|gif)">([\s\S]*?)<\/a>/gi, "$1");

  // re-host inline images; drop the ones that are already broken on the old site
  const srcs = [...out.matchAll(/<img[^>]*\ssrc="([^"]+)"/gi)].map((m) => m[1]);
  for (const src of new Set(srcs)) {
    const next = await rehost(decode(src));
    if (next) {
      out = out.split(`src="${src}"`).join(`src="${next}"`);
    } else {
      const esc = src.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      out = out.replace(new RegExp(`<img[^>]*src="${esc}"[^>]*>`, "g"), "");
    }
  }
  // figures / paragraphs left empty after removing a broken image
  out = out.replace(/<(figure|p)>\s*(<figcaption>[\s\S]*?<\/figcaption>)?\s*<\/\1>/gi, "");
  out = out.replace(/<img(?![^>]*\sloading=)/gi, '<img loading="lazy"');
  return out.trim();
}

/* ---------- main ---------- */

const res = await fetch(`${WP}/wp-json/wp/v2/posts?per_page=100&_embed=1&status=publish`);
if (!res.ok) throw new Error(`WordPress API: ${res.status}`);
const posts = await res.json();
console.log(`${posts.length} posts found`);
const slugs = new Set(posts.map((p) => p.slug));

const list = [];
const content = {};
for (const [i, p] of posts.entries()) {
  const seo = p.yoast_head_json || {};
  const title = decode(p.title.rendered);
  console.log(`[${i + 1}/${posts.length}] ${p.slug}`);

  const featured = p._embedded?.["wp:featuredmedia"]?.[0];
  const cover = await rehost(featured?.source_url || seo.og_image?.[0]?.url);
  const tags = (p._embedded?.["wp:term"] || [])
    .flat()
    .filter((t) => t.taxonomy === "post_tag")
    .map((t) => decode(t.name).replace(/^[-\s]+/, "").trim())
    .filter(Boolean);
  const minutes = parseInt(seo.twitter_misc?.["Est. reading time"], 10);

  content[p.slug] = await cleanHtml(p.content.rendered, slugs);
  list.push({
    id: p.slug,
    slug: p.slug,
    title,
    category: categoryFor(title),
    author: { name: "The Bharat School", role: "Editorial Team", avatar: "/logo.png" },
    date: formatDate(p.date_gmt + "Z"),
    publishedAt: p.date_gmt + "Z",
    updatedAt: p.modified_gmt + "Z",
    readTime: `${Number.isFinite(minutes) ? minutes : Math.max(1, Math.round(stripTags(p.content.rendered).split(" ").length / 200))} min read`,
    featured: i === 0,
    coverImage: cover || "/campus-hero.png",
    coverAlt: decode(featured?.alt_text || "") || title,
    // WordPress excerpts are often the whole article, so use the short SEO description
    excerpt: decode(seo.description || "") || shorten(stripTags(p.excerpt.rendered), 200),
    tags: [...new Set(tags)],
    seo: {
      title: decode(seo.title || title),
      description: decode(seo.description || stripTags(p.excerpt.rendered)),
      ogImage: (seo.og_image?.[0]?.url && (await rehost(seo.og_image[0].url))) || cover || null,
      noindex: seo.robots?.index === "noindex",
    },
  });
}

await fs.writeFile(path.join(ROOT, "src/data/blogPosts.json"), JSON.stringify(list, null, 1));
await fs.writeFile(path.join(ROOT, "src/data/blogContent.json"), JSON.stringify(content));
console.log(`Done: ${list.length} posts, ${Object.keys(cache).length} images on Cloudinary`);
