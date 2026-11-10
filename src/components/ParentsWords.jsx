'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from "@/lib/content/store";

export default function ParentsWords() {
  const testimonials = useContent("home").testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = React.useRef(null);

  // Auto-scroll logic to keep active item in view without affecting page scroll
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeElement = container.children[activeIndex];
      if (activeElement) {
        // Calculate position locally to avoid scrolling the main window
        const elementRect = activeElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const offset = elementRect.top - containerRect.top - (containerRect.height / 2) + (elementRect.height / 2);
        
        container.scrollBy({
          top: offset,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const current = testimonials[activeIndex % testimonials.length] || { quote: "", parent: "", role: "", rating: 0 };
  const quoteLength = (current.quote || "").length;
  const paragraphs = (current.quote || "").split("\n").filter(Boolean);

  // Longer reviews stay on screen longer (6s–16s) so parents can finish reading
  const displaySeconds = Math.min(16, Math.max(6, Math.round(quoteLength / 40)));

  // Smaller text for long reviews so they fit nicely
  const quoteSizeClass =
    quoteLength > 800
      ? "text-sm sm:text-base md:text-lg"
      : quoteLength > 450
        ? "text-base sm:text-lg md:text-xl"
        : "text-lg sm:text-xl md:text-2xl";

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, displaySeconds * 1000);
    return () => clearTimeout(timer);
  }, [activeIndex, displaySeconds, testimonials.length]);

  return (
    <section className="py-10 sm:py-14 relative bg-[#1e3a8a] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      {/* Abstract Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/20 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="w-10 sm:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#ef4444]"></span>
            <span className="text-[#ef4444] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm">In Parents' Words</span>
            <span className="w-10 sm:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#ef4444]"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
          >
            Why families stay.
          </motion.h2>
        </div>

        {/* Testimonials Display Wrapped in Glass */}
        <div className="bg-white/[0.03] backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-5 md:p-8 shadow-2xl relative overflow-hidden group">
          {/* Subtle inner highlight */}
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Large Featured Quote Display (Left) */}
            <div className="lg:col-span-7 relative min-h-[200px] flex items-center">
            {/* Massive Quote Icon Background */}
            <div className="absolute -top-10 -left-6 text-[180px] leading-none font-serif text-white/5 select-none pointer-events-none">
              "
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 pl-4 sm:pl-8 border-l-4 border-[#ef4444]"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(Number(current.rating) || 0)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className={`${quoteSizeClass} font-medium text-white leading-relaxed mb-6 space-y-3`}>
                  {paragraphs.map((para, i) => (
                    <p key={i}>
                      {i === 0 && "“"}
                      {para}
                      {i === paragraphs.length - 1 && "”"}
                    </p>
                  ))}
                </blockquote>
                
                <div>
                  <p className="text-lg font-bold text-white mb-1">{current.parent}</p>
                  <p className="text-sm text-blue-200 font-medium">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Navigation/Thumbnails (Right) */}
          <div 
            ref={scrollContainerRef}
            className="lg:col-span-5 flex flex-col gap-3 max-h-[250px] overflow-y-auto pl-2 -ml-2 pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full scroll-smooth"
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative p-4 text-left rounded-2xl transition-all duration-500 overflow-hidden group shrink-0 ${
                  activeIndex === index 
                    ? 'bg-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 scale-[1.02]' 
                    : 'hover:bg-white/5 border border-transparent scale-100'
                }`}
              >
                {/* Active state moving background highlight */}
                {activeIndex === index && (
                  <>
                    <motion.div 
                      layoutId="activeTestimonialBg"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-transparent pointer-events-none rounded-2xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    {/* Animated Progress Bar */}
                    <motion.div
                      key={`progress-${activeIndex}`}
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#ef4444] to-red-300 rounded-b-2xl"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: displaySeconds, ease: "linear" }}
                    />
                  </>
                )}
                
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className={`font-bold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-blue-100 group-hover:text-white'}`}>
                      {testimonial.parent}
                    </p>
                    <p className={`text-sm transition-colors duration-300 ${activeIndex === index ? 'text-blue-200' : 'text-blue-300/60 group-hover:text-blue-200'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                  
                  {/* Subtle indicator arrow */}
                  <div className={`transition-all duration-300 ${activeIndex === index ? 'opacity-100 translate-x-0 text-[#ef4444]' : 'opacity-0 -translate-x-4 text-white'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
