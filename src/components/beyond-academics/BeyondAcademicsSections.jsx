"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  X,
  Music,
  Music2,
  PersonStanding,
  FlaskConical,
  Backpack,
  Users,
  Brain,
  Heart,
  Sparkles,
  Star,
  Palette,
  Plane,
  Maximize2,
} from "lucide-react";
import { getIcon } from "@/lib/icons";

const ICONS = { Music, PersonStanding, FlaskConical, Backpack, Users, Brain };

// One accent per tile so the grid reads colourful but stays on-brand
const TILE_STYLES = [
  { bg: "from-[#1e3a8a] to-[#3b82f6]", glow: "shadow-blue-600/30" },
  { bg: "from-[#e1251b] to-[#f97316]", glow: "shadow-red-600/30" },
  { bg: "from-emerald-600 to-teal-500", glow: "shadow-emerald-600/30" },
  { bg: "from-amber-500 to-yellow-400", glow: "shadow-amber-500/30" },
  { bg: "from-violet-600 to-fuchsia-500", glow: "shadow-violet-600/30" },
  { bg: "from-sky-600 to-cyan-500", glow: "shadow-sky-600/30" },
];

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

function SectionEyebrow({ children, light = false, center = false }) {
  const color = light ? "text-yellow-400" : "text-[#e1251b]";
  const line = light ? "to-yellow-400" : "to-[#e1251b]";
  return (
    <h2
      className={`${color} font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 flex items-center gap-4 ${center ? "justify-center" : ""}`}
    >
      <span className={`w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent ${line}`}></span>
      {children}
      {center && <span className={`w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent ${line}`}></span>}
    </h2>
  );
}

