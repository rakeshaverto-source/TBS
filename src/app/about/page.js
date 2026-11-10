import { pageMetadata } from "@/lib/seo";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata = pageMetadata({
  title: "The Bharat School - Empowering Minds, Shaping Futures",
  description:
    "Explore lively community at The Bharat School, fostering academic and personal growth. We focus on building skills and values for success in all areas of life.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
