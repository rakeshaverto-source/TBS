'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Compass } from 'lucide-react';

export default function TBSJourney() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative py-20 lg:py-28 overflow-hidden select-none border-y border-[#E8ECEF]"
      style={{
        background: 'linear-gradient(135deg, #F8FAFD 0%, #FFFFFF 35%, #F4F7FB 70%, #EFF4FA 100%)',
      }}
    >
      {/* 1. Subtle Dot Matrix Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#1e3a8a_1.5px,transparent_1.5px)] [background-size:26px_26px]"
      />

      {/* 2. Soft Ambient Lighting */}
      <div className="absolute -top-10 left-[8%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-rose-200/25 to-red-100/10 blur-[130px] pointer-events-none -z-0" />
      <div className="absolute top-1/4 left-[40%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-200/20 via-sky-100/15 to-transparent blur-[140px] pointer-events-none -z-0" />
      <div className="absolute -bottom-10 right-[5%] w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-sky-200/30 via-indigo-100/15 to-transparent blur-[140px] pointer-events-none -z-0" />

      {/* 3. Subtle Sketch Artwork on right */}
      <div className="absolute right-4 top-10 w-96 h-96 pointer-events-none opacity-[0.14] hidden xl:block -z-0">
        <svg viewBox="0 0 320 320" fill="none" className="w-full h-full stroke-[#1e3a8a]">
          <circle cx="160" cy="160" r="130" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="160" cy="160" r="90" strokeWidth="1.2" />
          <line x1="160" y1="15" x2="160" y2="305" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="15" y1="160" x2="305" y2="160" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 160,90 L 168,152 L 230,160 L 168,168 L 160,230 L 152,168 L 90,160 L 152,152 Z" strokeWidth="1" fill="#1e3a8a" fillOpacity="0.04" />
          <path d="M 195,55 Q 205,42 215,55 Q 225,42 235,55" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 235,75 Q 243,65 251,75 Q 259,65 267,75" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 165,35 Q 172,27 179,35 Q 186,27 193,35" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* ============================================================== */}
        {/* CONTINUOUS STORY SCENE CONTAINER */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* ------------------------------------------------------------ */}
          {/* LEFT STORY INTRO (lg:col-span-3) */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-3 pt-4 flex flex-col justify-between">
            <div>
              {/* Pill Tag */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="w-12 h-1 bg-[#ef4444] rounded-full shadow-sm"></span>
                <span className="text-[#1e3a8a] font-black tracking-[0.22em] uppercase text-xs sm:text-sm">
                  The TBS Journey
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-black text-[#1e3a8a] tracking-tight leading-[1.12]"
              >
                From <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-rose-500 to-red-600 italic font-serif">
                  First Steps
                </span> <br />
                to Future Leaders.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-slate-600 text-sm leading-relaxed max-w-xs font-medium"
              >
                A connected journey from early years to senior school and beyond — one community, a lifetime of possibilities.
              </motion.p>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 lg:mt-24 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-md flex items-center justify-center text-[#1e3a8a] shadow-md">
                <ArrowDown className="w-4 h-4 animate-bounce text-[#ef4444]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Scroll To Explore
                </span>
                <span className="text-xs font-bold text-[#1e3a8a]">
                  Educational Pathway ↓
                </span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* RIGHT 3-SCENE STORY ROW (lg:col-span-9) */}
          {/* ------------------------------------------------------------ */}
          <div className="lg:col-span-9 relative">

            {/* Sinuous Connecting Wave Highway */}
            <div className="absolute top-[175px] left-0 right-0 h-[100px] hidden md:block pointer-events-none z-0">
              <svg
                viewBox="0 0 1000 120"
                fill="none"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,65 C 130,20 220,95 350,60 C 480,25 580,95 720,55 C 840,20 920,70 1000,60"
                  stroke="#1e3a8a"
                  strokeWidth="28"
                  strokeLinecap="round"
                  opacity="0.04"
                />
                <path
                  d="M 0,65 C 130,20 220,95 350,60 C 480,25 580,95 720,55 C 840,20 920,70 1000,60"
                  stroke="url(#journeyPathGlowGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="7 7"
                />
                <defs>
                  <linearGradient id="journeyPathGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#1e3a8a" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* 3 Story Milestones in a Unified Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 relative z-10 items-end">

              {/* ======================================================== */}
              {/* STAGE 1: TINKERBELL PRESCHOOL (Tinkkerbell.png) */}
              {/* ======================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Top Image Composition with Circular Frame & Cutout */}
                <div className="relative w-64 h-64 mb-3 flex items-center justify-center">

                  {/* Circular Backdrop Aura */}
                  <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-[#FFF1EB] via-[#FDE5DC] to-[#FCD9CF] border-2 border-white shadow-[0_20px_45px_-12px_rgba(239,68,68,0.25)] -z-0 group-hover:scale-105 transition-transform duration-500" />

                  {/* Toddler Cutout Image */}
                  <div className="relative w-56 h-56 z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 flex items-end justify-center">
                    <Image
                      src="/Tinkkerbell.png"
                      alt="Tinkerbelle Preschool Child"
                      fill
                      priority
                      unoptimized
                      className="object-contain object-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>

                  {/* Number 01 Badge */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#ef4444] text-white flex items-center justify-center text-xs font-black shadow-lg border-2 border-white z-20 group-hover:scale-110 transition-transform">
                    01
                  </div>
                </div>

                {/* Logo & Headline */}
                <div className="mb-2 flex flex-col items-center min-h-[58px] justify-center">
                  <div className="relative w-32 h-10 mb-1 flex items-center justify-center">
                    <Image
                      src="/Tinkerbelle.webp"
                      alt="Tinkerbelle Preschool Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#1e3a8a] tracking-tight">
                    A joyful beginning.
                  </h3>
                </div>

                {/* Age Tag */}
                <div className="text-[11px] font-black tracking-widest text-[#ef4444] uppercase mb-2">
                  2 – 5 YEARS
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[250px] mb-6 font-normal">
                  Play, explore and build confidence through a nurturing, play-based learning environment.
                </p>

                {/* Action CTA Button */}
                <a
                  href="https://tinkerbelle.in/"
                  target="_blank"
                  rel="noopener"
                  className="mt-auto inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white text-xs font-bold tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <span>Explore Tinkerbelle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>


              {/* ======================================================== */}
              {/* STAGE 2: THE BHARAT SCHOOL (Thebhart.png) */}
              {/* ======================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Top Image Composition with Arch Backdrop */}
                <div className="relative w-64 h-64 mb-3 flex items-center justify-center">

                  {/* Arched Backdrop Aura */}
                  <div className="absolute inset-x-5 top-2 bottom-3 rounded-[110px_110px_45px_45px] bg-gradient-to-tr from-[#EBF3FF] via-[#E1ECFD] to-[#D5E5FD] border-2 border-white shadow-[0_22px_50px_-12px_rgba(30,58,138,0.28)] -z-0 group-hover:scale-105 transition-transform duration-500" />

                  {/* Actual Senior Student Cutout Image (Thebhart.png) */}
                  <div className="relative w-64 h-64 z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 flex items-end justify-center">
                    <Image
                      src="/Thebhart.png"
                      alt="The Bharat School Student"
                      fill
                      priority
                      unoptimized
                      className="object-contain object-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>

                  {/* Number 02 Badge */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-black shadow-lg border-2 border-white z-20 group-hover:scale-110 transition-transform">
                    02
                  </div>
                </div>

                {/* Logo & Headline */}
                <div className="mb-2 flex flex-col items-center min-h-[58px] justify-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="relative w-7 h-7">
                      <Image
                        src="/logo.png"
                        alt="The Bharat School Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-black text-[#1e3a8a] tracking-wider leading-none">THE BHARAT SCHOOL</span>
                      <span className="text-[8px] font-bold tracking-[0.2em] text-[#ef4444] leading-tight">LEARN • LEAD • SERVE</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#1e3a8a] tracking-tight">
                    Where potential takes flight.
                  </h3>
                </div>

                {/* Grade Tag */}
                <div className="text-[11px] font-black tracking-widest text-[#1e3a8a] uppercase mb-2">
                  CLASSES 1 – 12 (CBSE)
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[250px] mb-6 font-normal">
                  Academic rigor, smart classes, STEM labs, and sports leadership preparing future-ready minds.
                </p>

                {/* Action CTA Button */}
                <Link
                  href="/core-curriculum"
                  className="mt-auto inline-flex items-center gap-2 px-7 py-2 rounded-full bg-[#1e3a8a] hover:bg-[#172554] text-white text-xs font-bold tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  <span>Explore TBS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>


              {/* ======================================================== */}
              {/* STAGE 3: TBS ALUMNI (TBS Alumni.png) */}
              {/* ======================================================== */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Top Image Composition with Circular Backdrop */}
                <div className="relative w-64 h-64 mb-3 flex items-center justify-center">
                  {/* Circular Backdrop Aura */}
                  <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-[#EDF5FF] via-[#E2EEFD] to-[#D5E6FD] border-2 border-white shadow-[0_20px_45px_-12px_rgba(2,132,199,0.25)] -z-0 group-hover:scale-105 transition-transform duration-500" />

                  {/* Graduate Cutout Image (TBS Alumni.png) */}
                  <div className="relative w-56 h-60 z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 flex items-end justify-center">
                    <Image
                      src="/TBSAlumniMen.png"
                      alt="TBS Alumni Graduate"
                      fill
                      priority
                      unoptimized
                      className="object-contain object-bottom drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>

                  {/* Number 03 Badge */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0369a1] text-white flex items-center justify-center text-xs font-black shadow-lg border-2 border-white z-20 group-hover:scale-110 transition-transform">
                    03
                  </div>
                </div>

                {/* Logo & Headline */}
                <div className="mb-2 flex flex-col items-center min-h-[58px] justify-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-[#0284c7]">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-[#1e3a8a] tracking-wider">TBS Alumni</span>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#1e3a8a] tracking-tight">
                    A lifelong connection.
                  </h3>
                </div>

                {/* No tag on the alumni card; empty line keeps the text aligned with the other two cards */}
                <div className="h-[16.5px] mb-2" aria-hidden="true" />

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[250px] mb-6 font-normal">
                  Our alumni carry the TBS values into the world — as compassionate leaders and confident changemakers.
                </p>

                {/* Action CTA Button */}
                <Link
                  href="/alumni"
                  className="mt-auto inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-slate-700 text-slate-800 hover:bg-slate-900 hover:text-white text-xs font-bold tracking-wider uppercase transition-all transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <span>Join Our Alumni</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
