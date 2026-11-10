"use client";

import React from "react";
import { motion } from "framer-motion";

const pillarsData = [
  {
    id: "sqay-2017",
    label: "Sqay Championship 2017",
    image: "/pathways/sqay-2017.webp",
    alt: "The Bharat School student wearing the Indian flag and holding a medal at a 2017 Sqay championship",
    bgClass: "bg-[#F3B712]", // Rich Warm Golden Yellow
    isFront: false,
    zIndex: 10
  },
  {
    id: "sqay-2024",
    label: "Sqay 2024 · Kathmandu",
    image: "/pathways/sqay-2024.webp",
    alt: "The Bharat School students showing their medals at the 2024 Sqay championship in Kathmandu, Nepal",
    bgClass: "bg-[#EA7F00]", // Vibrant Tangerine Orange
    isFront: true,
    zIndex: 25
  },
  {
    id: "sqay-2023",
    label: "South Asian Sqay 2023",
    image: "/pathways/sqay-2023.webp",
    alt: "The Bharat School student holding up the Indian flag at the 7th Sqay South Asian Championship 2023",
    bgClass: "bg-[#B8001F]", // Deep Ruby Crimson Red
    isFront: false,
    zIndex: 15
  },
  {
    id: "nasa",
    label: "NASA Visit",
    image: "/pathways/nasa.webp",
    alt: "Students and staff with the school banner in front of the NASA globe",
    bgClass: "bg-[#00A2C7]", // Bright Turquoise Cyan
    isFront: true,
    zIndex: 25
  },
  {
    id: "italy",
    label: "Snowshoe · Italy",
    image: "/pathways/italy.webp",
    alt: "The Bharat School student holding the Indian flag at a snowshoe event in Italy",
    bgClass: "bg-[#7A4988]", // Amethyst Royal Purple
    isFront: false,
    zIndex: 10
  }
];

