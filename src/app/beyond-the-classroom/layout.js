import { pageMetadata } from "@/lib/seo";

// The page itself is a client component, so its SEO metadata lives here.
export const metadata = pageMetadata({
  title: "Beyond the Classroom | Olympiads, Clubs & Sports at The Bharat School",
  description: "Olympiads, competitions, clubs and sports at The Bharat School, Panchkula: how we prepare students to excel beyond the classroom.",
  path: "/beyond-the-classroom",
});

export default function Layout({ children }) {
  return children;
}
