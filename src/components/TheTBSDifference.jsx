"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useContent } from "@/lib/content/store";

export default function TheTBSDifference() {
  const TABS = useContent("home").difference;
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const handleNext = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % TABS.length);
  }, [TABS.length]);
  
  const handlePrev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + TABS.length) % TABS.length);
  }, [TABS.length]);

  // Auto-slide effect with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const activeTab = TABS[activeIdx % TABS.length] || TABS[0];

  return (
    <section 
      className="relative w-full py-20 overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Dotted Patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1e3a8a 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1e3a8a 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#1e3a8a] mb-12">
          The TBS Difference
        </h2>

        {/* Tabs */}
        <div className="relative mb-16">
          {/* Added horizontal scroll for tabs */}
          <div 
            className="flex overflow-x-auto items-center justify-start md:justify-center pb-4 scroll-smooth hide-scrollbar"
          >
            {TABS.map((tab, idx) => (
              <React.Fragment key={tab.id}>
                <button
                  onClick={() => setActiveIdx(idx)}
                  className={`shrink-0 whitespace-nowrap text-sm md:text-base font-bold transition-colors duration-300 px-4 py-2 ${
                    activeIdx === idx ? 'text-[#e1251b]' : 'text-[#1e3a8a] hover:text-[#e1251b]/80'
                  }`}
                >
                  {tab.title}
                </button>
                {/* Separator */}
                {idx < TABS.length - 1 && (
                  <div className="hidden md:block shrink-0 w-px h-5 bg-gray-300 mx-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Red line under tabs */}
          <div className="w-full h-0.5 bg-[#e1251b] opacity-50"></div>
        </div>

        {/* Content Carousel */}
        <div className="flex items-center justify-between gap-4 md:gap-8 relative">
          
          {/* Prev Arrow */}
          <button 
            onClick={handlePrev}
            className="hidden md:flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-colors"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          {/* Content Area */}
          <div className="w-full relative min-h-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50) {
                    handleNext();
                  } else if (swipe > 50) {
                    handlePrev();
                  }
                }}
                className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full cursor-grab active:cursor-grabbing"
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#e1251b] mb-6">
                    {activeTab.heading}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {activeTab.desc}
                  </p>
                  
                  <div>
                    <a href="#" className="inline-flex items-center group">
                      <div className="relative font-bold text-[#1e3a8a] pb-1">
                        {activeTab.linkText}
                        {/* Red underline */}
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e1251b] transform origin-left transition-transform duration-300 group-hover:scale-x-0"></div>
                      </div>
                      <ArrowRight size={18} strokeWidth={2} className="ml-2 text-[#1e3a8a] transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className={`w-full lg:w-1/2 ${activeTab.fullImage ? "" : "h-75 md:h-100"}`}>
                  <img
                    src={activeTab.image}
                    alt={activeTab.heading}
                    className={`w-full shadow-lg ${activeTab.fullImage ? "h-auto" : "h-full object-cover"}`}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Arrow */}
          <button 
            onClick={handleNext}
            className="hidden md:flex shrink-0 items-center justify-center w-10 h-10 rounded-full border bg-gray-400 text-white border-transparent hover:bg-[#1e3a8a] transition-colors"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>

        </div>
        
        {/* Mobile Navigation Arrows (shown only on small screens) */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-8">
          <button 
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1e3a8a] text-[#1e3a8a]"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button 
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 rounded-full border bg-gray-400 text-white border-transparent"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
