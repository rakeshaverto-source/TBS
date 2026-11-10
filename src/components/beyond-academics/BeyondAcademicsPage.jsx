"use client";

import {
  BeyondHero,
  ActivityRibbon,
  BeyondClassrooms,
  CoCurricular,
  SocialAwareness,
  ExploringSkills,
  FieldTrips,
  MagicalMoments,
} from "@/components/beyond-academics/BeyondAcademicsSections";
import { useContent } from "@/lib/content/store";

export default function BeyondAcademicsPage() {
  const beyondAcademicsData = useContent("beyondAcademics");
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-500 selection:text-white">
      {/* 1. Hero */}
      <BeyondHero hero={beyondAcademicsData.hero} collage={beyondAcademicsData.hero.collage} />

      {/* Scrolling Activity Ribbon */}
      <ActivityRibbon />

      {/* 2. Beyond The Classrooms */}
      <BeyondClassrooms classrooms={beyondAcademicsData.classrooms} />

      {/* 3. Co-curricular Activities */}
      <CoCurricular data={beyondAcademicsData.coCurricular} />

      {/* 4. Social Awareness & Charity */}
      <SocialAwareness data={beyondAcademicsData.socialAwareness} />

      {/* 5. Exploring Skills (Dance & Music) */}
      <ExploringSkills data={beyondAcademicsData.exploringSkills} />

      {/* 6. Field Trips */}
      <FieldTrips data={beyondAcademicsData.fieldTrips} />

      {/* 7. Magical Moments Gallery */}
      <MagicalMoments data={beyondAcademicsData.magicalMoments} />
    </div>
  );
}
