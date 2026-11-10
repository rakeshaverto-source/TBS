import { pageMetadata } from "@/lib/seo";

// The page itself is a client component, so its SEO metadata lives here.
export const metadata = pageMetadata({
  title: "Admissions at The Bharat School | CBSE Schools in Panchkula",
  description: "Learn about the admissions procedure at The Bharat School, one of the best CBSE schools in Panchkula. Explore fee structure, school transportation, and more.",
  path: "/admissions",
});

export default function Layout({ children }) {
  return children;
}
