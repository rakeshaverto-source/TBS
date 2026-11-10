"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  MessageCircle,
  Calendar,
  Heart,
  ShieldCheck,
  Quote,
  Users,
  Award,
  ArrowRight,
  Compass,
  CheckCircle2,
  Clock
} from "lucide-react";
import { useContent } from "@/lib/content/store";
import { getIcon } from "@/lib/icons";

export default function WhyFamiliesStayPage() {
  const { testimonials, trustPillars } = useContent("whyFamilies");
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#0a1226] text-white overflow-hidden">
        {/* Warm Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.18),transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-yellow-400 font-medium">Why Families Stay</span>
          </div>

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-yellow-300 mb-6">
            <Award className="w-3.5 h-3.5 text-yellow-400" />
            Twenty-One Years of Community Trust • Est. 2005
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-5 text-white">
            Why Families Stay
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-serif italic text-amber-200/90 max-w-3xl mx-auto mb-4 font-normal">
            Twenty-one years of families who chose to stay.
          </p>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Real quotes, published only with parent consent.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions#book-tour"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/30 transition-all hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Campus Tour</span>
            </Link>
            <a
              href="https://wa.me/919876155746?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20parent%20experiences%20at%20The%20Bharat%20School."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Retaining Trust Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-14 pt-8 border-t border-white/10 text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black text-yellow-400 mb-0.5 font-mono">21+ Years</div>
              <div className="text-xs font-bold text-white mb-0.5">Generational Stability</div>
              <div className="text-[11px] text-slate-300">Educating children across Tricity since 2005</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black text-emerald-400 mb-0.5 font-mono">94%</div>
              <div className="text-xs font-bold text-white mb-0.5">Sibling Continuity</div>
              <div className="text-[11px] text-slate-300">When elder sibling enrols, younger siblings follow</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black text-blue-400 mb-0.5 font-mono">100%</div>
              <div className="text-xs font-bold text-white mb-0.5">Direct Consent</div>
              <div className="text-[11px] text-slate-300">Never anonymous, never fabricated</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REAL QUOTES & TESTIMONIALS ================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-2">
              Parent Voices
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
              Real stories from everyday school life.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We do not solicit marketing testimonials or sponsor reviews. Every story reflects families who entrusted us with their children across years and developmental stages.
            </p>
          </div>

          {/* 3 Distinct Parent Testimonial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className={`rounded-3xl p-8 border-2 ${item.accentBorder} ${item.accentBg} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group`}
              >
                <div>
                  {/* Top Bar: Campus & Stage Tag */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span
                      className={`text-xs font-extrabold px-3 py-1 rounded-full border ${item.badgeBg}`}
                    >
                      {item.role}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200/80">
                      {item.yearsWithTBS}
                    </span>
                  </div>

                  {/* Large Quote Icon */}
                  <Quote className="w-10 h-10 text-slate-300/80 mb-4 group-hover:text-[#1e3a8a]/40 transition-colors" />

                  {/* Quote Body */}
                  <p className="text-base text-slate-800 leading-relaxed font-medium mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Footer of Card: Attribution & Consent Status */}
                <div className="pt-6 border-t border-slate-200/80 space-y-3">
                  <div>
                    <div className="text-sm font-black text-slate-900">
                      {item.parentName}
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      {item.stage}
                    </div>
                  </div>

                  {/* Pending Confirmation Badge (as specified in copy) */}
                  <div className="p-2.5 rounded-xl bg-white/80 border border-slate-200/70 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      {item.status}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-slate-400">
                      TBS Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Note regarding consent */}
          <div className="mt-12 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-600 font-bold text-xs">
                i
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                <strong>Parent Privacy & Dignity Policy:</strong> Parent quotes and identities are published strictly with signed consent. If you are an active TBS parent wishing to share your journey, please reach out to the admissions office.
              </p>
            </div>
            <a
              href="mailto:contact@thebharatschool.com?subject=Parent%20Story%20Contribution"
              className="text-xs font-bold text-[#1e3a8a] hover:underline whitespace-nowrap"
            >
              Submit Your Story &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ================= THE COMMUNITY PILLARS ================= */}
      <section className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-2">
              Why TBS Feels Different
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Built for depth, not commercial scale.
            </h2>
            <p className="text-base text-slate-600">
              When schools expand too fast, children become enrollment statistics. We preserve small class ratios, teacher continuity, and accessible leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, idx) => {
              const Icon = getIcon(pillar.icon);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 text-[#1e3a8a] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= COME SEE THE CLASSROOM BEFORE YOU DECIDE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a1226] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-semibold border border-white/15">
                  <Compass className="w-3.5 h-3.5" />
                  Open Door Welcome
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Come see the classroom before you decide.
                </h2>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  Words on a website can only say so much. Walk into our classrooms while school is in session, observe how children converse with teachers, and make your decision with complete confidence.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/admissions#book-tour"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/30 transition-all hover:-translate-y-0.5"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a Tour</span>
                  </Link>
                  <a
                    href="https://wa.me/919876155746?text=Hi%2C%20I%20would%20like%20to%20visit%20The%20Bharat%20School%20to%20see%20classrooms%20in%20session."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Right Visual Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-75 sm:h-90 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <Image
                    src="/Primary classroom.webp"
                    alt="Classroom Atmosphere The Bharat School"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">
                        In-Person Discovery
                      </div>
                      <div className="text-sm font-semibold text-slate-100">
                        Classrooms with genuine warmth, individual desk attention, and room to grow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
