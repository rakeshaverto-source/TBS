"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Clock, MessageCircle, MapPinned, FileText, BadgeCheck, PartyPopper, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const STEP_DURATION = 5; // seconds each step stays active while autoplaying

const STEP_ICONS = [MessageCircle, MapPinned, FileText, BadgeCheck, PartyPopper];
const STEP_COLORS = [
  { grad: "from-[#1e3a8a] to-[#3b82f6]", ring: "#3b82f6", soft: "bg-blue-50", text: "text-[#1e3a8a]" },
  { grad: "from-[#e1251b] to-[#f97316]", ring: "#f97316", soft: "bg-red-50", text: "text-[#e1251b]" },
  { grad: "from-amber-500 to-yellow-400", ring: "#f59e0b", soft: "bg-amber-50", text: "text-amber-600" },
  { grad: "from-emerald-600 to-teal-500", ring: "#10b981", soft: "bg-emerald-50", text: "text-emerald-600" },
  { grad: "from-violet-600 to-fuchsia-500", ring: "#a855f7", soft: "bg-violet-50", text: "text-violet-600" },
];

function ProgressRing({ color, running, onDone }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  return (
    <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={r} fill="none" stroke="#e2e8f0" strokeWidth="4" />
      <motion.circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={{ strokeDashoffset: running ? 0 : c }}
        transition={{ duration: running ? STEP_DURATION : 0, ease: "linear" }}
        onAnimationComplete={() => running && onDone()}
      />
    </svg>
  );
}

export default function AdmissionsSteps({ steps }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { margin: "-150px" });

  const total = steps.length;
  const go = (i) => setActive((i + total) % total);
  const running = inView && !paused;

  const step = steps[active];
  const color = STEP_COLORS[active % STEP_COLORS.length];
  const Icon = STEP_ICONS[active] || BadgeCheck;
  const progress = total > 1 ? (active / (total - 1)) * 100 : 100;

  return (
    <section ref={sectionRef} id="process" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-24 right-10 w-40 h-40 rounded-full border-[16px] border-yellow-200/60 pointer-events-none" />
      <div className="absolute bottom-16 left-6 w-24 h-24 rounded-3xl rotate-12 bg-blue-100/60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <h2 className="text-[#e1251b] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 flex items-center justify-center gap-4">
            <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-[#e1251b]"></span>
            Step-by-Step Roadmap
            <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-[#e1251b]"></span>
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black text-[#1e3a8a] tracking-tight">How Admission Works at TBS</h3>
        </motion.div>

        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* Stepper */}
          <div className="relative mb-10 sm:mb-14">
            <div className="absolute top-8 sm:top-10 left-[10%] right-[10%] h-1.5 rounded-full bg-slate-100" />
            <div className="absolute top-8 sm:top-10 left-[10%] right-[10%] h-1.5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#e1251b] to-violet-600"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>

            <div className="relative grid grid-cols-5">
              {steps.map((s, idx) => {
                const StepIcon = STEP_ICONS[idx] || BadgeCheck;
                const c = STEP_COLORS[idx % STEP_COLORS.length];
                const isActive = idx === active;
                const isDone = idx < active;
                return (
                  <button
                    key={s.number}
                    type="button"
                    onClick={() => go(idx)}
                    className="group flex flex-col items-center gap-3 cursor-pointer"
                    aria-label={`Step ${s.number}: ${s.title}`}
                  >
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                      {isActive && <ProgressRing key={`${active}-${running}`} color={c.ring} running={running} onDone={() => go(active + 1)} />}
                      <motion.div
                        animate={{ scale: isActive ? 1 : 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`absolute inset-1.5 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
                          isActive || isDone ? `bg-gradient-to-br ${c.grad}` : "bg-white ring-2 ring-slate-200 group-hover:ring-slate-300"
                        }`}
                      >
                        <StepIcon className={`w-6 h-6 sm:w-7 sm:h-7 ${isActive || isDone ? "text-white" : "text-slate-400"}`} />
                      </motion.div>
                      {isActive && (
                        <motion.span
                          layoutId="pulse"
                          className="absolute inset-0 rounded-full"
                          style={{ boxShadow: `0 0 0 6px ${c.ring}22` }}
                        />
                      )}
                    </div>
                    <div className="text-center px-1">
                      <div className={`text-[10px] sm:text-xs font-black tracking-wider ${isActive ? c.text : "text-slate-400"}`}>STEP {s.number}</div>
                      <div
                        className={`hidden sm:block text-sm font-bold leading-tight mt-0.5 transition-colors ${
                          isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                        }`}
                      >
                        {s.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="relative rounded-[2rem] bg-white ring-1 ring-slate-200 shadow-2xl shadow-blue-900/10 overflow-hidden">
            <motion.div
              key={`bar-${active}`}
              className={`absolute top-0 left-0 h-1.5 bg-gradient-to-r ${color.grad}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6 }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center p-7 sm:p-10 lg:p-12"
              >
                {/* Text */}
                <div className="md:col-span-7 relative">
                  <span className="absolute -top-8 -left-2 text-[8rem] sm:text-[10rem] font-black leading-none text-slate-100 select-none pointer-events-none">
                    {step.number}
                  </span>
                  <div className="relative">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${color.soft} ${color.text} text-xs font-black uppercase tracking-wider mb-4`}
                    >
                      Step {step.number} of {String(total).padStart(2, "0")}
                    </motion.span>
                    <motion.h4
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2"
                    >
                      {step.title}
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className={`text-base sm:text-lg font-bold ${color.text} mb-4`}
                    >
                      {step.subtitle}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6"
                    >
                      {step.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-wrap gap-3"
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm font-bold text-slate-700">
                        <Clock className="w-4 h-4 text-blue-600" />
                        {step.timeframe}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Visual */}
                <div className="md:col-span-5 flex flex-col items-center gap-8">
                  <div className="relative w-52 h-52 sm:w-60 sm:h-60">
                    {/* Orbit */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200"
                    >
                      <span className={`absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${color.grad}`} />
                      <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="absolute -bottom-1.5 left-1/3 w-3 h-3 rounded-full bg-slate-300" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 14 }}
                      className={`absolute inset-8 rounded-full bg-gradient-to-br ${color.grad} shadow-2xl flex items-center justify-center`}
                    >
                      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
                        <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-white" strokeWidth={1.75} />
                      </motion.div>
                    </motion.div>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute top-4 right-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
                    >
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                    </motion.span>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => go(active - 1)}
                      aria-label="Previous step"
                      className="w-11 h-11 rounded-full border-2 border-slate-200 text-slate-600 flex items-center justify-center hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-1.5">
                      {steps.map((s, i) => (
                        <button
                          key={s.number}
                          type="button"
                          onClick={() => go(i)}
                          aria-label={`Go to step ${s.number}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === active ? "w-8 bg-[#e1251b]" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => go(active + 1)}
                      aria-label="Next step"
                      className="w-11 h-11 rounded-full bg-[#e1251b] text-white flex items-center justify-center hover:bg-red-600 shadow-lg shadow-red-600/30 transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-5 text-center text-xs text-slate-400">
            {paused ? "Paused — move your cursor away to continue" : "Steps play automatically • Click any step to jump"}
          </p>
        </div>
      </div>
    </section>
  );
}
