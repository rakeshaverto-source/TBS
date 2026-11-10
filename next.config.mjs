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
      ...blogPosts.map((p) => ({ source: `/${p.slug}`, destination: `/blogs/${p.slug}`, permanent: true })),
    ];
  },
};

export default nextConfig;
