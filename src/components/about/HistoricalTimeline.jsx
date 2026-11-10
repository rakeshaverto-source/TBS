"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Rocket, Baby, MonitorPlay, School, Database, Award, Medal, GraduationCap, BookOpen, Sparkles } from "lucide-react";
import { getIcon } from "@/lib/icons";

const ICONS = { Rocket, Baby, MonitorPlay, School, Database, Award, Medal, GraduationCap, BookOpen, Sparkles };

function TimelineCard({ item, isLeft }) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-[0_10px_40px_-15px_rgba(30,58,138,0.25)] ring-1 ring-slate-200/70 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(30,58,138,0.4)]">
      {/* Accent Bar */}
      <div className={`absolute top-0 left-0 ${isLeft ? "md:left-auto md:right-0" : ""} h-full w-1 bg-gradient-to-b from-[#e1251b] to-[#1e3a8a]`} />

      {/* Watermark Year */}
      <span className="absolute -bottom-6 -right-2 text-8xl font-black text-slate-100 select-none pointer-events-none transition-colors duration-500 group-hover:text-red-50">
        {item.year}
      </span>

      <div className="relative">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1e3a8a]/5 text-[#1e3a8a] text-sm font-black tracking-wide mb-3">
          {item.year}
        </span>
        <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-medium">{item.desc}</p>
      </div>
    </div>
  );
}

export default function HistoricalTimeline({ timeline }) {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="timeline" className="relative py-16 sm:py-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-[#1e3a8a]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -right-32 w-96 h-96 rounded-full bg-[#e1251b]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-[#e1251b] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 flex items-center justify-center gap-4">
            <span className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-[#e1251b]"></span>
            Since 2005
            <span className="w-8 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-[#e1251b]"></span>
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black text-[#1e3a8a] tracking-tight">Our Historical Timeline</h3>
          <p className="mt-4 text-slate-500 text-sm sm:text-base">
            From The British School to The Bharat School — the milestones that shaped who we are.
          </p>
        </div>

        <div ref={listRef} className="relative">
          {/* Base Line + Scroll Progress Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-1 rounded-full bg-slate-200" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-1 rounded-full origin-top bg-gradient-to-b from-[#e1251b] via-amber-400 to-[#1e3a8a]"
          />

          <div className="space-y-10 md:space-y-14">
            {timeline.map((item, index) => {
              const Icon = ICONS[item.icon] || getIcon(item.icon);
              const isLeft = index % 2 === 0;
              return (
                <div key={`${item.year}-${index}`} className="relative md:grid md:grid-cols-2 md:gap-20 pl-20 md:pl-0">
                  {/* Icon Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-4 z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#e1251b] to-[#1e3a8a] ring-4 ring-white shadow-lg flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={isLeft ? "" : "md:col-start-2"}
                  >
                    <TimelineCard item={item} isLeft={isLeft} />
                  </motion.div>

                  {/* Opposite Side Big Year (desktop) */}
                  <div
                    className={`hidden md:flex items-start pt-2 ${isLeft ? "col-start-2 row-start-1 justify-start" : "col-start-1 row-start-1 justify-end"}`}
                  >
                    <span className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#1e3a8a]/25 to-[#e1251b]/25 select-none">
                      {item.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* End Cap */}
          <div className="relative mt-14 flex md:justify-center pl-0">
            <span className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e3a8a] text-white text-sm font-bold shadow-lg shadow-blue-900/30">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              The journey continues…
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
