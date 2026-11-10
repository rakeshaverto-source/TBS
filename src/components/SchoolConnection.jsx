'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  School, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Compass, 
  Baby, 
  Users, 
  ArrowDown, 
  Heart,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function SchoolConnection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Scroll tracking to draw both merging highway lanes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const drawLength = useTransform(smoothProgress, [0, 0.85], [0, 1]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#FAF9F5] text-slate-800 py-24 md:py-32 overflow-hidden select-none border-t border-slate-200"
    >
      {/* Background Subtle Canvas Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#1e3a8a_1.5px,transparent_1.5px)] [background-size:26px_26px]" />
      
      {/* Soft Ambient Colorful Highlights */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-rose-200/40 blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-blue-200/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-amber-200/50 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[#1e3a8a] text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-4"
          >
            <Compass className="w-4 h-4 text-[#e1251b]" />
            Unified Educational Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1e3a8a] mb-5 leading-tight"
          >
            Two Campuses Merging Into{' '}
            <span className="text-[#e1251b]">One TBS Family</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium"
          >
            A cohesive path starting from early playful discovery at <span className="font-bold text-[#e1251b]">Tinkerbelle</span>, connecting into academic rigor at <span className="font-bold text-[#1e3a8a]">The Bharat School</span>, and uniting together under one loving school community.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* --- 1. TOP DUAL SCHOOL CARDS (TINKERBELL LEFT & THE BHARAT SCHOOL RIGHT) --- */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 relative z-20 max-w-5xl mx-auto items-stretch">
          
          {/* ================= LEFT: TINKERBELL PRESCHOOL ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Wooden Direction Signboard */}
            <div className="relative flex flex-col items-center z-30 mb-2.5">
              <div 
                className="relative bg-gradient-to-b from-[#9C6534] via-[#855026] to-[#693C19] text-[#FFF6E5] font-black tracking-wider px-8 py-2.5 rounded-xl shadow-xl border-t-2 border-[#BE824A] border-b-4 border-[#47260C] flex items-center gap-2 transform -rotate-1"
                style={{ boxShadow: '0 10px 25px -5px rgba(0,0,0,0.35)' }}
              >
                <div className="w-2 h-2 rounded-full bg-[#4A2B11] border border-[#2B1607]" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                  Tinkerbelle Preschool
                </span>
                <div className="w-2 h-2 rounded-full bg-[#4A2B11] border border-[#2B1607]" />
              </div>
              <div className="w-4 h-6 bg-gradient-to-r from-[#593214] via-[#855026] to-[#45240A] shadow-md -mt-0.5 rounded-b"></div>
            </div>

            {/* Showcase Card */}
            <div className="w-full h-full bg-white rounded-3xl p-6 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.12)] border border-slate-200/90 relative hover:shadow-2xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="bg-slate-50 px-3.5 py-1 rounded-xl border border-slate-200 shadow-sm flex items-center h-11">
                    <img src="/Tinkerbelle.webp" alt="Tinkerbelle" className="h-7 object-contain" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                    Playgroup to KG
                  </span>
                </div>

                <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100 mb-3.5 shadow-inner">
                  <img src="/Tinkker Bell.jpeg" alt="Tinkerbelle Campus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-white">
                    Early Childhood Nest
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#1e3a8a] mb-1.5">
                  Early Foundation
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium mb-3">
                  Play-based sensory discovery, curiosity, and happy first steps.
                </p>
              </div>

              {/* Highway Departure Tag */}
              <div className="flex items-center justify-between text-xs font-bold text-[#e1251b] pt-3 border-t border-slate-100">
                <span>Junior Wing</span>
                <span className="flex items-center gap-1">
                  Down to Family <ArrowDown className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT: THE BHARAT SCHOOL ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* Wooden Direction Signboard */}
            <div className="relative flex flex-col items-center z-30 mb-2.5">
              <div 
                className="relative bg-gradient-to-b from-[#9C6534] via-[#855026] to-[#693C19] text-[#FFF6E5] font-black tracking-wider px-8 py-2.5 rounded-xl shadow-xl border-t-2 border-[#BE824A] border-b-4 border-[#47260C] flex items-center gap-2 transform rotate-1"
                style={{ boxShadow: '0 10px 25px -5px rgba(0,0,0,0.35)' }}
              >
                <div className="w-2 h-2 rounded-full bg-[#4A2B11] border border-[#2B1607]" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                  The Bharat School
                </span>
                <div className="w-2 h-2 rounded-full bg-[#4A2B11] border border-[#2B1607]" />
              </div>
              <div className="w-4 h-6 bg-gradient-to-r from-[#593214] via-[#855026] to-[#45240A] shadow-md -mt-0.5 rounded-b"></div>
            </div>

            {/* Showcase Card */}
            <div className="w-full h-full bg-white rounded-3xl p-5 sm:p-6 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.12)] border border-slate-200/90 relative hover:shadow-2xl transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="bg-slate-50 px-3.5 py-1 rounded-xl border border-slate-200 shadow-sm flex items-center h-11">
                    <img src="/the bhart school.png" alt="The Bharat School" className="h-7 object-contain" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Grades 1 to 12 (CBSE)
                  </span>
                </div>

                <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100 mb-3.5 shadow-inner">
                  <img src="/The Bhart.jpeg" alt="The Bharat School Campus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-white">
                    Senior Academic Campus
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#1e3a8a] mb-1.5">
                  Academic Rigor & Mastery
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium mb-3">
                  CBSE excellence, smart classes, STEM labs, and sports leadership.
                </p>
              </div>

              {/* Highway Departure Tag */}
              <div className="flex items-center justify-between text-xs font-bold text-[#1e3a8a] pt-3 border-t border-slate-100">
                <span>Senior Campus</span>
                <span className="flex items-center gap-1">
                  Down to Family <ArrowDown className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>


        {/* ========================================================================= */}
        {/* --- 2. HIGHWAY Y-MERGE CONNECTOR (CONVERGING LANES) --- */}
        {/* ========================================================================= */}
        <div className="relative h-48 md:h-64 w-full max-w-4xl mx-auto my-2 pointer-events-none flex justify-center items-center">
          
          {/* SVG Converging Road System */}
          <svg 
            className="w-full h-full overflow-visible" 
            viewBox="0 0 800 240" 
            fill="none" 
            preserveAspectRatio="none"
          >
            {/* Gravel Outer Shoulders */}
            <path
              d="M 220,0 C 220,110 400,130 400,240"
              stroke="#CBD5E1"
              strokeWidth="74"
              strokeLinecap="round"
            />
            <path
              d="M 580,0 C 580,110 400,130 400,240"
              stroke="#CBD5E1"
              strokeWidth="74"
              strokeLinecap="round"
            />

            {/* Asphalt Dark Roads */}
            <path
              d="M 220,0 C 220,110 400,130 400,240"
              stroke="#1E293B"
              strokeWidth="60"
              strokeLinecap="round"
            />
            <path
              d="M 580,0 C 580,110 400,130 400,240"
              stroke="#1E293B"
              strokeWidth="60"
              strokeLinecap="round"
            />

            {/* White Dashed Divider Highway Lines */}
            <path
              d="M 220,0 C 220,110 400,130 400,240"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeDasharray="16 16"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M 580,0 C 580,110 400,130 400,240"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeDasharray="16 16"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Dynamic Glowing Yellow Guided Progression Line on scroll */}
            <motion.path
              d="M 220,0 C 220,110 400,130 400,240"
              stroke="#F59E0B"
              strokeWidth="5"
              strokeLinecap="round"
              style={{ pathLength: drawLength }}
            />
            <motion.path
              d="M 580,0 C 580,110 400,130 400,240"
              stroke="#F59E0B"
              strokeWidth="5"
              strokeLinecap="round"
              style={{ pathLength: drawLength }}
            />
          </svg>

          {/* Central Merge Hub Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-amber-400 shadow-xl flex items-center justify-center text-[#e1251b] animate-bounce">
              <Heart className="w-6 h-6 fill-current text-[#e1251b]" />
            </div>
            <span className="mt-1 px-3 py-0.5 rounded-full bg-slate-900/80 text-amber-300 text-[10px] font-extrabold tracking-wider uppercase backdrop-blur-md shadow">
              The Convergence
            </span>
          </div>

        </div>


        {/* ========================================================================= */}
        {/* --- 3. BOTTOM DESTINATION: ONE TBS FAMILY (WHERE BOTH ROADS MERGE) --- */}
        {/* ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto flex flex-col items-center relative z-20"
        >
          {/* Wooden Direction Signboard on top of Family Card */}
          <div className="relative flex flex-col items-center z-30 mb-2.5">
            <div 
              className="relative bg-gradient-to-b from-[#9C6534] via-[#855026] to-[#693C19] text-[#FFF6E5] font-black tracking-wider px-9 py-3 rounded-lg shadow-2xl border-t-2 border-[#BE824A] border-b-4 border-[#47260C] flex items-center gap-2.5"
              style={{ boxShadow: '0 12px 30px -5px rgba(0,0,0,0.4)' }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#4A2B11] border border-[#2B1607]" />
              <Users className="w-4 h-4 text-amber-200" />
              <span className="text-sm md:text-base font-black uppercase tracking-wider drop-shadow">
                One TBS Family
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#4A2B11] border border-[#2B1607]" />
            </div>
            <div className="w-5 h-6 bg-gradient-to-r from-[#593214] via-[#855026] to-[#45240A] shadow-md -mt-0.5 rounded-b"></div>
          </div>

          {/* Combined Video Card */}
          <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border-2 border-amber-400/50 relative">
            
            <div className="mb-4">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#e1251b] block mb-1">
                United Campus & Celebrations
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-[#1e3a8a]">
                Where Both Worlds Meet
              </h4>
            </div>

            {/* Family Image Banner */}
            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-inner">
              <img 
                src="/One.jpeg" 
                alt="One TBS Family" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Tinkerbelle & The Bharat School — One Family
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm mt-3 font-medium text-center">
              From early steps to graduation — students, teachers, and parents united as <span className="font-bold text-[#1e3a8a]">One TBS Family</span>.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3.5 border-t border-slate-100 text-xs">
              <span className="text-slate-600 font-bold">14 Years of Lifelong Connection</span>
              <a 
                href="/contact" 
                className="w-full sm:w-auto text-center px-6 py-2.5 rounded-xl bg-[#1e3a8a] text-white font-bold hover:bg-[#e1251b] transition-colors shadow-md text-xs sm:text-sm"
              >
                Join Our School Family
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
