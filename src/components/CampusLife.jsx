"use client";

import { motion } from "framer-motion";

export default function CampusLife() {
  return (
    <section className="relative pt-12 pb-16 md:py-20 bg-slate-50 text-slate-900 overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-8 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-3"
          >
            <span className="w-16 h-1 bg-[#ef4444] rounded-full"></span>
            <span className="text-[#1e3a8a] font-bold tracking-[0.2em] uppercase text-sm">Campus Life</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#1e3a8a] mb-4 tracking-tight"
          >
            An ordinary Tuesday — <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-red-400">not a brochure version.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl"
          >
            Smart classrooms, AC comfort, GPS-tracked transport, and a campus where every teacher knows every name.
          </motion.p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* Large Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-6 h-[250px] md:h-[350px] lg:h-[480px] rounded-3xl relative overflow-hidden group shadow-lg"
          >
            {/* Actual Image Background */}
            <img 
              src="/Primary classroom.webp" 
              alt="Primary Classroom" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70 transition-colors duration-300"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight drop-shadow-md">
                Inside a classroom
              </h3>
            </div>
            
          </motion.div>

          {/* 4 Small Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6 h-[250px] md:h-[350px] lg:h-[480px]">
            
            {/* Image 1: Smart Classroom */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl relative overflow-hidden group shadow-lg"
            >
              {/* Actual Image Background */}
              <img 
                src="/Smart classroom.png" 
                alt="Smart Classroom" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-md">
                  Smart Class, Smart Us
                </h3>
              </div>
            </motion.div>

            {/* Image 2: Cultural Day */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-3xl relative overflow-hidden group shadow-lg"
            >
              {/* Blurred fill so the full (zoomed-out) photo has no empty bars */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-125 blur-xl"
                style={{ backgroundImage: "url('/assembly-cultural-day.webp')" }}
                aria-hidden="true"
              />
              <img
                src="/assembly-cultural-day.webp"
                alt="Three students with their books"
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-md">
                  Books &amp; Beyond
                </h3>
              </div>
            </motion.div>

            {/* Image 3: Sports */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="rounded-3xl relative overflow-hidden group shadow-lg"
            >
              {/* Actual Image Background */}
              <img 
                src="/sports-ground-activity.webp" 
                alt="Sports ground activity" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-md">
                  Fitness Check
                </h3>
              </div>
            </motion.div>

            {/* Image 4: Transport */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="rounded-3xl relative overflow-hidden group shadow-lg"
            >
              {/* Actual Image Background */}
              <img 
                src="/Transport.png" 
                alt="Transport / GPS bus" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent group-hover:from-black/70 transition-colors duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-md">
                  School Transport
                </h3>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
