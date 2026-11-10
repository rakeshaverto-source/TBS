"use client";

import { motion } from "framer-motion";
import { useContent } from "@/lib/content/store";

export default function ResultsRecognition() {
  const results = useContent("home").results;
  return (
    <section className="relative py-12 md:py-16 bg-white text-slate-900 overflow-hidden">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-3"
          >
            <span className="w-12 h-1 bg-[#ef4444] rounded-full"></span>
            <span className="text-[#1e3a8a] font-bold tracking-[0.2em] uppercase text-sm">Results & Recognition</span>
            <span className="w-12 h-1 bg-[#ef4444] rounded-full"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#1e3a8a] mb-4 tracking-tight"
          >
            Twenty-one years of proof, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-red-400">not a promise.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            A school this size doesn’t need to speak in generalities — here is what the attention actually produces.
          </motion.p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                result.highlight 
                  ? "bg-[#1e3a8a] border-[#1e3a8a] text-white shadow-lg shadow-blue-900/20" 
                  : "bg-white border-slate-200 hover:border-blue-200"
              }`}
            >
              <div className="flex items-start gap-5">
                {/* Icon Badge */}
                <div className={`flex items-center justify-center w-14 h-14 rounded-2xl font-black text-2xl shrink-0 ${
                  result.highlight 
                    ? "bg-white/10 text-white backdrop-blur-sm" 
                    : "bg-blue-50 text-[#ef4444]"
                }`}>
                  {result.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className={`text-xl font-bold mb-3 leading-tight ${result.highlight ? "text-white" : "text-[#1e3a8a]"}`}>
                    {result.title}
                  </h3>
                  <p className={`font-medium leading-relaxed text-sm md:text-base ${result.highlight ? "text-white/80" : "text-slate-600"}`}>
                    {result.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
