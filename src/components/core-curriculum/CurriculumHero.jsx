"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ArrowRight, 
  BookOpen, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Download 
} from "lucide-react";

export default function CurriculumHero({ heroData, onJumpToBooks }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-slate-50 text-slate-900 border-b border-slate-200/80">
      {/* Background radial lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(30,58,138,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs md:text-sm text-slate-500 mb-8"
        >
          <Link href="/" className="hover:text-[#1e3a8a] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#1e3a8a] font-semibold">Core Curriculum</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-xs sm:text-sm font-semibold text-[#1e3a8a] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              {heroData.badge}
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-5 text-slate-900">
              {heroData.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-blue-700 to-indigo-800">
                {/* keep the school name on one line; only "at" may wrap before it */}
                {heroData.highlight.startsWith("at ") ? (
                  <>
                    at <span className="sm:whitespace-nowrap">{heroData.highlight.slice(3)}</span>
                  </>
                ) : (
                  <span className="sm:whitespace-nowrap">{heroData.highlight}</span>
                )}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
              {heroData.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onJumpToBooks}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1e3a8a] to-blue-700 hover:from-blue-900 hover:to-indigo-800 text-white font-semibold shadow-md shadow-blue-900/20 hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Booklist 2026–27</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold border border-slate-300/80 shadow-xs transition-all duration-200"
              >
                <span>Admissions Enquiry</span>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-200">
              {heroData.stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-[#1e3a8a]">{s.value}</span>
                  <span className="text-xs text-slate-500 font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-xl shadow-blue-900/5">
              {/* Decorative Corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-900/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">CBSE Accredited</h3>
                  <p className="text-xs text-slate-500">Affiliated to Central Board of Secondary Education</p>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-3.5 mb-6">
                {[
                  "Comprehensive NCERT & CBSE benchmarked syllabi",
                  "Tata Class Edge Phygital digital classrooms",
                  "State-of-the-art Composite Science & Math Labs",
                  "Individual Student Portfolios & Continuous Growth Tracking",
                  "Holistic Skill Building, Field Trips & Creative Competitions"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Quick Contact Card Inside */}
              <div className="rounded-2xl bg-white p-4 border border-blue-100 shadow-xs">
                <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Queries about Curriculum?</p>
                <a href="tel:+919876155746" className="text-sm font-bold text-[#1e3a8a] hover:text-blue-700 transition-colors">
                  Call 9876155746
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
