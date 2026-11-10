'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Stethoscope, ShieldCheck, Crosshair, Code, Scale, Atom, Briefcase, Plane, Palette, Rocket, BookOpen, Trophy, Utensils, Music } from 'lucide-react';

const professions = [
  { icon: <Crosshair size={20} className="text-emerald-500" strokeWidth={3} />, label: "Army", x: "-350px", y: "-180px", glow: "border-emerald-500 shadow-emerald-500" },
  { icon: <Stethoscope size={20} className="text-blue-500" strokeWidth={3} />, label: "Doctor", x: "-300px", y: "-320px", glow: "border-blue-500 shadow-blue-500" },
  { icon: <Trophy size={20} className="text-yellow-500" strokeWidth={3} />, label: "Athlete", x: "-240px", y: "-230px", glow: "border-yellow-500 shadow-yellow-500" },
  { icon: <Palette size={20} className="text-pink-500" strokeWidth={3} />, label: "Artist", x: "-190px", y: "-110px", glow: "border-pink-500 shadow-pink-500" },
  { icon: <BookOpen size={20} className="text-orange-500" strokeWidth={3} />, label: "Teacher", x: "-130px", y: "-280px", glow: "border-orange-500 shadow-orange-500" },
  { icon: <Code size={20} className="text-purple-500" strokeWidth={3} />, label: "Engineer", x: "-80px", y: "-160px", glow: "border-purple-500 shadow-purple-500" },
  { icon: <Atom size={20} className="text-cyan-500" strokeWidth={3} />, label: "Scientist", x: "-30px", y: "-360px", glow: "border-cyan-500 shadow-cyan-500" },
  { icon: <Rocket size={20} className="text-red-500" strokeWidth={3} />, label: "Astronaut", x: "30px", y: "-120px", glow: "border-red-500 shadow-red-500" },
  { icon: <Briefcase size={20} className="text-slate-400" strokeWidth={3} />, label: "Business", x: "80px", y: "-270px", glow: "border-slate-400 shadow-slate-400" },
  { icon: <Utensils size={20} className="text-amber-500" strokeWidth={3} />, label: "Chef", x: "130px", y: "-180px", glow: "border-amber-500 shadow-amber-500" },
  { icon: <ShieldCheck size={20} className="text-blue-600" strokeWidth={3} />, label: "Police", x: "190px", y: "-340px", glow: "border-blue-600 shadow-blue-600" },
  { icon: <Scale size={20} className="text-amber-600" strokeWidth={3} />, label: "Lawyer", x: "240px", y: "-110px", glow: "border-amber-600 shadow-amber-600" },
  { icon: <Music size={20} className="text-fuchsia-500" strokeWidth={3} />, label: "Musician", x: "290px", y: "-250px", glow: "border-fuchsia-500 shadow-fuchsia-500" },
  { icon: <Plane size={20} className="text-indigo-500" strokeWidth={3} />, label: "Pilot", x: "350px", y: "-160px", glow: "border-indigo-500 shadow-indigo-500" },
];

