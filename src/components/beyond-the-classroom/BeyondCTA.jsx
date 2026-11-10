"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BeyondCTA() {
  return (
    <section className="py-20 bg-linear-to-r from-[#1e3a8a] via-[#162a63] to-[#0a1226] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-semibold mb-6 border border-white/15">
          Admissions & Co-Curricular Enrollment 2026–27
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
          Give Your Child the Arena to Lead Beyond the Syllabus.
        </h2>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          From the joyful play-movement of Bunny Kicks to international podiums in Sqay and Olympiad laurels, experience how TBS builds well-rounded leaders.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/admissions#book-tour"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-sm bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/40 transition-all hover:-translate-y-0.5"
          >
            Apply for Admission
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/admissions#book-tour"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/15 border border-white/20 text-white transition-all backdrop-blur-sm"
          >
            Book Campus Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
