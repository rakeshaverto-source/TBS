import { pageMetadata } from "@/lib/seo";

// The page itself is a client component, so its SEO metadata lives here.
export const metadata = pageMetadata({
  title: "Careers at The Bharat School, Panchkula | Teaching Jobs",
  description: "Join The Bharat School, Panchkula. Explore current teaching and administrative openings and apply online to work with us.",
  path: "/careers",
});

export default function Layout({ children }) {
  return children;
}
