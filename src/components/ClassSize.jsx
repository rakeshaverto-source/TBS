"use client";

import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";

export default function ClassSize() {
  return (
    <section className="relative py-24 bg-[#0a0f1c] text-white overflow-hidden flex items-center justify-center min-h-[80vh]">
      
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] bg-[#ef4444]/10 rounded-full blur-[120px] mix-blend-screen"></div>
        
        {/* Animated Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          
          {/* Left Side: The Visual Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-full max-w-lg lg:w-1/2 flex flex-col items-center justify-center gap-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 w-max shadow-lg self-start md:self-center z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-blue-300 font-bold tracking-widest text-xs sm:text-sm uppercase">Why Small Is The Point</span>
            </div>
            {/* Massive 1:30 Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[22rem] font-black text-white/[0.02] select-none tracking-tighter">
              1:30
            </div>

            {/* Glassmorphism Ratio Card */}
            <div className="relative z-10 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col items-center gap-10 w-full hover:border-white/20 transition-colors duration-500">
              
              <div className="flex items-center justify-center gap-6 sm:gap-10 w-full">
                {/* Teacher Side */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#ef4444] blur-xl opacity-50 rounded-full animate-pulse"></div>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#ef4444] to-orange-500 p-[2px] flex items-center justify-center">
                      <div className="w-full h-full bg-[#0a0f1c] rounded-full flex items-center justify-center">
                        <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" />
                      </div>
                    </div>
                  </div>
                  <span className="text-xl font-black text-white tracking-wide">1 Mentor</span>
                </motion.div>

                {/* Divider */}
                <div className="h-24 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                {/* Students Side */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="grid grid-cols-6 gap-[6px] sm:gap-2 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                    {[...Array(30)].map((_, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (i * 0.02) }}
                        className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                      />
                    ))}
                  </div>
                  <span className="text-xl font-black text-blue-200 tracking-wide">30 Students</span>
                </motion.div>
              </div>

              <div className="text-center">
                 <h3 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/60 drop-shadow-xl">
                    1:30
                 </h3>
                 <p className="mt-2 text-sm font-bold tracking-[0.2em] uppercase text-blue-300/80">The Perfect Balance</p>
              </div>

            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex flex-col space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
              A ratio we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-orange-500">protect</span>, <br />
              not a capacity <br className="hidden lg:block"/> we fill.
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400/90 leading-relaxed font-medium">
              Right now, these classes have real seats left for this session. It's not a marketing line, simply the number we commit to.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <button className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-gray-900 rounded-full font-black text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <span className="relative z-10 flex items-center gap-3">
                  Check Availability
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
