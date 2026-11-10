import blogPosts from "./src/data/blogPosts.json" with { type: "json" };

/** @type {import('next').NextConfig} */
const nextConfig = {
  // No `output: 'export'`: the admin panel needs the /api routes (MongoDB,
  // Cloudinary, login), which only run on a Node server such as Vercel.
  // `standalone` writes .next/standalone: a self-contained folder that runs on
  // any Node host with `node server.js`. Skipped on Vercel, whose build breaks
  // with it (missing next-server.js.nft.json).
  output: process.env.VERCEL ? undefined : 'standalone',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.31', '192.168.1.2', '192.168.1.18'],

  // The old WordPress site served each blog post at /<slug>/ and the list at
  // /our-blogs/. Permanent redirects keep their Google rankings and old links
  // working once this site takes over the domain.
  async redirects() {
    return [
      { source: "/our-blogs", destination: "/blogs", permanent: true },
      // Old WordPress pages whose content now lives under a new URL.
      // Pages like /faq, /mpd, /contact-us, /achievements kept their old URL, so need no redirect.
      { source: "/our-school", destination: "/about", permanent: true },
      { source: "/work-with-us", destination: "/careers", permanent: true },
      { source: "/mpd-form", destination: "/mpd", permanent: true },
      { source: "/core-curriculum/booklist-2026-27", destination: "/core-curriculum#booklist-session", permanent: true },
      { source: "/thank-you", destination: "/contact-us", permanent: true },
      { source: "/test", destination: "/", permanent: true },
      { source: "/category/:slug*", destination: "/blogs", permanent: true },
      { source: "/author/:slug*", destination: "/blogs", permanent: true },
      { source: "/feed", destination: "/blogs", permanent: true },
      { source: "/:file(sitemap_index|page-sitemap|post-sitemap|wp-sitemap|category-sitemap|author-sitemap).xml", destination: "/sitemap.xml", permanent: true },
      ...blogPosts.map((p) => ({ source: `/${p.slug}`, destination: `/blogs/${p.slug}`, permanent: true })),
    ];
  },
};

export default nextConfig;
