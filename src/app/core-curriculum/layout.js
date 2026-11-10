import { pageMetadata } from "@/lib/seo";

// The page itself is a client component, so its SEO metadata lives here.
export const metadata = pageMetadata({
  title: "Best Schools in Panchkula - Core Curriculum at The Bharat School",
  description: "Best Schools The Bharat School in Panchkula offers a holistic curriculum focused on academic excellence and personal growth. Explore now!",
  path: "/core-curriculum",
});

export default function Layout({ children }) {
  return children;
}
