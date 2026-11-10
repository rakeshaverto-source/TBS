"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Footprints,
  Trophy,
  Award,
  Users,
  Calendar,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { useContent } from "@/lib/content/store";
import { getIcon } from "@/lib/icons";

export default function BeyondPreview() {
  const previewItems = useContent("home").beyondPreview;
  return (
    <section className="py-20 sm:py-24 bg-linear-to-b from-white via-slate-50 to-slate-100 relative overflow-hidden border-t border-slate-200">
      {/* Background Accent Gradients */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-4 border border-red-100">
              Holistic Growth Beyond Syllabus
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Beyond the Classroom
            </h2>
            <p className="text-lg sm:text-xl font-bold text-red-600 mt-2">
              Learning that doesn&apos;t end at the bell.
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Four ways students grow here beyond the syllabus — real programmes, not a list of adjectives.
            </p>
          </div>

          <div>
            <Link
              href="/beyond-the-classroom"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#1e3a8a] text-white hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-0.5"
            >
              <span>Explore Full Framework</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {previewItems.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <div className={`text-xs font-semibold ${item.accent} mb-3`}>
                    {item.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-[#1e3a8a] transition-colors">
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Olympiad Calendar Sneak Peek Banner */}
        <div className="bg-[#0a0f1d] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-yellow-400/20 text-yellow-300 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                Session 2026–27 Schedule Live
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                This Session&apos;s Olympiad Calendar
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                IMO (Maths: Oct/Nov/Dec), ISO/NSO (Science: Oct/Nov/Dec), IEO, IGKO, ICSO & others. Registered early, prepared seriously.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/beyond-the-classroom#olympiad-calendar"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-yellow-400 text-slate-950 hover:bg-yellow-300 transition-colors shadow-lg"
              >
                View Exam Dates & Windows
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
