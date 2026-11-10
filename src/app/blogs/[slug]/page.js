import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, ChevronRight, Clock, Phone, Tag } from "lucide-react";
import blogContent from "@/data/blogContent.json";
import { DEFAULT_CONTENT } from "@/lib/content/defaults";
import { SITE_URL, getSectionContent } from "@/lib/server/content";

// Pages are built ahead of time and refreshed from the database every 5 minutes,
// so edits made in the admin panel show up without a redeploy.
export const revalidate = 300;
export const dynamicParams = true;

export function generateStaticParams() {
  return DEFAULT_CONTENT.blogs.posts.map((p) => ({ slug: p.slug }));
}

// A few imported WordPress slugs contain percent-encoded emoji ("...-%f0%9f%8c%8c"),
// while the URL param arrives decoded, so compare both in decoded form.
function normalizeSlug(s) {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

async function findPost(slug) {
  const { posts } = await getSectionContent("blogs");
  const wanted = normalizeSlug(slug);
  const index = posts.findIndex((p) => normalizeSlug(p.slug) === wanted);
  return index === -1 ? null : { post: posts[index], posts };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const found = await findPost(slug);
  if (!found) return { title: "Article not found | The Bharat School" };
  const { post } = found;
  const seo = post.seo || {};
  const title = seo.title || `${post.title} | The Bharat School`;
  const description = seo.description || post.excerpt;
  const image = seo.ogImage || post.coverImage;
  const url = `/blogs/${post.slug}`;
  return {
    title: { absolute: title },
    description,
    keywords: post.tags,
    alternates: { canonical: url },
    robots: seo.noindex ? { index: false, follow: true } : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "The Bharat School",
      locale: "en_IN",
      images: image ? [{ url: image, alt: post.coverAlt || post.title }] : undefined,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title, description, images: image ? [image] : undefined },
  };
}

function jsonLd(post) {
  const url = `${SITE_URL}/blogs/${post.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.seo?.description || post.excerpt,
        image: post.seo?.ogImage || post.coverImage,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        mainEntityOfPage: url,
        keywords: (post.tags || []).join(", "),
        articleSection: post.category,
        author: { "@type": "Organization", name: "The Bharat School", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "The Bharat School",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/blogs` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
  // "<" escaped so article text can never close the script tag
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// Gives every <h2> in the article an id and returns the list for the sidebar's table of contents
function withHeadingIds(html) {
  const toc = [];
  const used = new Set();
  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/gi, (m, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").trim();
    if (!text) return m;
    let id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "section";
    while (used.has(id)) id += "-2";
    used.add(id);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
}

function SidebarCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const found = await findPost(slug);
  if (!found) notFound();
  const { post, posts } = found;

  const paragraphs = Array.isArray(post.content) ? post.content.filter(Boolean) : [];
  const { html, toc } = paragraphs.length || !blogContent[post.slug]
    ? { html: null, toc: [] }
    : withHeadingIds(blogContent[post.slug]);

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const recent = posts.filter((p) => p.slug !== post.slug).slice(0, 5);
  const categoryCounts = posts.reduce((acc, p) => ({ ...acc, [p.category]: (acc[p.category] || 0) + 1 }), {});

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(post) }} />

      {/* Header */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-[#0d1527] text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/blogs" className="hover:text-yellow-400 transition-colors">Blogs</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-yellow-400 font-semibold">{post.category}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300">
            <span className="font-semibold text-white">{post.author?.name || "The Bharat School"}</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <time dateTime={post.publishedAt}>{post.date}</time>
            </span>
            {post.readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" /> {post.readTime}
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
      <article className="lg:col-span-8 min-w-0">
        {post.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage}
            alt={post.coverAlt || post.title}
            className="w-full aspect-[16/9] object-cover rounded-3xl shadow-xl mb-10 bg-slate-100"
          />
        )}

        {html ? (
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <div className="blog-content">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        )}

        {post.tags?.length > 0 && (
          <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400" />
            {post.tags.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">{t}</span>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-bold text-[#1e3a8a] hover:text-blue-700">
            <ArrowLeft className="w-4 h-4" /> All articles
          </Link>
        </div>
      </article>

      {/* Sidebar */}
      <aside className="lg:col-span-4">
        <div className="space-y-6 lg:sticky lg:top-28">
          {toc.length > 1 && (
            <SidebarCard title="In this article">
              <ol className="space-y-2 text-sm">
                {toc.map((h, i) => (
                  <li key={h.id} className="flex gap-2">
                    <span className="text-xs font-bold text-[#e1251b] mt-0.5 w-5 shrink-0">{i + 1}.</span>
                    <a href={`#${h.id}`} className="text-slate-700 hover:text-[#1e3a8a] leading-snug">{h.text}</a>
                  </li>
                ))}
              </ol>
            </SidebarCard>
          )}

          {/* Admissions call-to-action */}
          <div className="rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#0f1d4a] p-6 text-white shadow-lg">
            <p className="text-xs font-bold uppercase tracking-wider text-yellow-300 mb-2">Admissions Open 2026–27</p>
            <p className="text-lg font-black leading-snug mb-2">Give your child the TBS advantage</p>
            <p className="text-sm text-slate-300 mb-5">Visit our Panchkula campus or talk to our admissions team.</p>
            <div className="flex flex-col gap-2">
              <Link href="/admissions" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e1251b] hover:bg-red-700 px-4 py-2.5 text-sm font-bold transition-colors">
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+919876155746" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-2.5 text-sm font-semibold transition-colors">
                <Phone className="w-4 h-4" /> Call 9876155746
              </a>
            </div>
          </div>

          <SidebarCard title="Latest articles">
            <ul className="space-y-4">
              {recent.map((r) => (
                <li key={r.slug}>
                  <Link href={`/blogs/${r.slug}`} className="group flex gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.coverImage} alt="" loading="lazy" className="w-20 h-14 shrink-0 rounded-lg object-cover bg-slate-100" />
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-[#1e3a8a]">{r.title}</span>
                      <span className="block mt-1 text-xs text-slate-500">{r.date}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarCard>

          <SidebarCard title="Categories">
            <ul className="space-y-1">
              {Object.entries(categoryCounts).map(([cat, count]) => (
                <li key={cat}>
                  <Link
                    href={`/blogs?category=${encodeURIComponent(cat)}`}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                      cat === post.category ? "bg-blue-50 font-bold text-[#1e3a8a]" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-xs font-bold text-slate-400">{count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarCard>
        </div>
      </aside>
      </div>

      {related.length > 0 && (
        <section className="bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-2xl font-black text-slate-900 mb-8">More in {post.category}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.coverImage} alt={r.coverAlt || r.title} loading="lazy" className="w-full aspect-[16/9] object-cover bg-slate-100" />
                  <div className="p-5">
                    <p className="text-xs text-slate-500 mb-2">{r.date}</p>
                    <h3 className="font-bold text-slate-900 leading-snug group-hover:text-[#1e3a8a] transition-colors">{r.title}</h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#e1251b]">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
