"use client";

import React from "react";
import CurriculumHero from "@/components/core-curriculum/CurriculumHero";
import CurriculumPillarsGrid from "@/components/core-curriculum/CurriculumPillarsGrid";
import CurriculumModules from "@/components/core-curriculum/CurriculumModules";
import BooklistSection from "@/components/core-curriculum/BooklistSection";
import CurriculumCTA from "@/components/core-curriculum/CurriculumCTA";
import { useContent } from "@/lib/content/store";

export default function CoreCurriculumPage() {
  const coreCurriculumData = useContent("coreCurriculum");
  const booksData = useContent("booklist");
  const handleJumpToBooks = () => {
    const el = document.getElementById("booklist-session");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-red-500 selection:text-white">
      {/* 1. Hero Section */}
      <CurriculumHero 
        heroData={coreCurriculumData.hero} 
        onJumpToBooks={handleJumpToBooks} 
      />

      {/* 2. 5 Core Curriculum Pillars */}
      <CurriculumPillarsGrid 
        pillars={coreCurriculumData.pillars} 
      />

      {/* 3. Deep-Dive Pedagogical Modules (Beyond Books, Practical Learning, Tata Class Edge, Assessments, Career Guidance) */}
      <CurriculumModules 
        modules={coreCurriculumData.modules} 
      />

      {/* 4. Complete Booklist Session 2026-27 with interactive Class tabs (Class 1-12) & Live Search */}
      <BooklistSection 
        booksData={booksData} 
      />

      {/* 5. Contact & Admissions CTA */}
      <CurriculumCTA />
    </main>
  );
}