export default function CurriculumPillars() {
  const [hoveredId, setHoveredId] = React.useState(null);

  return (
    <section 
      className="pt-10 md:pt-14 pb-8 md:pb-12 bg-linear-to-b from-slate-50/70 via-white to-slate-50/90 relative overflow-hidden" 
      id="curriculum-pillars"
    >
      
      {/* High-End Dynamic Animated Background Architecture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* 1. Fluid Ambient Aurora Light Orbs (Floating & Breathing) */}
        {/* Gold Glow Orb (Top-Left) */}
        <motion.div 
          animate={{ 
            x: [-40, 50, -30, 0], 
            y: [-30, 40, -20, 0], 
            scale: [1, 1.25, 0.9, 1] 
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 left-[10%] w-112.5 h-112.5 bg-linear-to-br from-amber-300/25 to-orange-400/15 rounded-full blur-[100px] pointer-events-none"
        />

        {/* Cyan/Blue Glow Orb (Top-Right) */}
        <motion.div 
          animate={{ 
            x: [40, -50, 30, 0], 
            y: [30, -40, 20, 0], 
            scale: [0.9, 1.2, 0.95, 0.9] 
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-10 right-[10%] w-112.5 h-112.5 bg-linear-to-bl from-sky-400/25 to-blue-500/15 rounded-full blur-[110px] pointer-events-none"
        />

        {/* Crimson/Rose Central Orb (Behind Discs) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 0.85, 1],
            opacity: [0.2, 0.45, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-rose-400/15 rounded-full blur-[120px] pointer-events-none"
        />

        {/* Purple Orb (Bottom-Left) */}
        <motion.div 
          animate={{ 
            x: [-30, 30, -30], 
            y: [-25, 35, -25], 
            scale: [1, 1.15, 1] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 left-[15%] w-100 h-100 bg-purple-400/15 rounded-full blur-[100px] pointer-events-none"
        />

        {/* 2. Rotating Concentric Orbit / Radar Halo Rings */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-212.5 sm:w-275 aspect-square rounded-full border border-blue-900/5 pointer-events-none flex items-center justify-center"
        >
          {/* Small Orbit Satellite Dot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-400/50 rounded-full blur-[1px] shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
        </motion.div>

        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.03, 1] }}
          transition={{ 
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 w-162.5 sm:w-212.5 aspect-square rounded-full border border-dashed border-blue-900/8 pointer-events-none flex items-center justify-center"
        >
          {/* Small Orbit Satellite Dot */}
          <div className="absolute bottom-0 right-1/4 w-2.5 h-2.5 bg-sky-400/60 rounded-full blur-[1px] shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        </motion.div>

        {/* 3. Floating Modern Frosted Glass Geometry Rings */}
        <motion.div 
          animate={{ y: [-15, 15, -15], rotate: [0, 90, 180] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[8%] w-16 h-16 rounded-2xl border-2 border-amber-400/20 bg-white/30 backdrop-blur-xs shadow-sm"
        />
        <motion.div 
          animate={{ y: [18, -18, 18], rotate: [180, 90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-28 right-[8%] w-20 h-20 rounded-full border-2 border-sky-400/20 bg-white/30 backdrop-blur-xs shadow-sm"
        />
        <motion.div 
          animate={{ y: [-12, 12, -12], rotate: [-45, 45, -45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-24 right-[16%] w-12 h-12 rounded-xl border border-purple-400/25 bg-white/20 backdrop-blur-xs"
        />

        {/* Minimal Precision Dot Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(30,58,138,0.035)_1.5px,transparent_1.5px)] bg-size-[32px_32px] opacity-80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          {/* Eyebrow pill with spinning globe */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-4"
          >
            <span className="w-8 sm:w-14 h-0.5 bg-linear-to-r from-transparent to-[#ef4444] rounded-full"></span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#1e3a8a]/10 shadow-sm">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 text-[#ef4444]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </motion.svg>
              <span className="text-[#1e3a8a] font-bold tracking-[0.25em] uppercase text-[10px] sm:text-xs">
                Academic Excellence
              </span>
            </span>
            <span className="w-8 sm:w-14 h-0.5 bg-linear-to-l from-transparent to-[#ef4444] rounded-full"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e3a8a] tracking-tight mb-4 leading-tight"
          >
            Pathways to{" "}
            <span className="relative inline-block whitespace-nowrap">
              {/* Animated multi-colour gradient using the medal-disc colours */}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="bg-linear-to-r from-[#EA7F00] via-[#B8001F] via-50% to-[#00A2C7] bg-size-[200%_auto] bg-clip-text text-transparent"
              >
                Global Recognition
              </motion.span>
              {/* Hand-drawn underline that draws itself in */}
              <svg
                className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-3 sm:h-4"
                viewBox="0 0 300 16"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M3 11 C 60 3, 120 3, 170 8 S 260 14, 297 5"
                  stroke="#F3B712"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
              {/* Sparkle */}
              <motion.span
                animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-5 sm:-right-6 text-[#F3B712] text-xl sm:text-2xl select-none"
                aria-hidden="true"
              >
                ✦
              </motion.span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Our multi-tiered curriculum nurtures{" "}
            <span className="font-semibold text-[#EA7F00] bg-[#F3B712]/15 px-1.5 rounded-md">inquisitive thinkers</span>,{" "}
            <span className="font-semibold text-[#00A2C7] bg-[#00A2C7]/10 px-1.5 rounded-md">visionary problem-solvers</span>, and{" "}
            <span className="font-semibold text-[#B8001F] bg-[#B8001F]/10 px-1.5 rounded-md">responsible world citizens</span>.
          </motion.p>
        </div>

        {/* 5 Overlapping Round Arch Discs Matching Reference Graphic */}
        <div className="w-full flex flex-col items-center justify-center pt-4 pb-6 relative">
          <div className="flex items-end justify-center w-full lg:px-4 pt-4 pb-6">
            {pillarsData.map((pillar, idx) => {
              const isHovered = hoveredId === pillar.id;

              return (
                <div 
                  key={pillar.id}
                  onMouseEnter={() => setHoveredId(pillar.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative flex flex-col items-center select-none group transition-all duration-300 ${
                    idx !== 0 ? "-ml-[3.25vw] lg:-ml-12 xl:-ml-14" : ""
                  }`}
                  style={{ zIndex: isHovered ? 50 : pillar.zIndex }}
                >
                  {/* Hover label */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -26 : -10 }}
                    transition={{ duration: 0.25 }}
                    className={`pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap px-3 py-1.5 rounded-full text-white text-[10px] sm:text-xs font-bold shadow-lg ${pillar.bgClass}`}
                  >
                    {pillar.label}
                    <span className={`absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 ${pillar.bgClass}`} />
                  </motion.div>

                  {/* The Round Disc Card with Flat Base */}
                  <motion.div
                    whileHover={{ 
                      y: -14, 
                      scale: 1.06,
                      transition: { type: "spring", stiffness: 400, damping: 20 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      y: isHovered ? -14 : (pillar.isFront ? 14 : 0),
                      scale: isHovered ? 1.06 : 1
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className={`w-[20.5vw] h-[21.5vw] lg:w-52 lg:h-54 xl:w-56 xl:h-58 rounded-t-full rounded-b-none ${pillar.bgClass} p-1 sm:p-1.5 relative overflow-hidden cursor-pointer transition-all duration-300 ${
                      isHovered ? "shadow-[0_20px_40px_rgba(0,0,0,0.3)] ring-2 ring-white/60" : "shadow-lg shadow-slate-900/10"
                    }`}
                  >
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-t-full"
                    />
                  </motion.div>

                  {/* Soft Floor Shadow */}
                  <div className={`w-[14vw] lg:w-40 h-2 sm:h-2.5 bg-slate-400/35 rounded-[100%] blur-[3px] mt-1 transition-all duration-300 ${
                    isHovered ? "opacity-60 scale-110" : "opacity-30 scale-100"
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Elegant Podium Baseline with Animated Shimmer Sweep */}
          <div className="w-full max-w-4xl h-[1.5px] bg-linear-to-r from-transparent via-slate-200/80 to-transparent -mt-3.5 relative overflow-hidden">
            <motion.div 
              animate={{ x: ['-100%', '300%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 w-1/3 bg-linear-to-r from-transparent via-sky-500/60 to-transparent blur-[1px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
