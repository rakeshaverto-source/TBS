'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[99] p-3 sm:p-4 rounded-full bg-[#1e3a8a] text-white shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:bg-[#e1251b] hover:shadow-[0_8px_30px_rgba(225,37,27,0.3)] transition-all duration-300 group focus:outline-none"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-y-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
