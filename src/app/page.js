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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
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
    </main>
  );
}
