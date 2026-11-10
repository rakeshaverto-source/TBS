"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Calendar, Trophy } from "lucide-react";
import { getIcon } from "@/lib/icons";

export default function BeyondHero({ pillars, onSelectPillar }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 text-slate-900 border-b border-slate-200/80">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(30,58,138,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
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
          <span className="text-[#1e3a8a] font-semibold">Beyond the Classroom</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs sm:text-sm font-semibold text-[#1e3a8a] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              Co-Curricular & Competitive Framework • Session 2026–27
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-5 text-slate-900">
              Beyond the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] via-blue-700 to-indigo-800">
                Classroom
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-red-600 mb-3 tracking-tight">
              Learning that doesn&apos;t end at the bell.
            </p>

            {/* Core Philosophy Statement */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              Four ways students grow here beyond the syllabus —{" "}
              <span className="text-[#1e3a8a] font-semibold">
                real programmes, not a list of adjectives.
              </span>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#four-pillars"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-red-600 text-white hover:bg-red-500 transition-all shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5"
              >
                Explore The 4 Programmes
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#olympiad-calendar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 border border-slate-200 text-[#1e3a8a] shadow-xs hover:border-slate-300 transition-all hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-amber-500" />
                View Olympiad Calendar
              </a>
            </div>

            {/* Micro stats banner as sleek light cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full pt-4 border-t border-slate-200/80">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1e3a8a]">4 Pillars</div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">Distinct Growth Paths</div>
              </div>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-600">1000+</div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">Medals in Sports Competitions</div>
              </div>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-red-600">100%</div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">Olympiad Early Prep</div>
              </div>
            </div>
          </motion.div>

          {/* Right Card / Feature Matrix */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-blue-100/60 via-slate-100 to-white shadow-xl border border-slate-200/80">
              <div className="bg-white rounded-[22px] p-6 sm:p-7 border border-slate-100 relative overflow-hidden space-y-4">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-widest text-slate-600 uppercase">
                      Co-Curricular Matrix
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                    Session 2026–27
                  </span>
                </div>

                {/* Highlight Stat & Ethos Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-amber-50/50 border border-slate-200/80 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 shadow-inner">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Where Coaching Beats Facilities
                      </div>
                      <div className="text-xs text-slate-600">
                        1000+ Medals in Sports Competitions
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-extrabold text-[#1e3a8a] shrink-0">
                    4 Pillars
                  </span>
                </div>

                {/* 4 Clean Full-Width Programme Rows */}
                <div className="space-y-2.5">
                  {pillars.map((p, idx) => {
                    const IconComp = getIcon(p.icon);
                    return (
                      <button
                        key={p.id}
                        onClick={() => onSelectPillar(idx)}
                        className="w-full p-3.5 rounded-xl bg-slate-50/70 hover:bg-blue-50/60 border border-slate-200/60 hover:border-blue-200 transition-all text-left group flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${p.color} flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors">
                                {p.title}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/70 text-slate-700">
                                {p.number}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {p.subtitle}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1e3a8a] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                      </button>
                    );
                  })}
                </div>

                {/* Card Bottom: Quick Olympiad Calendar Link */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    Registered early, prepared seriously.
                  </span>
                  <a
                    href="#olympiad-calendar"
                    className="text-[#1e3a8a] hover:text-blue-900 font-bold inline-flex items-center gap-1 group"
                  >
                    <span>Olympiad Calendar</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
