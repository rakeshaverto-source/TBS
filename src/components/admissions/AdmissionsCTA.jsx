"use client";

import { motion } from "framer-motion";
import { Compass, Calendar, MessageCircle } from "lucide-react";

export default function AdmissionsCTA() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-[#e1251b] via-[#c81e1e] to-[#7f1d1d] text-white rounded-[2rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-red-900/30"
        >
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "24px 24px" }}
          />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-400/30 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-yellow-300 text-xs font-semibold border border-white/20">
                <Compass className="w-3.5 h-3.5" />
                Campus Openness
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">Come see the classroom before you decide.</h2>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
                A school cannot be evaluated on paper alone. Experience our bright classrooms, observe the warmth of our teachers, and see how children learn here.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#book-tour"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white text-[#c81e1e] hover:bg-yellow-300 hover:text-slate-900 shadow-xl transition-all hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Tour</span>
                </a>
                <a
                  href="https://wa.me/919876155746?text=Hi%2C%20I%20want%20to%20visit%20The%20Bharat%20School%20to%20see%20classrooms%20for%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-yellow-300/80" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="/Primary classroom.webp" alt="Classroom Atmosphere" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">Real Photos • Real Classrooms</div>
                    <div className="text-sm font-semibold text-slate-100">Air-conditioned comfort, smart pedagogy, and genuine attention for every student.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
