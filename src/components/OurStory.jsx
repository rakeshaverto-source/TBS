"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function OurStory() {
  const phrases = [
    "Indian values.",
    "rich heritage.",
    "modern learning."
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentText = phrases[currentPhraseIndex] || phrases[0];

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length); // Switch phrase
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentText.substring(0, displayText.length - 1)
            : currentText.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 100);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative pt-16 pb-4 md:py-24 bg-white text-slate-900 overflow-hidden">

      {/* Dynamic Background Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right Bold Red Gradient */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-linear-to-br from-[#ef4444] to-red-400 rounded-full blur-[100px] opacity-30"></div>
        {/* Bottom Left Deep Blue Gradient */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-linear-to-tr from-[#1e3a8a] to-blue-400 rounded-full blur-[100px] opacity-20"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,58,138,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-2 md:gap-8 lg:gap-24 items-center">

          {/* Left Text Side */}
          <div className="lg:w-1/2 space-y-6 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-16 h-1 bg-[#ef4444] rounded-full"></span>
                <span className="text-[#1e3a8a] font-bold tracking-[0.2em] uppercase text-sm">Our Philosophy</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-[#1e3a8a] tracking-tight">
                Rooted in <br />
                <span className="relative inline-block min-h-[1.2em]">
                  {/* Invisible placeholder to reserve exact space for the longest word */}
                  <span className="invisible pointer-events-none whitespace-nowrap">global excellence.</span>

                  {/* Actual typing text overlay */}
                  <span className="absolute left-0 top-0 text-transparent bg-clip-text bg-linear-to-r from-[#ef4444] to-red-500 whitespace-nowrap">
                    {displayText}
                    <span className="inline-block w-[0.1em] h-[0.9em] bg-[#ef4444] ml-2 animate-pulse align-middle"></span>
                    <svg className="absolute -bottom-4 left-0 w-full h-4 text-[#ef4444] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed space-y-6"
            >
              <p>
                In 2005, we opened Panchkula's first school to bring in Cambridge-standard teaching. We set a benchmark that changed the city's educational landscape forever.
              </p>
              <p>
                As India's own education standards matured under <span className="font-bold text-[#1e3a8a]">NEP 2020</span>, we made a deliberate choice. It was time to build a future rooted in our own heritage while maintaining the global excellence we've always been known for.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1e3a8a] text-white rounded-full font-bold overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10">Read Full Heritage</span>
                <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Right Image & Editorial Quote */}
          <div className="lg:w-1/2 relative w-full pt-2 lg:pt-0 flex justify-end">

            {/* Dots Pattern behind image */}
            <div className="absolute -top-10 right-10 w-32 h-32 bg-[radial-gradient(#ef4444_3px,transparent_3px)] bg-size-[16px_16px] opacity-20 z-0 hidden md:block"></div>

            {/* The Main Image with Editorial Mask */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full md:w-[90%] z-10 mt-2 md:mt-0"
            >
              <div className="relative">
                {/* Offset Decorative Border */}
                <div className="absolute -inset-4 md:-inset-6 border-2 border-[#1e3a8a]/20 rounded-tr-[80px] md:rounded-tr-[120px] rounded-bl-[80px] md:rounded-bl-[120px] rounded-tl-3xl rounded-br-3xl z-0 pointer-events-none"></div>

                {/* Image Container - 3:2 matches the photo, so nothing is cropped */}
                <div className="relative w-full aspect-[3/2] rounded-tr-[60px] md:rounded-tr-[90px] rounded-bl-[60px] md:rounded-bl-[90px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl z-10 bg-[#1e3a8a]">
                  <div className="absolute inset-0 bg-linear-to-tr from-[#1e3a8a]/40 via-transparent to-transparent z-10 pointer-events-none mix-blend-multiply"></div>
                  <img
                    src="/our-philosophy.webp"
                    alt="The Bharat School students performing with the Indian flag at Reflections in Verse 2025"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Glassmorphic Quote Block */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                className="relative mt-10 md:mt-12 md:-ml-24 md:w-[calc(100%+6rem)] z-20"
              >
                <div className="relative bg-white/95 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-[0_30px_60px_-15px_rgba(30,58,138,0.15)] border border-white overflow-hidden">

                  {/* Glowing accent */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f87171]/5 rounded-full blur-3xl pointer-events-none"></div>

                  {/* Decorative Icon */}
                  <svg className="absolute top-6 right-8 w-16 h-16 text-[#1e3a8a]/5 transform rotate-12 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8.4c.3-2 2.1-3.6 4.3-3.9V8h-2.7zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-5.6c.3-2 2.1-3.6 4.3-3.9V8h-2.7z" />
                  </svg>

                  <div className="relative z-10 flex gap-4 md:gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-[#f87171] to-red-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-500/30">
                      GS
                    </div>
                    <div>
                      <p className="text-base md:text-xl font-serif leading-relaxed text-slate-700 italic mb-4 md:mb-6">
                        "We didn't leave British prestige behind. We outgrew the idea that prestige has to be imported. Same founders. Same faculty. Same 1:30 classrooms — now built around Indian values instead of a borrowed name."
                      </p>
                      <div>
                        <h5 className="font-bold text-[#1e3a8a] text-base md:text-lg">Ms. Geetika Sethi</h5>
                        <p className="text-[#f87171] text-xs font-bold uppercase tracking-widest mt-1">Director-Principal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Button at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:hidden mt-10 w-full flex justify-center"
          >
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1e3a8a] text-white rounded-full font-bold overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10">Read Full Heritage</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