function ContactButton() {
  return (
    <Link
      href="/contact-us"
      className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#ef4444] hover:bg-red-600 text-white shadow-[0_4px_14px_0_rgba(239,68,68,0.39)] transition-all hover:-translate-y-0.5"
    >
      Contact Us
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

function Polaroid({ src, alt, rotate = 0, caption, className = "", float = 0 }) {
  return (
    <motion.div
      animate={float ? { y: [0, -12, 0] } : undefined}
      transition={float ? { duration: 5 + float, repeat: Infinity, ease: "easeInOut" } : undefined}
      style={{ rotate }}
      className={`bg-white p-2.5 pb-10 sm:p-3 sm:pb-12 rounded-md shadow-2xl shadow-black/40 ${className}`}
    >
      {/* Tape */}
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/80 rotate-[-4deg] shadow-sm" />
      <div className="w-full h-full overflow-hidden rounded-sm bg-slate-100">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      {caption && (
        <p className="absolute bottom-2.5 sm:bottom-3.5 left-0 right-0 text-center font-serif italic text-sm sm:text-base text-slate-700">
          {caption}
        </p>
      )}
    </motion.div>
  );
}

export function BeyondHero({ hero, collage = [] }) {
  return (
    <section className="relative pt-32 pb-28 md:pt-40 md:pb-36 text-white overflow-hidden bg-[#070e20]">
      <div className="absolute inset-0 bg-cover bg-center opacity-30 scale-110 blur-sm" style={{ backgroundImage: `url('${hero.image}')` }} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#070e20]/95 via-[#0a1530]/80 to-[#1e3a8a]/70" />

      {/* Animated Blobs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#e1251b]/30 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-amber-400/20 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-yellow-400 font-semibold">{hero.title}</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6">
            Beyond
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 font-serif italic">
              Academics
            </span>
          </h1>
        </motion.div>

        {/* Polaroid Collage */}
        {collage.length >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[340px] sm:h-[440px]"
          >
            <div className="absolute top-0 left-[4%] w-[58%] h-[62%]">
              <Polaroid src={collage[0].src} alt={collage[0].caption} caption={collage[0].caption} rotate={-7} float={1} className="relative w-full h-full" />
            </div>
            <div className="absolute top-[8%] right-[2%] w-[48%] h-[50%]">
              <Polaroid src={collage[1].src} alt={collage[1].caption} caption={collage[1].caption} rotate={6} float={2} className="relative w-full h-full" />
            </div>
            <div className="absolute bottom-0 left-[26%] w-[54%] h-[52%]">
              <Polaroid src={collage[2].src} alt={collage[2].caption} caption={collage[2].caption} rotate={-2} float={3} className="relative w-full h-full" />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 right-[6%] w-20 h-20 rounded-full bg-[#e1251b] flex items-center justify-center shadow-xl shadow-red-600/40"
            >
              <Star className="w-9 h-9 text-yellow-300 fill-yellow-300" />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Wave Divider */}
      <svg className="absolute bottom-0 left-0 w-full h-16 sm:h-24 text-white" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,60 C240,110 480,10 720,50 C960,90 1200,20 1440,60 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}

export function ActivityRibbon({ text }) {
  const line = text || "Dance, music and drama are often woven together to promote aesthetic sensibilities amongst our young learners.";
  const row = (
    <span className="flex items-center shrink-0">
      {[0, 1].map((i) => (
        <span key={i} className="flex items-center gap-6 pr-6 text-lg sm:text-2xl font-black tracking-wide whitespace-nowrap">
          {line}
          <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
        </span>
      ))}
    </span>
  );
  return (
    <div className="relative bg-white py-6 overflow-hidden">
      <div className="-rotate-2 bg-gradient-to-r from-[#e1251b] via-[#ef4444] to-[#e1251b] text-white py-4 shadow-xl">
        <div className="flex animate-[marquee_30s_linear_infinite]">
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}

export function BeyondClassrooms({ classrooms }) {
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full border-[16px] border-yellow-200/60 pointer-events-none" />
      <div className="absolute bottom-10 left-6 w-24 h-24 rounded-3xl rotate-12 bg-blue-100/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-14">
          <SectionEyebrow center>Learning Everywhere</SectionEyebrow>
          <h3 className="text-3xl sm:text-5xl font-black text-[#1e3a8a] tracking-tight">{classrooms.title}</h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {classrooms.items.map((item, index) => {
            const Icon = ICONS[item.icon] || getIcon(item.icon);
            const style = TILE_STYLES[index % TILE_STYLES.length];
            return (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, rotate: index % 2 ? 1.5 : -1.5 }}
                className={`group relative flex flex-col justify-end min-h-44 sm:min-h-64 p-5 sm:p-7 rounded-3xl overflow-hidden shadow-lg ${style.glow} ${
                  item.image ? "bg-slate-900" : `bg-gradient-to-br ${style.bg}`
                }`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <Icon className="absolute -right-4 -top-4 w-32 h-32 text-white/15" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${style.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                <span className="relative text-lg sm:text-2xl font-black text-white capitalize leading-tight drop-shadow">{item.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CoCurricular({ data }) {
  return (
    <section id="co-curricular" className="relative py-20 sm:py-28 bg-[#0a1530] text-white overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1e3a8a]/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#e1251b]/25 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div {...reveal}>
          <SectionEyebrow light>Creative Pursuits</SectionEyebrow>
          <h3 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 capitalize">{data.title}</h3>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{data.text}</p>
        </motion.div>

        {/* Scattered Polaroids */}
        <motion.div {...reveal} className="relative h-[420px] sm:h-[500px]">
          <div className="absolute top-0 left-0 w-[62%] h-[46%]">
            <Polaroid src={data.images[0]} alt="Carrom" caption="Strategy" rotate={-6} className="relative w-full h-full hover:rotate-0 transition-transform" />
          </div>
          <div className="absolute top-[18%] right-0 w-[55%] h-[44%]">
            <Polaroid src={data.images[1]} alt="Painting" caption="Creativity" rotate={7} className="relative w-full h-full" />
          </div>
          <div className="absolute bottom-0 left-[8%] w-[70%] h-[46%]">
            <Polaroid src={data.images[2]} alt="Students together" caption="Teamwork" rotate={-3} className="relative w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SocialAwareness({ data }) {
  const hearts = [
    { left: "8%", delay: 0, size: "w-5 h-5" },
    { left: "30%", delay: 1.5, size: "w-4 h-4" },
    { left: "55%", delay: 0.8, size: "w-6 h-6" },
    { left: "78%", delay: 2.2, size: "w-4 h-4" },
    { left: "92%", delay: 3, size: "w-5 h-5" },
  ];
  return (
    <section id="social-awareness" className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-rose-50/60 overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map((h, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -500, opacity: [0, 1, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: h.delay, ease: "easeOut" }}
          className="absolute bottom-0 pointer-events-none"
          style={{ left: h.left }}
        >
          <Heart className={`${h.size} text-[#e1251b]/30 fill-[#e1251b]/30`} />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div {...reveal} className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-gradient-to-br from-[#e1251b] to-amber-400" />
          <div className="relative aspect-[5/4] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="absolute -top-6 -right-4 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center"
          >
            <Heart className="w-8 h-8 text-[#e1251b] fill-[#e1251b]" />
          </motion.div>
          <div className="absolute -bottom-6 left-6 px-5 py-3 rounded-2xl bg-white shadow-xl flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#e1251b]" />
            </span>
            <span className="text-sm font-bold text-slate-800 leading-tight">
              Empathy &<br />
              Compassion
            </span>
          </div>
        </motion.div>

        <motion.div {...reveal}>
          <SectionEyebrow>Kindness In Action</SectionEyebrow>
          <h3 className="text-3xl sm:text-5xl font-black text-[#1e3a8a] tracking-tight mb-6 capitalize">{data.title}</h3>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{data.text}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function ExploringSkills({ data }) {
  const notes = [
    { top: "12%", left: "4%", delay: 0 },
    { top: "70%", left: "2%", delay: 1 },
    { top: "20%", left: "94%", delay: 2 },
    { top: "80%", left: "92%", delay: 0.5 },
  ];
  return (
    <section id="exploring-skills" className="relative py-20 sm:py-28 bg-slate-50 overflow-hidden">
      {notes.map((n, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: n.delay, ease: "easeInOut" }}
          className="absolute hidden md:block pointer-events-none"
          style={{ top: n.top, left: n.left }}
        >
          <Music2 className="w-10 h-10 text-[#1e3a8a]/15" />
        </motion.div>
      ))}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-14">
          <SectionEyebrow center>Dance & Music</SectionEyebrow>
          <h3 className="text-3xl sm:text-5xl font-black text-[#1e3a8a] tracking-tight">{data.title}</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Dance */}
          <motion.div {...reveal} className="md:col-span-7 relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl group">
            <img src={data.dance.image} alt="Dance programme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-[#1e3a8a] text-xs font-black uppercase tracking-wider">
              On Stage
            </span>
          </motion.div>
          <motion.div
            {...reveal}
            className="md:col-span-5 relative rounded-[2rem] bg-gradient-to-br from-[#1e3a8a] to-[#312e81] text-white p-7 sm:p-9 flex flex-col justify-center shadow-xl overflow-hidden"
          >
            <PersonStanding className="absolute -right-6 -bottom-6 w-40 h-40 text-white/5" />
            <div className="relative w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <PersonStanding className="w-7 h-7 text-yellow-300" />
            </div>
            <h4 className="relative text-3xl font-black mb-3">Dance</h4>
            <p className="relative text-sm sm:text-base text-white/90 leading-relaxed">{data.dance.text}</p>
          </motion.div>

          {/* Music */}
          <motion.div
            {...reveal}
            className="md:col-span-5 order-last md:order-none relative rounded-[2rem] bg-[#fef9c3] border border-yellow-200 p-7 sm:p-9 flex flex-col justify-center shadow-xl overflow-hidden"
          >
            <Music className="absolute -right-6 -bottom-6 w-40 h-40 text-amber-500/10" />
            <div className="relative w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm">
              <Music className="w-7 h-7 text-[#e1251b]" />
            </div>
            <h4 className="relative text-3xl font-black text-[#1e3a8a] mb-3">Music</h4>
            <p className="relative text-sm sm:text-base text-slate-700 leading-relaxed">{data.music.text}</p>
          </motion.div>
          <motion.div {...reveal} className="md:col-span-7 relative aspect-[16/10] md:aspect-auto rounded-[2rem] overflow-hidden shadow-xl group">
            <img src={data.music.image} alt="Music programme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <span className="absolute top-5 right-5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur text-[#e1251b] text-xs font-black uppercase tracking-wider">
              In Harmony
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FieldTrips({ data }) {
  return (
    <section id="field-trips" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div {...reveal} className="order-2 lg:order-1">
          <SectionEyebrow>Learning On The Move</SectionEyebrow>
          <h3 className="text-3xl sm:text-5xl font-black text-[#1e3a8a] tracking-tight mb-6">{data.title}</h3>
          <div className="space-y-4 mb-8">
            {data.paragraphs.map((p) => (
              <p key={p} className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <ContactButton />
        </motion.div>

        <motion.div {...reveal} className="order-1 lg:order-2 relative pt-10">
          {/* Dashed Flight Path */}
          <svg className="absolute -top-2 left-0 w-full h-24 text-[#e1251b]/40" viewBox="0 0 400 100" fill="none" preserveAspectRatio="none">
            <path d="M0,90 C100,10 250,100 400,20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 8" />
          </svg>
          <motion.div
            animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 right-2 w-14 h-14 rounded-full bg-[#e1251b] shadow-xl shadow-red-600/30 flex items-center justify-center z-10"
          >
            <Plane className="w-7 h-7 text-white" />
          </motion.div>
          <Polaroid src={data.image} alt={data.title} caption="Exploring together" rotate={3} className="relative w-full aspect-[4/3]" />
        </motion.div>
      </div>
    </section>
  );
}

export function MagicalMoments({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  const total = data.images.length;
  const layout = ["md:col-span-2", "md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-2", "col-span-2 md:col-span-6"];

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, total]);

  return (
    <section id="magical-moments" className="relative py-20 sm:py-28 bg-[#0a1530] text-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(250,204,21,0.25),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-14">
          <SectionEyebrow light center>
            Lights, Camera, Action
          </SectionEyebrow>
          <h3 className="text-3xl sm:text-5xl font-black tracking-tight">{data.title}</h3>
          <p className="mt-4 text-slate-400 text-sm">Tap any photo to view it larger</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-5">
          {data.images.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setOpenIndex(index)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`group relative ${
                index === total - 1 ? "h-60 sm:h-80 md:h-[28rem]" : "h-44 sm:h-60 md:h-64"
              } rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl ${layout[index] || "md:col-span-2"}`}
            >
              <img
                src={src}
                alt={`Magical moment ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#0a1530] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 className="w-4 h-4" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpenIndex(null)}
          >
            <motion.img
              key={openIndex}
              src={data.images[openIndex]}
              alt={`Magical moment ${openIndex + 1}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((openIndex - 1 + total) % total);
              }}
              className="absolute left-3 sm:left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((openIndex + 1) % total);
              }}
              className="absolute right-3 sm:right-6 w-12 h-12 rounded-full bg-[#e1251b] hover:bg-red-600 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70 font-semibold">
              {openIndex + 1} / {total}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