export default function StudentJourney() {
  const containerRef = useRef(null);
  const [showProfessions, setShowProfessions] = useState(false);

  // Main scroll progress over the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.99) {
      setShowProfessions(true);
    } else {
      setShowProfessions(false);
    }
  });

  const [panDistance, setPanDistance] = useState("-70vw");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPanDistance("-170vw");
      } else if (window.innerWidth < 1024) {
        setPanDistance("-100vw");
      } else {
        setPanDistance("-63vw");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Background pans left responsively
  const worldX = useTransform(scrollYProgress, [0, 1], ["0vw", panDistance]);

  // Opacities for transformations
  const kidOpacity = useTransform(scrollYProgress, [0, 0.32, 0.33, 1], [1, 1, 0, 0]);
  const teenOpacity = useTransform(scrollYProgress, [0, 0.32, 0.33, 0.70, 0.71, 1], [0, 0, 1, 1, 0, 0]);
  const adultOpacity = useTransform(scrollYProgress, [0, 0.70, 0.71, 0.98, 0.99, 1], [0, 0, 1, 1, 0, 0]);
  const enjoyOpacity = useTransform(scrollYProgress, [0, 0.98, 0.99, 1], [0, 0, 1, 1]);

  // Celebration Effect
  const celebrationOpacity = useTransform(scrollYProgress, [0, 0.98, 0.99, 1], [0, 0, 1, 1]);

  // Generate deterministic confetti pieces for a grander effect
  const confettiPieces = Array.from({ length: 40 }).map((_, i) => {
    // Pseudo-random values for deterministic rendering with fixed precision to avoid hydration mismatch
    const rand = parseFloat(((Math.sin(i + 1) * 10000) - Math.floor(Math.sin(i + 1) * 10000)).toFixed(3));
    const rand2 = parseFloat(((Math.cos(i + 1) * 10000) - Math.floor(Math.cos(i + 1) * 10000)).toFixed(3));
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-400', 'bg-emerald-500', 'bg-purple-500', 'bg-pink-500'];
    return {
      color: colors[i % colors.length],
      x: parseFloat(((rand - 0.5) * 800).toFixed(2)),
      y: parseFloat(((rand2 * -500) - 100).toFixed(2)),
      r: parseFloat((rand * 360).toFixed(2)),
      scale: parseFloat((0.5 + rand).toFixed(2)),
      isRect: rand > 0.5,
      delay: parseFloat((rand2 * 1.5).toFixed(2)),
      sway: i % 2 === 0 ? 50 : -50 // deterministic sway instead of Math.random
    };
  });

  return (
    <section ref={containerRef} className="h-[150vh] md:h-[250vh] bg-[#0B1120] relative">

      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end">

        {/* Header (Fixed) */}
        <div className="absolute top-[10vh] md:top-[12vh] left-0 w-full text-center z-50 pointer-events-none [@media(max-height:800px)]:scale-[0.80] origin-top">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-300 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2 drop-shadow-sm bg-slate-800/50 backdrop-blur-sm inline-block px-4 py-1 rounded-full"
          >
            TBS Student's Lifecycle
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight drop-shadow-md"
          >
            Scroll Down to Walk
          </motion.h3>
        </div>

        {/* The Moon (Fixed) */}
        <div className="absolute top-[22vh] right-10 md:top-20 md:right-20 w-16 h-16 md:w-20 md:h-20 bg-slate-200 rounded-full blur-[1px] opacity-90 shadow-[0_0_50px_rgba(255,255,255,0.4)] pointer-events-none"></div>

        {/* The Moving World */}
        <motion.div
          className="absolute bottom-0 left-0 h-full w-[400vw] flex items-end"
          style={{ x: worldX }}
        >
          {/* The Road */}
          <div className="absolute bottom-0 left-0 w-full h-[12vh] bg-slate-800 border-t-8 border-slate-600 shadow-inner z-10">
            {/* Dashed line on road */}
            <div className="absolute top-1/2 left-0 w-full h-2 border-t-4 border-dashed border-white/40"></div>
          </div>
          {/* Street Lights - Responsive Positioning with Glow */}
          <div className="absolute bottom-[9vh] md:bottom-[8vh] left-[7.5vw] md:left-[25vw] lg:left-[17.5vw] h-[38vh] md:h-[42vh] z-0 flex justify-center -translate-x-1/2">
            <div className="absolute top-[8%] w-10 h-10 bg-yellow-300/10 rounded-full blur-md"></div>
            <img src="/light.png" alt="Street Light" className="h-full object-contain opacity-90" />
          </div>

          {/* Light between Card 1 and Card 2 */}
          <div className="absolute bottom-[9vh] md:bottom-[8vh] left-[92.5vw] md:left-[75vw] lg:left-[44.5vw] h-[38vh] md:h-[42vh] z-0 flex justify-center -translate-x-1/2">
            <div className="absolute top-[8%] w-16 h-16 bg-yellow-300/30 rounded-full blur-lg"></div>
            <img src="/light.png" alt="Street Light" className="h-full object-contain opacity-90" />
          </div>

          {/* Light between Card 2 and Card 3 */}
          <div className="absolute bottom-[9vh] md:bottom-[8vh] left-[177.5vw] md:left-[125vw] lg:left-[71.5vw] h-[38vh] md:h-[42vh] z-0 flex justify-center -translate-x-1/2">
            <div className="absolute top-[8%] w-24 h-24 bg-yellow-300/50 rounded-full blur-xl"></div>
            <img src="/light.png" alt="Street Light" className="h-full object-contain opacity-90" />
          </div>

          {/* Light after Card 3 */}
          <div className="absolute bottom-[9vh] md:bottom-[8vh] left-[262.5vw] md:left-[175vw] lg:left-[98.5vw] h-[38vh] md:h-[42vh] z-0 flex justify-center -translate-x-1/2">
            <div className="absolute top-[8%] w-32 h-32 bg-yellow-300/70 rounded-full blur-2xl"></div>
            <img src="/light.png" alt="Street Light" className="h-full object-contain opacity-90" />
          </div>

          {/* --- STAGE 1: Tinkerbelle --- */}
          <div className="absolute bottom-[35vh] md:bottom-[35vh] left-[22.5vw] md:left-[32.5vw] lg:left-[19vw] w-[55vw] md:w-[35vw] lg:w-[24vw] mb-8 z-50 flex justify-center">
            <div className="w-full max-w-[320px] bg-white p-4 md:p-8 h-50 md:h-57.5 flex flex-col justify-center rounded-3xl shadow-lg border-b-4 border-pink-400 text-center relative z-20 hover:-translate-y-2 transition-transform duration-300 lg:scale-[0.85] xl:scale-100 [@media(max-height:800px)]:scale-[0.80] origin-bottom">
              <div className="flex justify-center mb-2 md:mb-3">
                <img src="/Tinkerbelle.webp" alt="Tinkerbelle" className="h-10 md:h-16 object-contain" />
              </div>
              <span className="text-pink-500 font-bold uppercase tracking-widest text-[11px] md:text-xs block mb-1 md:mb-2">First Steps</span>
              <p className="text-slate-500 text-[12px] md:text-sm leading-tight md:leading-relaxed">Curiosity takes flight. A playful environment where early learning feels like magic.</p>
              <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-white rotate-45 border-b-4 border-r-4 border-pink-400"></div>
            </div>
          </div>

          {/* --- STAGE 2: The Bharat School --- */}
          <div className="absolute bottom-[35vh] md:bottom-[35vh] left-[107.5vw] md:left-[82.5vw] lg:left-[46vw] w-[55vw] md:w-[35vw] lg:w-[24vw] mb-8 z-50 flex justify-center">
            <div className="w-full max-w-[320px] bg-white p-4 md:p-8 h-50 md:h-57.5 flex flex-col justify-center rounded-3xl shadow-lg border-b-4 border-blue-600 text-center relative z-20 hover:-translate-y-2 transition-transform duration-300 lg:scale-[0.85] xl:scale-100 [@media(max-height:800px)]:scale-[0.80] origin-bottom">
              <div className="flex justify-center mb-2 md:mb-3">
                <img src="/the bhart school.png" alt="The Bharat School" className="h-10 md:h-16 object-contain" />
              </div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-[11px] md:text-xs block mb-1 md:mb-2">The Flight</span>
              <p className="text-slate-500 text-[12px] md:text-sm leading-tight md:leading-relaxed">Transitioning to rigorous academics and holistic development, preparing for real-world challenges.</p>
              <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-white rotate-45 border-b-4 border-r-4 border-blue-600"></div>
            </div>
          </div>

          {/* --- STAGE 3: Successful Life --- */}
          <div className="absolute bottom-[35vh] md:bottom-[35vh] left-[192.5vw] md:left-[132.5vw] lg:left-[73vw] w-[55vw] md:w-[35vw] lg:w-[24vw] mb-8 z-50 flex justify-center">

            {/* Grand Celebration Confetti Burst anchored exactly at the pin point */}
            <motion.div
              className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 -ml-10 md:ml-0 z-0 w-0 h-0 flex justify-center pointer-events-none"
              style={{ opacity: celebrationOpacity }}
            >
              {confettiPieces.map((piece, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${piece.isRect ? 'w-2 h-6' : 'w-4 h-4'} ${piece.color} rounded-sm shadow-lg`}
                  style={{
                    transform: `translate(${piece.x}px, ${piece.y}px) rotate(${piece.r}deg) scale(${piece.scale})`
                  }}
                  animate={{
                    y: [piece.y, piece.y + 500],
                    x: [piece.x, piece.x + piece.sway],
                    rotate: [piece.r, piece.r + 360],
                  }}
                  transition={{
                    duration: 4 + (i % 3),
                    repeat: Infinity,
                    ease: "linear",
                    delay: piece.delay
                  }}
                />
              ))}
            </motion.div>

            {/* Inner Card (z-20 will render IN FRONT of the confetti z-0) */}
            <div className="w-full max-w-[320px] bg-white p-4 md:p-8 h-50 md:h-57.5 flex flex-col justify-center rounded-3xl shadow-lg border-b-4 border-emerald-500 text-center relative z-20 hover:-translate-y-2 transition-transform duration-300 lg:scale-[0.85] xl:scale-100 [@media(max-height:800px)]:scale-[0.80] origin-bottom">

              <span className="text-emerald-500 font-bold uppercase tracking-widest text-[11px] md:text-xs block mb-2 md:mb-2">The Future</span>
              <h4 className="text-[16px] md:text-2xl font-black text-slate-900 mb-1 md:mb-2">Successful Life</h4>
              <p className="text-slate-500 text-[12px] md:text-sm leading-tight md:leading-relaxed">Empowered with knowledge and values, our students step out to conquer the world.</p>
              <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-white rotate-45 border-b-4 border-r-4 border-emerald-500 z-10"></div>
            </div>
          </div>

          {/* --- The Magic Career Box (Moved inside the world to stay near the last light) --- */}
          <div className="absolute bottom-[10vh] left-[280vw] md:left-[190vw] lg:left-[122vw] w-64 h-[30vh] z-50 hidden lg:flex items-end justify-center pointer-events-none">
            <AnimatePresence>
              {showProfessions && (
                <>
                  {/* The Raining Icons */}
                  {professions.map((prof, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -600, x: prof.x, opacity: 0 }}
                      animate={{
                        y: [-600, 250],
                        x: [prof.x, `calc(${prof.x} + ${i % 2 === 0 ? '40px' : '-40px'})`],
                        opacity: [0, 1, 1, 0]
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 5 + (i % 3),
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2
                      }}
                      className="absolute bottom-10 flex flex-col items-center drop-shadow-md z-20"
                    >
                      <motion.div
                        className="flex flex-col items-center"
                        animate={{ scale: [0.95, 1.05, 0.95] }}
                        transition={{
                          duration: 1.5 + (i % 3) * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3
                        }}
                      >
                        <div className={`bg-[#1A2642] p-3 rounded-full border-[3px] md:border-4 flex items-center justify-center shadow-[0_0_15px_var(--tw-shadow-color)] ${prof.glow}`}>
                          {prof.icon}
                        </div>
                        <span className="mt-2 text-[10px] md:text-xs font-bold bg-[#E2E8F0] px-3 py-1 rounded-full text-slate-800 shadow-sm">
                          {prof.label}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </>
              )}
            </AnimatePresence>
          </div>

        </motion.div>

        {/* --- The Character (Fixed position in viewport, walks on the road) --- */}
        <div className="absolute bottom-[10vh] left-[12.5vw] md:left-[32.5vw] lg:left-[10vw] w-[80vw] md:w-[40vw] lg:w-[26vw] max-w-85 h-[45vh] md:h-120 z-40 flex items-end justify-center pointer-events-none [@media(max-height:800px)]:scale-[0.85] origin-bottom">

          {/* 1. Kid GIF */}
          <motion.img
            src="/source.gif"
            alt="Kid walking"
            className="absolute -bottom-4 object-contain object-bottom w-full h-[85%]"
            style={{ opacity: kidOpacity }}
          />

          {/* 2. Teen GIF */}
          <motion.img
            src="/Teenager.gif"
            alt="Teenager walking"
            className="absolute -bottom-4 object-contain object-bottom w-full h-full"
            style={{ opacity: teenOpacity }}
          />

          {/* 3. Adult GIF */}
          <motion.img
            src="/Successfull.gif"
            alt="Successful adult walking"
            className="absolute -bottom-4 object-contain object-bottom w-full h-[115%]"
            style={{ opacity: adultOpacity }}
          />

          {/* 4. Enjoy GIF */}
          <motion.img
            src="/Enjoy.gif"
            alt="Enjoy"
            className="absolute -bottom-4 object-contain object-bottom w-full h-[115%] scale-[1.35] origin-bottom translate-x-6.25 md:translate-x-3.75 lg:translate-x-5"
            style={{ opacity: enjoyOpacity }}
          />
        </div>

      </div>
    </section>
  );
}
