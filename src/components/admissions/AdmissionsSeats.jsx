"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { Armchair, MapPin, Flame, Zap, Lock, Award, CircleDot, ArrowRight } from "lucide-react";

const STATUS_STYLES = {
  "Filling Fast": { pill: "bg-red-100 text-red-700", icon: Flame, glow: "rgba(239,68,68,0.35)", chair: "text-[#e1251b]" },
  Limited: { pill: "bg-amber-100 text-amber-800", icon: Zap, glow: "rgba(245,158,11,0.35)", chair: "text-amber-500" },
  Open: { pill: "bg-emerald-100 text-emerald-700", icon: CircleDot, glow: "rgba(16,185,129,0.35)", chair: "text-emerald-500" },
  "Merit Interview": { pill: "bg-violet-100 text-violet-700", icon: Award, glow: "rgba(139,92,246,0.35)", chair: "text-violet-500" },
  Full: { pill: "bg-slate-200 text-slate-700", icon: Lock, glow: "rgba(148,163,184,0.3)", chair: "text-slate-400" },
};
const DEFAULT_STYLE = { pill: "bg-slate-100 text-slate-700", icon: CircleDot, glow: "rgba(59,130,246,0.35)", chair: "text-[#1e3a8a]" };

function CountUp({ value, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.2, ease: "easeOut", onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

function SeatCard({ item, index, ref }) {
  const count = parseInt(item.seatsAvailable, 10) || 0;
  const style = STATUS_STYLES[item.status] || DEFAULT_STYLE;
  const StatusIcon = style.icon;
  const urgent = count > 0 && count <= 6;

  // Spotlight that follows the cursor
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onMouseMove={handleMove}
      className="group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-white/25 via-white/5 to-white/20 hover:-translate-y-2 transition-transform duration-500"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(300px circle at var(--x) var(--y), ${style.glow}, transparent 60%)` }}
      />

      <div className="relative h-full rounded-[1.45rem] bg-[#0f1f44]/90 backdrop-blur-xl p-6 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            {item.campus}
          </span>
          <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full ${style.pill}`}>
            <StatusIcon className="w-3 h-3" />
            {item.status}
          </span>
        </div>

        <h4 className="text-2xl font-black text-white mb-4">{item.grade}</h4>

        {/* Big Count */}
        <div className="flex items-end gap-2 mb-5">
          <div className="relative">
            {urgent && (
              <motion.span
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: style.glow }}
              />
            )}
            <CountUp value={count} className="relative text-6xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 tabular-nums" />
          </div>
          <span className="text-sm font-bold text-slate-400 mb-1.5">
            seats
            <br />
            remaining
          </span>
        </div>

        {/* Chair Map */}
        {count > 0 && (
          <div className="grid grid-cols-6 gap-1.5 mb-6 p-3 rounded-2xl bg-white/5 border border-white/10">
            {Array.from({ length: count }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0, y: 8 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 300 }}
                className="flex items-center justify-center"
              >
                <Armchair className={`w-5 h-5 ${style.chair}`} />
              </motion.span>
            ))}
          </div>
        )}

        <a
          href="#book-tour"
          className="relative mt-auto inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-[#0a1530] text-sm font-black overflow-hidden group-hover:bg-[#e1251b] group-hover:text-white transition-colors duration-300"
        >
          <motion.span
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5, delay: index * 0.3 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          />
          <Lock className="relative w-4 h-4" />
          <span className="relative">Lock Seat</span>
          <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

export default function AdmissionsSeats({ seats }) {
  const campuses = ["All", ...Array.from(new Set(seats.map((s) => s.campus)))];
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? seats : seats.filter((s) => s.campus === filter);
  const totalSeats = seats.reduce((sum, s) => sum + (parseInt(s.seatsAvailable, 10) || 0), 0);

  return (
    <section id="seats" className="relative py-20 sm:py-28 bg-[#0a1530] text-white overflow-hidden">
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1e3a8a]/70 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#e1251b]/25 blur-3xl pointer-events-none"
      />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h2 className="text-yellow-400 font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 flex items-center gap-4">
              <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400"></span>
              Real-Time Availability
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">Current Seat Status (2027–28)</h3>

            {/* Campus Filter */}
            <div className="inline-flex flex-wrap gap-1 p-1 rounded-full bg-white/5 border border-white/10">
              {campuses.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                    filter === c ? "text-[#0a1530]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {filter === c && (
                    <motion.span layoutId="seat-filter" className="absolute inset-0 rounded-full bg-yellow-400" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                  <span className="relative">{c}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Total Counter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e1251b] to-[#f97316] flex items-center justify-center shadow-lg shadow-red-600/30">
                <Armchair className="w-7 h-7 text-white" />
                <span className="absolute -top-1 -right-1 flex w-3.5 h-3.5">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  <span className="relative w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-[#0a1530]" />
                </span>
              </div>
              <div>
                <CountUp value={totalSeats} className="text-4xl font-black leading-none tabular-nums" />
                <div className="text-xs font-semibold text-slate-400 mt-1">
                  Total seats left • <span className="text-emerald-300">Active Enrollment Period</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((item, idx) => (
              <SeatCard key={item.grade} item={item} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
