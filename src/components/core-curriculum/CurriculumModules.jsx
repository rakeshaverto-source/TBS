"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  ExternalLink 
} from "lucide-react";

function ExamScheduleTable({ schedule }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-white">
      <div className="px-5 py-4 bg-[#1e3a8a] text-white text-center">
        <p className="text-sm sm:text-base font-extrabold uppercase tracking-wider">{schedule.title}</p>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
            <th className="py-3 px-5 font-bold">Assessment</th>
            <th className="py-3 px-5 font-bold">Month</th>
          </tr>
        </thead>
        {schedule.terms.map((t) => (
          <tbody key={t.term} className="divide-y divide-slate-100">
            <tr className="bg-blue-50/70">
              <td colSpan={2} className="py-2 px-5 text-xs font-extrabold uppercase tracking-wider text-[#1e3a8a]">
                {t.term}
              </td>
            </tr>
            {t.rows.map((r) => (
              <tr key={r.exam}>
                <td className="py-3 px-5 font-semibold text-slate-800">{r.exam}</td>
                <td className="py-3 px-5 text-slate-600 font-medium">{r.month}</td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default function CurriculumModules({ modules }) {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-semibold text-[#1e3a8a] mb-4">
            In-Depth Pedagogy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Curriculum That Prepares For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-blue-600">
              The Real World
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From Playway and Kindergarten at Tinkerbelle to CBSE continuous evaluation and career counseling, discover the key frameworks powering learning at The Bharat School.
          </p>
        </div>

        {/* Alternating Feature Cards */}
        <div className="space-y-16 lg:space-y-24">
          {modules.map((mod, index) => {
            const isEven = index % 2 === 1;

            return (
              <React.Fragment key={mod.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                id={mod.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl shadow-slate-900/5 hover:border-blue-200 transition-all duration-300"
              >
                {/* Content Column */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-[#1e3a8a] mb-4 w-fit">
                    {mod.badge}
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                    {mod.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {mod.description}
                  </p>

                  {/* Bullet points */}
                  {mod.points?.length > 0 && (
                    <div className="space-y-3 mb-8">
                      {mod.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  {!mod.points?.length && <div className="mb-2" />}

                  {/* CTA link */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e3a8a] hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Contact Us</span>
                    </Link>

                    <Link
                      href="/admissions"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1e3a8a] hover:text-blue-700 transition-colors"
                    >
                      <span>Learn about Admissions</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Image Column */}
                <div
                  className={`lg:col-span-5 relative ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {mod.examSchedule ? (
                    <ExamScheduleTable schedule={mod.examSchedule} />
                  ) : (
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md group">
                    <img
                      src={mod.image}
                      alt={mod.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-300 drop-shadow-sm">
                        The Bharat School
                      </p>
                      <p className="text-sm font-bold drop-shadow-md">
                        {mod.title}
                      </p>
                    </div>
                  </div>
                  )}
                </div>
              </motion.div>

              {/* Photo Gallery */}
              {mod.gallery?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
                >
                  {mod.gallery.map((src, gIdx) => (
                    <div
                      key={src}
                      className="group relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100"
                    >
                      <img
                        src={src}
                        alt={`${mod.title} ${gIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ))}
                </motion.div>
              )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
