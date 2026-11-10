import { pageMetadata } from "@/lib/seo";

// The page itself is a client component, so its SEO metadata lives here.
export const metadata = pageMetadata({
  title: "Why Families Stay | The Bharat School, Panchkula",
  description: "Hear from parents on why families choose and stay with The Bharat School, Panchkula: safety, transparent fees, caring teachers and strong results.",
  path: "/why-families-stay",
});

export default function Layout({ children }) {
  return children;
}
