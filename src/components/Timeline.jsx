'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from "@/lib/content/store";

function FloatingBubble({ className, duration = 18, delay = 0, xPath = [0, 120, -100, 150, -60, 0], yPath = [0, -120, 100, -140, 80, 0] }) {
  return (
    <motion.div
      className={className}
      animate={{
        x: xPath,
        y: yPath,
        scale: [1, 1.12, 0.92, 1.08, 0.95, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function Timeline() {
  const TIMELINE = useContent("home").timeline;
  return (
    <section className="pt-6 pb-10 md:pt-10 lg:pt-12 sm:pb-12 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      {/* Freely Roaming Circular Bubbles Across Entire Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* Huge Ambient Anchors */}
        <FloatingBubble duration={26} delay={0} xPath={[0, 140, -100, 160, -80, 0]} yPath={[0, -100, 120, -140, 90, 0]} className="absolute -left-16 top-10 w-72 h-72 rounded-full bg-[#1e3a8a] opacity-[0.07]" />
        <FloatingBubble duration={30} delay={2} xPath={[0, -150, 120, -180, 90, 0]} yPath={[0, 120, -110, 130, -90, 0]} className="absolute -right-16 top-16 w-80 h-80 rounded-full bg-[#1e3a8a] opacity-[0.07]" />
        <FloatingBubble duration={28} delay={1} xPath={[0, 120, -140, 100, -90, 0]} yPath={[0, -130, 90, -110, 120, 0]} className="absolute left-[35%] -top-12 w-64 h-64 rounded-full bg-[#0284c7] opacity-[0.06]" />

        {/* Medium & Large Roaming Circles (Left to Center) */}
        <FloatingBubble duration={20} delay={0.5} xPath={[0, 180, -90, 220, -120, 0]} yPath={[0, -140, 120, -160, 90, 0]} className="absolute left-[8%] top-[30%] w-48 h-48 rounded-full bg-[#e1251b] opacity-[0.06]" />
        <FloatingBubble duration={22} delay={3} xPath={[0, 200, -130, 170, -100, 0]} yPath={[0, 130, -140, 110, -120, 0]} className="absolute left-[22%] bottom-[15%] w-44 h-44 rounded-full bg-[#1e3a8a] opacity-[0.07]" />
        <FloatingBubble duration={19} delay={1.5} xPath={[0, -160, 180, -120, 150, 0]} yPath={[0, -120, 150, -130, 100, 0]} className="absolute left-[42%] top-[45%] w-36 h-36 rounded-full bg-[#0284c7] opacity-[0.07]" />

        {/* Medium & Large Roaming Circles (Center to Right) */}
        <FloatingBubble duration={23} delay={2.5} xPath={[0, -190, 140, -210, 100, 0]} yPath={[0, -150, 110, -130, 140, 0]} className="absolute right-[25%] top-[20%] w-44 h-44 rounded-full bg-[#e1251b] opacity-[0.06]" />
        <FloatingBubble duration={21} delay={0.8} xPath={[0, -170, 130, -150, 120, 0]} yPath={[0, 140, -130, 120, -100, 0]} className="absolute right-[12%] bottom-[20%] w-52 h-52 rounded-full bg-[#1e3a8a] opacity-[0.06]" />
        <FloatingBubble duration={24} delay={4} xPath={[0, 160, -170, 130, -140, 0]} yPath={[0, -110, 130, -140, 100, 0]} className="absolute left-[58%] bottom-[10%] w-40 h-40 rounded-full bg-[#0284c7] opacity-[0.07]" />

        {/* Freely Drifting Small & Active Satellites */}
        <FloatingBubble duration={14} delay={0.2} xPath={[0, 240, -160, 200, -180, 0]} yPath={[0, -180, 140, -190, 130, 0]} className="absolute left-[15%] top-[15%] w-20 h-20 rounded-full bg-[#e1251b] opacity-[0.10]" />
        <FloatingBubble duration={16} delay={1.8} xPath={[0, -220, 190, -240, 150, 0]} yPath={[0, 160, -170, 150, -140, 0]} className="absolute right-[18%] top-[55%] w-24 h-24 rounded-full bg-[#0284c7] opacity-[0.09]" />
        <FloatingBubble duration={15} delay={2.2} xPath={[0, 210, -180, 230, -150, 0]} yPath={[0, -150, 170, -160, 120, 0]} className="absolute left-[30%] top-[65%] w-16 h-16 rounded-full bg-[#1e3a8a] opacity-[0.11]" />
        <FloatingBubble duration={13} delay={0.9} xPath={[0, -250, 180, -200, 170, 0]} yPath={[0, -170, 160, -180, 140, 0]} className="absolute right-[35%] top-[10%] w-18 h-18 rounded-full bg-[#e1251b] opacity-[0.10]" />
        
        {/* Tiny Floating Sparkling Bubbles */}
        <FloatingBubble duration={11} delay={0.4} xPath={[0, 260, -200, 280, -180, 0]} yPath={[0, -200, 180, -210, 160, 0]} className="absolute left-[20%] bottom-[30%] w-10 h-10 rounded-full bg-[#0284c7] opacity-[0.14]" />
        <FloatingBubble duration={12} delay={1.6} xPath={[0, -270, 220, -250, 190, 0]} yPath={[0, 190, -200, 180, -170, 0]} className="absolute right-[28%] bottom-[25%] w-12 h-12 rounded-full bg-[#e1251b] opacity-[0.13]" />
        <FloatingBubble duration={10} delay={2.7} xPath={[0, 280, -230, 250, -210, 0]} yPath={[0, -220, 190, -200, 170, 0]} className="absolute left-[48%] top-[25%] w-8 h-8 rounded-full bg-[#1e3a8a] opacity-[0.15]" />
        <FloatingBubble duration={9} delay={1.1} xPath={[0, -290, 240, -260, 200, 0]} yPath={[0, 210, -190, 220, -180, 0]} className="absolute right-[8%] top-[35%] w-10 h-10 rounded-full bg-[#0284c7] opacity-[0.14]" />
        <FloatingBubble duration={11.5} delay={3.1} xPath={[0, 250, -220, 270, -190, 0]} yPath={[0, 180, -210, 190, -160, 0]} className="absolute left-[65%] top-[70%] w-12 h-12 rounded-full bg-[#e1251b] opacity-[0.12]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 relative">
          <h2 className="text-[#e1251b] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-2 flex items-center justify-center gap-4">
            <span className="w-8 sm:w-16 h-0.5 bg-linear-to-r from-transparent to-[#e1251b]"></span>
            A Legacy of Excellence
            <span className="w-8 sm:w-16 h-0.5 bg-linear-to-l from-transparent to-[#e1251b]"></span>
          </h2>
          <h3 className="text-4xl sm:text-6xl font-black text-[#1e3a8a] tracking-tight">
            Our Journey
          </h3>
        </div>

        {/* Desktop View: Horizontal Timeline */}
        <div className="hidden lg:block relative px-4 mt-2">
          {/* Central Animated Line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 -translate-y-1/2 rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-[#e1251b] via-[#1e3a8a] to-[#e1251b] animate-pulse opacity-40"></div>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {TIMELINE.map((item, index) => {
              const isTop = index % 2 === 0;
              return (
                <div key={item.year} className="group relative h-80 flex flex-col justify-center py-2">

                  {/* Node Dot with Ping effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 z-20">
                    <div className="absolute inset-0 bg-[#e1251b] rounded-full opacity-20 animate-ping group-hover:animate-none group-hover:scale-150 transition-all duration-700"></div>
                    <div className="relative w-4 h-4 rounded-full bg-white border-4 border-[#e1251b] shadow-[0_0_15px_rgba(225,37,27,0.5)] transition-transform duration-500 group-hover:scale-150 group-hover:border-[#1e3a8a]"></div>
                  </div>

                  {/* Main Text Card Container */}
                  <div className={`relative z-10 w-full transition-all duration-700 ease-out group-hover:-translate-y-2 ${isTop ? 'mb-auto mt-1' : 'mt-auto mb-1 order-last'}`}>
                    <div className="relative p-4 xl:p-5 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-white/60 transition-all duration-500 group-hover:shadow-[0_20px_50px_-15px_rgba(30,58,138,0.2)] group-hover:bg-white group-hover:border-[#1e3a8a]/20 overflow-hidden h-34 flex flex-col justify-center">
                      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#e1251b] to-[#1e3a8a] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <h4 className="text-2xl font-black bg-clip-text text-transparent bg-linear-to-br from-[#1e3a8a] to-[#3b82f6] mb-1.5">
                        {item.year}
                      </h4>
                      <p className="text-slate-600 font-medium leading-snug text-xs xl:text-sm group-hover:text-slate-800 transition-colors duration-300 line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                    {/* Connecting dashed line (vertical) */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-linear-to-b from-transparent via-[#e1251b]/40 to-transparent h-6 opacity-0 group-hover:opacity-100 transition-all duration-700 ${isTop ? '-bottom-5' : '-top-5'}`}></div>
                  </div>

                  {/* Opposite Side Image Container */}
                  {item.image && (
                    <div className={`relative z-10 w-full transition-all duration-700 ease-out group-hover:-translate-y-2 ${!isTop ? 'mb-auto mt-1 order-first' : 'mt-auto mb-1 order-last'}`}>
                      <div className="relative p-2 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-white/60 transition-all duration-500 group-hover:shadow-[0_20px_50px_-15px_rgba(30,58,138,0.2)] overflow-hidden h-34 flex items-center justify-center">
                         {/* Blurred Background Layer */}
                         <div className="absolute inset-0 bg-slate-50 overflow-hidden rounded-2xl">
                           <img src={item.image} alt="" className="w-full h-full object-cover blur-xl scale-110 opacity-60" />
                         </div>
                         {/* Foreground Contained Image */}
                         <img src={item.image} alt={`Timeline ${item.year}`} className={`relative z-10 w-full h-full drop-shadow-md rounded-lg ${item.fit === "cover" ? "object-cover" : "object-contain"}`} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="block lg:hidden relative pl-4 sm:pl-8">
          {/* Vertical Line */}
          <div className="absolute top-6 left-5.75 sm:left-9.75 w-0.5 h-[calc(100%-3rem)] bg-linear-to-b from-[#e1251b]/20 via-[#1e3a8a]/20 to-transparent"></div>

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <div key={item.year} className="relative group pl-10 sm:pl-14">

                {/* Node Dot with Ping */}
                <div className="absolute top-5 left-3.75 sm:left-7.75 flex items-center justify-center w-5 h-5 z-10">
                  <div className="absolute inset-0 bg-[#e1251b] rounded-full opacity-30 animate-ping"></div>
                  <div className="relative w-3.5 h-3.5 rounded-full bg-white border-[3px] border-[#e1251b] transition-transform duration-500 group-hover:scale-150 group-hover:border-[#1e3a8a]"></div>
                </div>

                {/* Text Card */}
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/60 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#e1251b] to-[#1e3a8a] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-3xl font-black bg-clip-text text-transparent bg-linear-to-br from-[#1e3a8a] to-[#3b82f6] mb-3">
                    {item.year}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-[15px] font-medium group-hover:text-slate-800 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
                
                {/* Image under text for mobile */}
                {item.image && (
                  <div className="mt-6 bg-white p-2 rounded-3xl shadow-lg border border-white/60 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 relative overflow-hidden h-50 flex items-center justify-center">
                     {/* Blurred Background Layer */}
                     <div className="absolute inset-0 bg-slate-50 overflow-hidden rounded-3xl">
                       <img src={item.image} alt="" className="w-full h-full object-cover blur-xl scale-110 opacity-60" />
                     </div>
                     {/* Foreground Contained Image */}
                     <img src={item.image} alt={`Timeline ${item.year}`} className={`relative z-10 w-full h-full drop-shadow-md rounded-xl ${item.fit === "cover" ? "object-cover" : "object-contain"}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Read Our Story Button */}
        <div className="mt-8 sm:mt-10 text-center relative z-10">
          <button className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-[#1e3a8a] border-2 border-[#1e3a8a] rounded-full font-bold tracking-wide overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(30,58,138,0.15)]">
            <div className="absolute inset-0 bg-[#1e3a8a] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Our Story</span>
            <svg className="relative z-10 w-5 h-5 group-hover:text-white transition-all duration-500 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

