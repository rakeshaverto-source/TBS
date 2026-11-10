"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useContent } from "@/lib/content/store";

function AnimatedCounter({ to, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const duration = 2000;
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * to));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const CardBlock = ({ block }) => {
  if (!block) return <div className="w-full h-full" />; // Empty placeholder

  if (block.type === 'image') {
    const imageUrl = block.bgUrl ? encodeURI(block.bgUrl) : '/Why.jpeg';
    return (
      <div className="w-full h-full relative overflow-hidden bg-linear-to-br from-[#1e3a8a] via-[#1a3172] to-[#0f1f4d] group flex items-center justify-center p-4 md:p-5">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[14px_14px]"
          aria-hidden="true"
        />
        {/* Soft glow accents */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#009de0]/30 blur-2xl" aria-hidden="true" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#e1251b]/20 blur-2xl" aria-hidden="true" />

        {/* Full image - never cropped */}
        <img
          src={imageUrl}
          alt=""
          className="relative z-10 max-w-full max-h-full object-contain rounded-xl ring-2 ring-white/70 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-translate-y-1"
        />
      </div>
    );
  }

  return (
    <div className={`w-full h-full p-8 md:p-10 flex flex-col justify-between border-r border-b border-gray-200 group ${block.color} relative overflow-hidden transition-all duration-300 hover:shadow-xl`}>
      {/* Optional decorative background icon could go here */}
      
      <div className="relative z-10">
        <h3 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight ${block.countColor}`}>
          <AnimatedCounter to={block.countNum} suffix={block.suffix} />
        </h3>
        <h4 className={`text-xl md:text-2xl font-bold mb-2 leading-tight ${block.textColor}`}>
          {block.title}
        </h4>
        {block.desc && (
          <p className={`text-sm md:text-base opacity-80 font-medium ${block.textColor}`}>
            {block.desc}
          </p>
        )}
      </div>

      {block.link && (
        <Link 
          href={block.link}
          className={`relative z-10 flex items-center gap-2 font-bold text-sm uppercase tracking-wider mt-6 group/link w-max ${block.textColor}`}
        >
          <span className="relative pb-1">
            Read more
            <span className={`absolute left-0 bottom-0 w-full h-0.5 transition-transform duration-300 origin-left scale-x-100 group-hover/link:scale-x-0 ${block.color === 'bg-white' ? 'bg-[#ffc107]' : 'bg-white/50'}`} />
          </span>
          <ChevronRight size={18} className="transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export default function TBSInNumbers() {
  const statsData = useContent("home").numbers;
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Smooth scrolling: wheel input moves a target, and an animation loop
    // eases the real scroll position towards it every frame.
    let target = el.scrollLeft;
    let rafId = null;
    const EASE = 0.12; // lower = smoother/slower glide

    const animate = () => {
      const diff = target - el.scrollLeft;
      if (Math.abs(diff) < 0.5) {
        el.scrollLeft = target;
        rafId = null;
        return;
      }
      el.scrollLeft += diff * EASE;
      rafId = window.requestAnimationFrame(animate);
    };

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;

      // Find the parent section to check its position
      const section = el.closest('section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // "Full section show hone ke baad scroll start kar"
        // If scrolling down, wait until the top of the section reaches near the top of the screen
        if (e.deltaY > 0 && rect.top > 100) return;

        // If scrolling up, wait until the bottom of the section reaches near the bottom of the screen
        if (e.deltaY < 0 && rect.bottom < windowHeight - 100) return;
      }

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      // When idle, sync target with the real position (e.g. after a touch/trackpad drag)
      if (rafId === null) target = el.scrollLeft;

      // At the horizontal edges, let the page scroll normally
      const isAtLeftEdge = target <= 0 && e.deltaY < 0;
      const isAtRightEdge = target >= maxScrollLeft - 1 && e.deltaY > 0;
      if (isAtLeftEdge || isAtRightEdge) return;

      // Prevent vertical page scroll and glide horizontally instead
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY; // line-mode mice
      target = Math.max(0, Math.min(maxScrollLeft, target + delta * 1.2));
      if (rafId === null) rafId = window.requestAnimationFrame(animate);
    };

    // passive: false is required to call preventDefault
    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('wheel', handleWheel);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden" id="tbs-numbers">
      {/* Optional faint background watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <h2 className="text-[20vw] font-black text-[#1e3a8a] whitespace-nowrap select-none">THE BHARAT SCHOOL</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">TBS in Numbers</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          The Bharat School is a leading institution dedicated to cultivating intellect, character, and future leaders. We proudly serve a diverse, international student audience.
        </p>
      </div>

      {/* Scrollable Slider Container */}
      <div 
        ref={scrollRef}
        className="w-full relative z-10 px-4 md:px-10 overflow-x-auto overflow-y-hidden hide-scrollbar"
      >
        <div className="flex gap-0 w-max">
          {statsData.map((col) => (
            <div key={col.id} className="flex flex-col w-64 md:w-72 lg:w-80">
              {/* Top Block */}
              <div className="h-64 md:h-72 lg:h-80 border-t border-l border-gray-200">
                <CardBlock block={col.top} />
              </div>
              
              {/* Bottom Block */}
              <div className="h-64 md:h-72 lg:h-80 border-l border-gray-200">
                <CardBlock block={col.bottom} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll instruction overlay (mobile mostly) */}
      <div className="flex justify-center mt-8 text-slate-400 text-sm font-medium items-center gap-2 animate-pulse">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
        Scroll to explore
      </div>
    </section>
  );
}
