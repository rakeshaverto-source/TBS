"use client";

import React, { useEffect, useState, useRef } from 'react';
import {
  Users,
  GraduationCap,
  Handshake,
  Network
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ to, suffix = "", text = "" }) {
  const ref = useRef(null);
  // 'once: true' makes it run only the first time you scroll to it
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const duration = 2500; // 2.5 seconds

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // Easing function (easeOutExpo) for a smooth slow-down at the end
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        setCount(Math.floor(easeProgress * to));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to]);

  return <span ref={ref}>{count}{suffix}{text && ` ${text}`}</span>;
}

const STATS = [
  { icon: Users, to: 21, text: "Years", label: "of Legacy", tint: "bg-blue-50 text-[#1e3a8a]" },
  { icon: GraduationCap, to: 100, suffix: "%", label: "School Result", tint: "bg-red-50 text-[#e1251b]" },
  { icon: Handshake, to: 100, suffix: "%", label: "School-Parent Partnership", tint: "bg-amber-50 text-amber-600" },
  { icon: Network, to: 1000, suffix: "+", label: "Alumni Network", tint: "bg-emerald-50 text-emerald-600" },
];

const PHOTO = "/WHY%20CHOOSE%20TBS.png";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full z-20 -mt-16 pb-16 sm:pb-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-2xl shadow-blue-900/15 ring-1 ring-slate-200/70"
        >
          {/* Brand stripe along the top edge */}
          <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-[#1e3a8a] via-[#e1251b] to-amber-400" aria-hidden="true" />

          {/* Desktop: the photo's soft blurred fill runs the full card height on the left,
              so the heading row sits on the blur there instead of adding a white strip */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[45%] overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-cover bg-center scale-110 blur-xl opacity-90" style={{ backgroundImage: `url('${PHOTO}')` }} />
            <div className="absolute inset-0 bg-white/25" />
          </div>
          {/* Faint dot pattern behind the text side */}
          <div
            className="hidden lg:block absolute inset-y-0 right-0 w-[55%] opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#1e3a8a 1.5px, transparent 1.5px)", backgroundSize: "22px 22px" }}
            aria-hidden="true"
          />

          {/* Heading centred across the whole card: half over the photo side, half over the text */}
          <div className="relative px-6 pt-8 pb-5 lg:pt-9 lg:pb-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#1e3a8a]">
              WHY CHOOSE <span className="text-[#e1251b]">THE BHARAT SCHOOL?</span>
            </h2>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-3 block h-1 w-20 origin-center rounded-full bg-[#e1251b]"
              aria-hidden="true"
            />
          </div>

          <div className="relative flex flex-col lg:flex-row">
            {/* Left Side - Image: full photo, not cropped, vertically centred */}
            <div className="w-full lg:w-[45%] flex items-center px-4 sm:px-6 lg:px-6 lg:pb-8">
              <div className="relative w-full">
                <img src={PHOTO} alt="Students of The Bharat School" className="w-full h-auto rounded-2xl shadow-xl ring-4 ring-white/70" />
                <span className="absolute -bottom-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#1e3a8a] px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-white shadow-lg">
                  <span className="text-yellow-300">★</span> Since 2005
                </span>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-[55%] px-6 pt-10 pb-8 md:px-8 lg:pt-2 lg:pb-8 lg:pl-10 relative flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative border-l-4 border-[#e1251b] pl-5 text-left [text-align:left] text-lg md:text-xl font-semibold leading-relaxed text-slate-700"
              >
                Family run school, we remain committed to cultivating{" "}
                <span className="text-[#1e3a8a] font-extrabold">intellect</span>,{" "}
                <span className="text-[#1e3a8a] font-extrabold">character</span> and{" "}
                <span className="text-[#1e3a8a] font-extrabold">future leaders</span>.
              </motion.p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                {STATS.map(({ icon: Icon, to, suffix, text, label, tint }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.25 + i * 0.1 }}
                    className="group flex flex-col items-start sm:flex-row sm:items-center gap-2.5 sm:gap-4 rounded-2xl border border-slate-100 bg-white/90 p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-lg"
                  >
                    <span className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${tint}`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="whitespace-nowrap text-xl sm:text-2xl font-black leading-none text-slate-900">
                        <AnimatedCounter to={to} suffix={suffix} text={text} />
                      </h3>
                      <p className="mt-1 text-left [text-align:left] text-xs sm:text-sm font-medium leading-snug text-slate-500">{label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
