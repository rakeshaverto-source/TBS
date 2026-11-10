"use client";

import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import LeadershipMessages from "@/components/about/LeadershipMessages";
import HistoricalTimeline from "@/components/about/HistoricalTimeline";
import VisionMission from "@/components/about/VisionMission";
import { useContent } from "@/lib/content/store";

export default function AboutPageContent() {
  const aboutData = useContent("about");
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-500 selection:text-white">
      {/* 1. Hero */}
      <AboutHero />

      {/* 2. About Our School & Mentors */}
      <AboutIntro intro={aboutData.intro} mentors={aboutData.mentors} />

      {/* 3. Messages from Leadership */}
      <LeadershipMessages messages={aboutData.messages} />

      {/* 4. Historical Timeline */}
      <HistoricalTimeline timeline={aboutData.timeline} />

      {/* 5. Vision & Mission */}
      <VisionMission vision={aboutData.vision} mission={aboutData.mission} />
    </div>
  );
}
