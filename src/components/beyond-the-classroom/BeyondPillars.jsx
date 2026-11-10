"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/icons";

export default function BeyondPillars({
  pillars,
  activePillarTab,
  setActivePillarTab
}) {
  return (
    <section id="four-pillars" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-4 border border-red-100">
            <Zap className="w-3.5 h-3.5" />
            Four Pillars of Growth
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Real Programmes. Not a List of Adjectives.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every afternoon at The Bharat School is engineered with structured, purposeful pathways. Here is how our students develop stamina, courage, intellect, and leadership.
          </p>
        </div>

        {/* 4 Interactive Selector Cards on Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = getIcon(pillar.icon);
            const isActive = activePillarTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarTab(idx)}
                className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between relative group cursor-pointer ${
                  isActive
                    ? "bg-white border-[#1e3a8a] shadow-xl shadow-blue-900/10 ring-2 ring-[#1e3a8a]/20 -translate-y-1"
                    : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 text-slate-600 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 w-full">
                    <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${pillar.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${isActive ? "bg-blue-50 text-[#1e3a8a]" : "text-slate-400"}`}>
                      {pillar.number}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {pillar.badge}
                  </span>

                  <h3 className={`text-lg font-extrabold leading-tight mb-1.5 transition-colors ${isActive ? "text-[#1e3a8a]" : "text-slate-900"}`}>
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                  <span className={isActive ? "text-[#1e3a8a]" : "text-slate-400"}>
                    {pillar.ageGroup}
                  </span>
                  <span className={`flex items-center gap-1 ${isActive ? "text-[#1e3a8a]" : "text-slate-400 group-hover:text-slate-700"}`}>
                    Explore
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-[#1e3a8a] clip-path-triangle hidden lg:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Spotlight of Selected Pillar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pillars[activePillarTab].id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-2xl shadow-slate-200/60 relative overflow-hidden"
          >
            {/* Subtle top accent line matching pillar color */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r ${pillars[activePillarTab].color}`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Pillar Deep Dive Content */}
              <div className="lg:col-span-7 space-y-5">
                {/* Category Pills & Number */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-[#1e3a8a] border border-blue-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#1e3a8a]" />
                    Pillar {pillars[activePillarTab].number} • {pillars[activePillarTab].badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    Eligible: {pillars[activePillarTab].ageGroup}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    {pillars[activePillarTab].title}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-slate-600 mt-2">
                    {pillars[activePillarTab].subtitle}
                  </p>
                </div>

                {/* Elegant Pullquote */}
                <div className="relative pl-5 py-3 my-2 border-l-4 border-amber-500 bg-amber-50/70 rounded-r-2xl pr-4">
                  <p className="text-base sm:text-lg font-serif italic text-slate-800 leading-snug">
                    &ldquo;{pillars[activePillarTab].quote}&rdquo;
                  </p>
                </div>

                {/* Narrative Body */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {pillars[activePillarTab].description}
                </p>

                {/* Key Features: 3 Modern Highlight Cards */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Programme Highlights & Delivery
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {pillars[activePillarTab].keyFeatures.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="bg-slate-50 border border-slate-200/70 rounded-2xl p-4 hover:bg-blue-50/60 hover:border-blue-200 transition-all flex flex-col justify-start"
                      >
                        <div className="flex items-start gap-2 mb-2 text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs font-bold leading-snug">
                            {feat.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {feat.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metric & CTA Footer */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-[#1e3a8a]">
                      {pillars[activePillarTab].stat}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider leading-snug max-w-37.5">
                      {pillars[activePillarTab].statLabel}
                    </span>
                  </div>
                  <a
                    href="#olympiad-calendar"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs bg-[#1e3a8a] text-white hover:bg-blue-900 transition-all shadow-md shadow-blue-900/10 hover:-translate-y-0.5"
                  >
                    <span>Explore Session Calendar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Pillar Visual Media Showcase */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="relative w-full h-90 sm:h-105 lg:h-120 rounded-2xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-100">
                  <Image
                    src={pillars[activePillarTab].image}
                    alt={pillars[activePillarTab].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/20" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-md border border-white/60">
                    {pillars[activePillarTab].badge}
                  </div>

                  {/* Bottom Caption Glass Box */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/60">
                    <div className="text-[11px] font-extrabold text-[#1e3a8a] uppercase tracking-wider mb-0.5">
                      Active Programme Module
                    </div>
                    <div className="text-sm font-bold text-slate-900 leading-snug">
                      {pillars[activePillarTab].subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
