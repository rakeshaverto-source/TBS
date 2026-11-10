"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function CurriculumCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a8a] via-blue-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-yellow-300 mb-6">
              Admissions Open for Session 2026–27
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight">
              Begin Your Child&apos;s Journey of Academic Excellence
            </h2>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed mb-8">
              Experience the distinctive CBSE pedagogy, innovative laboratories, and inspiring faculty at The Bharat School. Schedule a campus visit or contact our academic counselors today.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold shadow-lg shadow-yellow-400/20 transition-all duration-200 cursor-pointer"
              >
                <span>Enroll Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 backdrop-blur-sm transition-all duration-200"
              >
                <span>Book Campus Tour</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15">
            <h3 className="text-lg font-bold text-white mb-4">Contact The Bharat School</h3>
            
            <div className="space-y-4 text-sm text-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-blue-200">Admissions Helpline</p>
                  <a href="tel:+919876155746" className="font-bold text-white hover:text-yellow-300 transition-colors">
                    +91 9876155746
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-blue-200">Email Address</p>
                  <a href="mailto:contact@thebharatschool.com" className="font-bold text-white hover:text-yellow-300 transition-colors">
                    contact@thebharatschool.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-blue-200">Campus Location</p>
                  <p className="font-bold text-white">Panchkula, Haryana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
