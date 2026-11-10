"use client";

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const CARDS = [
  { 
    title: "Schools", 
    desc: "21 Awesome Things About Learning at Bharat", 
    color: "dark",
    num: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.315 48.315 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    )
  },
  { 
    title: "Campus Life", 
    desc: "Innovation Fund supports student creativity", 
    color: "light",
    num: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  { 
    title: "Beyond Academics", 
    desc: "Smart Graduate School of Arts & Science", 
    color: "dark",
    num: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  },
  { 
    title: "Athletics", 
    desc: "Upcoming Inter-School Sports Meet 2026", 
    color: "light",
    num: "04",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    )
  }
];

const COLOR_CONFIG = {
  dark: {
    bg: 'bg-[#0a192f]/95 backdrop-blur-md',
    border: 'border border-yellow-400/20',
    iconBg: 'bg-yellow-400/10 text-yellow-400',
    text: 'text-yellow-400',
    textColor: 'text-white',
    hoverShadow: 'hover:shadow-[0_20px_40px_-15px_rgba(250,204,21,0.25)] hover:border-yellow-400/50',
    gradient: 'from-yellow-400/10 via-transparent to-transparent',
  },
  light: {
    bg: 'bg-white/95 backdrop-blur-md',
    border: 'border border-slate-200',
    iconBg: 'bg-[#e1251b]/5 text-[#e1251b]',
    text: 'text-[#e1251b]',
    textColor: 'text-slate-800',
    hoverShadow: 'hover:shadow-[0_20px_40px_-15px_rgba(225,37,27,0.15)] hover:border-[#e1251b]/30',
    gradient: 'from-red-600/5 via-transparent to-transparent',
  }
};

const ANIMATION = {
  DELAY: 300,
  CARD_STEP: 200,
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const videoRef = useRef(null);

  // Swipe handling states
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        setActiveCard(prev => (prev + 1) % CARDS.length);
      } else {
        setActiveCard(prev => (prev - 1 + CARDS.length) % CARDS.length);
      }
    }
  };

  useEffect(() => {
    const minDelay = new Promise((resolve) => setTimeout(resolve, ANIMATION.DELAY));
    const videoReady = new Promise((resolve) => {
      const video = videoRef.current;
      if (!video) return resolve(true);
      if (video.readyState >= 3) return resolve(true);
      video.addEventListener('canplaythrough', () => resolve(true), { once: true });
    });

    Promise.all([minDelay, videoReady]).then(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    // Auto-rotate disabled for manual swiping
    // const interval = setInterval(() => {
    //   setActiveCard((prev) => (prev + 1) % CARDS.length);
    // }, 4000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex flex-col sm:block" aria-label="Hero banner">
      {/* Background Video */}
      <div
        className="relative sm:absolute inset-0 z-0 overflow-hidden bg-black h-[80vh] sm:h-[85vh] sm:min-h-150 w-full"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/The Bhart School.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60"></div>
      </div>

      {/* Spacer for desktop */}
      <div className="hidden sm:block sm:h-[85vh] sm:min-h-150 w-full"></div>


    </section>
  );
}