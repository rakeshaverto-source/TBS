"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, ArrowRight, MessageCircle, Clock, ShieldCheck, Percent, Star } from "lucide-react";

const ASSURANCES = [
  { icon: Clock, title: "Quick Response Time", text: "Prompt callback on any working day", color: "text-yellow-300" },
  { icon: ShieldCheck, title: "7-Day Offer Hold", text: "Zero pressure seat reservation", color: "text-white" },
  { icon: Percent, title: "Transparent Fee Policy", text: "Clear, upfront fee structure", color: "text-emerald-300" },
];

export default function AdmissionsHero() {
  return (
    <section className="relative pt-32 pb-28 md:pt-40 md:pb-36 bg-[#070e20] text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-25 scale-110 blur-sm" style={{ backgroundImage: "url('/campus-hero.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#070e20]/95 via-[#0a1530]/85 to-[#1e3a8a]/70" />

      {/* Animated Blobs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#e1251b]/25 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-amber-400/15 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-yellow-400 font-semibold">Admissions</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-yellow-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Admissions Open • Academic Session 2027–28
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-6">
            A clear process.
            <br />
            A real number.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 font-serif italic">
              No surprises.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-xl mb-10 leading-relaxed">
            Everything from your first enquiry to orientation day, laid out plainly with transparent timelines and zero hidden fees.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#book-tour"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#e1251b] hover:bg-red-500 text-white shadow-xl shadow-red-600/30 transition-all hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Campus Tour</span>
            </a>
            <a
              href="#fees"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              <span>View Transparent Fees</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/919876155746?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Admissions%202027-28%20at%20The%20Bharat%20School."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Assurance Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-10 pt-8 border-t border-white/10">
            {ASSURANCES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </span>
                  <div>
                    <div className={`text-xs sm:text-sm font-bold ${item.color}`}>{item.title}</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">{item.text}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Photo + Assurance Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rotate-2 rounded-[2rem] overflow-hidden border-4 border-white/90 shadow-2xl shadow-black/50 aspect-[4/5] max-w-sm mx-auto">
            <img src="/admissions/hero.webp" alt="Students at The Bharat School" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="hidden lg:flex absolute -top-6 right-6 w-16 h-16 rounded-full bg-[#e1251b] items-center justify-center shadow-xl shadow-red-600/40"
          >
            <Star className="w-7 h-7 text-yellow-300 fill-yellow-300" />
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Divider */}
      <svg className="absolute bottom-0 left-0 w-full h-16 sm:h-24 text-white" viewBox="0 0 1440 100" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,60 C240,110 480,10 720,50 C960,90 1200,20 1440,60 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}
