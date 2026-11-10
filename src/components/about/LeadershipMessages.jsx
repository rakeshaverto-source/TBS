"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function getInitials(name) {
  const words = name
    .replace(/^(Late\s+)?(Sh\.|Ms\.|Mr\.|Dr\.)\s*/i, "")
    .split(",")[0]
    .trim()
    .split(/\s+/);
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

// These two photos have the person sitting on the left side, so the small
// round thumbnail is shifted left to bring the face to the centre.
const THUMB_POSITION = {
  "/About/Mr. Sanjay Sethi.webp": "left top",
  "/About/Ms. Geetika Sethi.webp": "left top",
};

// In the large spotlight photo the same two images are zoomed in slightly,
// anchored near the left edge, so the person sits in the centre of the frame.
const MAIN_FRAMING = {
  "/About/Mr. Sanjay Sethi.webp": { transform: "scale(1.3)", transformOrigin: "5% 0%" },
  "/About/Ms. Geetika Sethi.webp": { transform: "scale(1.3)", transformOrigin: "5% 0%" },
};

function LeaderPhoto({ item, className = "", centerFace = false }) {
  const style = centerFace
    ? THUMB_POSITION[item.image] && { objectPosition: THUMB_POSITION[item.image] }
    : MAIN_FRAMING[item.image];
  return item.image ? (
    <img
      src={encodeURI(item.image)}
      alt={item.name}
      className={`w-full h-full object-cover object-top ${className}`}
      style={style || undefined}
    />
  ) : (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] ${className}`}>
      <span className="text-white font-black">{getInitials(item.name)}</span>
    </div>
  );
}

export default function LeadershipMessages({ messages }) {
  const [active, setActive] = useState(0);
  const current = messages[active];

  const go = (step) => setActive((active + step + messages.length) % messages.length);

  return (
    <section id="leadership" className="relative py-16 sm:py-24 bg-[#0a1530] text-white overflow-hidden">
      {/* Ambient Glows & Dot Pattern */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1e3a8a]/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#e1251b]/25 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-yellow-400 font-bold tracking-[0.25em] uppercase text-xs sm:text-sm flex items-center justify-center gap-4">
            <span className="w-8 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></span>
            Words From Our Leaders
            <span className="w-8 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-yellow-400"></span>
          </h2>
        </div>

        {/* Leader Selector */}
        <div className="flex lg:grid lg:grid-cols-6 gap-3 overflow-x-auto hide-scrollbar snap-x pb-2 mb-8 sm:mb-10 -mx-4 px-4 lg:mx-0 lg:px-0">
          {messages.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.role}
                type="button"
                onClick={() => setActive(index)}
                className={`snap-start shrink-0 w-40 lg:w-auto flex flex-col items-center text-center gap-2 p-3 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-white text-[#1e3a8a] border-white shadow-xl shadow-black/30 -translate-y-1"
                    : "bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/25"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full overflow-hidden ring-2 ring-offset-2 transition-all ${
                    isActive ? "ring-[#e1251b] ring-offset-white" : "ring-white/30 ring-offset-transparent"
                  }`}
                >
                  <LeaderPhoto item={item} className="text-lg" centerFace />
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? "text-[#e1251b]" : "text-yellow-300"}`}>
                  {item.role}
                </span>
                <span className="text-xs font-semibold leading-tight line-clamp-2">{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Panel */}
        <div className="relative bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#e1251b] via-amber-400 to-[#1e3a8a]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-14"
            >
              {/* Photo */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gradient-to-br from-[#e1251b] to-amber-400" />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                    <LeaderPhoto item={current} className="text-5xl" />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-xl sm:text-2xl font-black text-[#1e3a8a]">{current.name}</p>
                  <p className="mt-1 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#e1251b]">{current.role}</p>
                </div>
              </div>

              {/* Message */}
              <div className="lg:col-span-7 flex flex-col">
                <h4 className="text-2xl sm:text-3xl font-black text-[#1e3a8a] tracking-tight mb-5">
                  Message From The {current.role}
                </h4>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{current.message}</p>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-serif italic text-xl sm:text-2xl text-slate-800">{current.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">The Bharat School, Panchkula</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Previous message"
                      className="w-11 h-11 rounded-full border-2 border-[#1e3a8a]/20 text-[#1e3a8a] flex items-center justify-center hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Next message"
                      className="w-11 h-11 rounded-full bg-[#e1251b] text-white flex items-center justify-center hover:bg-red-600 shadow-lg shadow-red-600/30 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
