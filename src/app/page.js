import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import StudentJourney from "@/components/StudentJourney";
import TBSJourney from "@/components/TBSJourney";
import OurStory from "@/components/OurStory";
import ClassSize from "@/components/ClassSize";
import CampusLife from "@/components/CampusLife";
import ResultsRecognition from "@/components/ResultsRecognition";
import ParentsWords from "@/components/ParentsWords";
import BookTour from "@/components/BookTour";
import WhyChooseUs from "@/components/WhyChooseUs";
import TheTBSDifference from "@/components/TheTBSDifference";
import TBSInNumbers from "@/components/TBSInNumbers";
import CurriculumPillars from "@/components/CurriculumPillars";
import BeyondPreview from "@/components/BeyondPreview";
import LeadPopup from "@/components/LeadPopup";
import { pageMetadata } from "@/lib/seo";
import { JsonLd, schoolJsonLd } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Best CBSE Schools in Panchkula - The Bharat School",
  description:
    "Find the best CBSE schools in Panchkula for your child with modern facilities and a supportive environment. Enroll now for a transformative learning experience.",
  path: "/",
  image: "/logo.png",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={schoolJsonLd} />
      {/* The hero is a photo with no text, so the page's main heading is for search engines and screen readers */}
      <h1 className="sr-only">The Bharat School – Best CBSE School in Sector 12, Panchkula</h1>
      <Hero />
      <WhyChooseUs />
      <Timeline />
      {/* <StudentJourney /> */}
      <TBSJourney />
      <TheTBSDifference />
      <OurStory />
      <ClassSize />
      <CampusLife />
      <BeyondPreview />
      <TBSInNumbers />
      <ResultsRecognition />
      <ParentsWords />
      <CurriculumPillars />
      <BookTour />
      <LeadPopup />
    </main>
  );
}
