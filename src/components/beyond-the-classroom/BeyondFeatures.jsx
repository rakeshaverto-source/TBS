"use client";

import React from "react";
import Image from "next/image";
import { Compass, CheckCircle2, Flame, Users } from "lucide-react";

export default function BeyondFeatures() {
  return (
    <>
      {/* ================= HOW WE PREPARE (3-STAGE ROADMAP) ================= */}
      <section id="how-we-prepare" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#1e3a8a] text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              Our Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              How We Turn Ambition Into Achievement
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We never expect students to figure out competitive exams alone. Our 3-stage institutional system takes them from interest to celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-slate-50/60 rounded-3xl p-8 border border-slate-200 shadow-sm relative group hover:border-[#1e3a8a] hover:bg-white hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center font-black text-2xl mb-6 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Register Early
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                No last-minute scrambles. In August and September, we profile student curiosity, match them with relevant Olympiads, and complete all registrations seamlessly.
              </p>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Grade-appropriate aptitude diagnostics
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  School-subsidized coordination
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-red-500 shadow-md shadow-red-500/5 relative group hover:-translate-y-1 transition-all">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-widest">
                Core Engine
              </div>
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-2xl mb-6 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Prepare Seriously
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Targeted weekly sprints that train minds to enjoy analytical difficulty. We break down non-routine HOTS problems and train for calm, methodical thinking under time.
              </p>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  10-Year Olympiad question archives
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Faculty mentoring circles after classes
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50/60 rounded-3xl p-8 border border-slate-200 shadow-sm relative group hover:border-[#1e3a8a] hover:bg-white hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-black text-2xl mb-6 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Celebrate Every Qualifier
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Success isn&apos;t quietly filed in a folder. Every qualifier, zonal distinction, and medalist is called on stage at morning assemblies and recognized by name.
              </p>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Assembly roll-call & certificate honors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Permanent Wall of Champions feature
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPORTS SPOTLIGHT: SQAY & SNOWSHOE (LIGHT THEME) ================= */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50/40 text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold border border-red-200">
                  <Flame className="w-3.5 h-3.5" />
                  Bharat Sports Club Case Study
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  No Dedicated Range. No Winter Rink. Yet International Medals.
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  When our students lined up against competitors with multi-million dollar sports academies, critics wondered how a school with everyday grounds could contend. The answer was simple: <span className="text-[#1e3a8a] font-semibold">relentless discipline, master-level technique coaching, and unyielding heart.</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="text-2xl font-black text-slate-900">Sqay</div>
                    <div className="text-xs text-slate-500">Traditional Martial Arts Dominance</div>
                  </div>
                  <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/80">
                    <div className="text-2xl font-black text-amber-700">Snowshoe</div>
                    <div className="text-xs text-slate-600">High-Altitude Endurance Champions</div>
                  </div>
                  <div className="bg-red-50/60 p-4 rounded-xl border border-red-200/80 col-span-2 sm:col-span-1">
                    <div className="text-2xl font-black text-red-600">Zero Excuses</div>
                    <div className="text-xs text-slate-600">Discipline Trumps Luxury</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 border border-slate-200 shadow-xl">
                  <Image
                    src="/Sports.webp"
                    alt="TBS Bharat Sports Club Training"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-xs text-white/95">
                      <span className="font-bold text-amber-400">TBS Champions Circle:</span> Real training on real turf.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STUDENT LEADERSHIP HIGHLIGHT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-2xl border border-slate-200">
                <Image
                  src="/cultural day.avif"
                  alt="Student Leadership in Action"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-bold">
                      The Prefectorial Council
                    </span>
                    <h4 className="text-xl font-bold text-white">
                      Leadership is a Daily Practice, Not an Abstract Lesson.
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                The Prefect System
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Real Responsibility, Given Early.
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                We believe young people rise to the level of expectations placed on them. The TBS Student Council manages peer mentoring, eco-sustainability audits, morning assemblies, and student welfare initiatives with genuine administrative authority.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Authentic Decision Making:</strong>
                    <span className="text-xs text-slate-600">Council members represent student voices directly to the principal&apos;s office.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">House Governance & Spirit:</strong>
                    <span className="text-xs text-slate-600">Captains rally houses across inter-house debates, athletics, and community outreach.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 text-sm block">Crisis Resolution & Peer Empathy:</strong>
                    <span className="text-xs text-slate-600">Trained in active listening, prefects help mediate everyday playground friction.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
