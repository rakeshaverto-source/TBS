"use client";

import React from "react";
import {
  Calendar,
  Search,
  Clock,
  GraduationCap,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function BeyondCalendar({
  filteredOlympiads,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedGrade,
  setSelectedGrade,
  onOpenReminder
}) {
  return (
    <section id="olympiad-calendar" className="py-24 bg-slate-100/80 text-slate-900 relative overflow-hidden border-y border-slate-200">
      {/* Subtle Decorative Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
              Session 2026–27 Schedule
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
              This Session&apos;s Olympiad Calendar
            </h2>
            <p className="text-lg font-bold text-red-600">
              Registered early, prepared seriously.
            </p>
            <p className="text-sm text-slate-600 max-w-xl mt-1">
              We register early, prepare seriously, and celebrate every qualifier by name. Review official test windows, eligibility, and preparation dates below.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar (Light Theme) */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Box */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by exam name (e.g. IMO, NSO, English)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto hide-scrollbar">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#1e3a8a] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Subjects
              </button>
              <button
                onClick={() => setSelectedCategory("mathematics")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === "mathematics"
                    ? "bg-[#1e3a8a] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Math
              </button>
              <button
                onClick={() => setSelectedCategory("science")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === "science"
                    ? "bg-[#1e3a8a] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Science
              </button>
              <button
                onClick={() => setSelectedCategory("languages")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === "languages"
                    ? "bg-[#1e3a8a] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                English
              </button>
            </div>

            {/* Grade Filter */}
            <div className="md:col-span-3 flex justify-end">
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full sm:w-auto bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#1e3a8a]"
              >
                <option value="all">All Classes (1–12)</option>
                <option value="primary">Primary (Classes 1–5)</option>
                <option value="middle">Middle Wing (Classes 6–8)</option>
                <option value="senior">Senior Wing (Classes 9–12)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Desktop Table View (Light Theme) */}
        <div className="hidden lg:block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <th className="py-4 px-6">Olympiad</th>
                <th className="py-4 px-6">Official Window</th>
                <th className="py-4 px-6">Eligible Classes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredOlympiads.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-slate-500">
                    No Olympiads found matching your filter criteria.
                  </td>
                </tr>
              ) : (
                filteredOlympiads.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-blue-50/40 transition-colors group"
                  >
                    {/* Olympiad Title & Code */}
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${item.accentBg} flex items-center justify-center font-extrabold text-white text-xs shadow-xs shrink-0`}>
                          {item.code.split(" ")[0]}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                            <span>{item.organizer}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-400" />
                            <span className="text-amber-700 font-semibold">{item.highlight}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Official Window Dates */}
                    <td className="py-5 px-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs font-mono font-bold">
                        <Clock className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                        <span>{item.windowDates}</span>
                      </div>
                    </td>

                    {/* Classes */}
                    <td className="py-5 px-6">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                        {item.classes}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet Card View (Light Theme) */}
        <div className="lg:hidden space-y-4">
          {filteredOlympiads.length === 0 ? (
            <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
              No Olympiads match your criteria.
            </div>
          ) : (
            filteredOlympiads.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 space-y-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${item.accentBg} flex items-center justify-center font-extrabold text-white text-xs shrink-0`}>
                      {item.code.split(" ")[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base leading-snug">
                        {item.name}
                      </h4>
                      <span className="text-xs text-slate-500">
                        {item.organizer}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {item.classes}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="text-xs text-slate-500">Exam Window:</div>
                  <div className="text-xs font-mono font-bold text-amber-800">
                    {item.windowDates}
                  </div>
                </div>

                <div className="pt-2 flex items-center border-t border-slate-100">
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {item.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Note & Exam Advisory (Light Theme) */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-sm font-bold text-slate-900 block">
                School-Assisted Registration Window & Verification
              </span>
              <span className="text-xs text-slate-600">
                All enrollment fees, test roll numbers, and official sample question banks are coordinated by The Bharat School academic cell. Parents receive direct SMS/SchoolPad updates.
              </span>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-[#1e3a8a] hover:text-blue-900 uppercase tracking-wider shrink-0 underline underline-offset-4"
          >
            Contact Olympiad Coordinator &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
