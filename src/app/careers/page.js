"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Heart,
  MessageCircle,
  Mail,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Clock,
  Building2,
  Send,
  Phone,
  ArrowUpRight
} from "lucide-react";
import { useContent, addSubmission } from "@/lib/content/store";

export default function CareersPage() {
  const { openings } = useContent("careers");
  const [selectedRoleForModal, setSelectedRoleForModal] = useState(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantNote, setApplicantNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (role) => {
    setSelectedRoleForModal(role);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubmission("jobApplications", { role: selectedRoleForModal?.title || "", name: applicantName, email: applicantEmail, phone: applicantPhone, note: applicantNote, status: "New" });
    setSubmitted(true);
    setTimeout(() => {
      setSelectedRoleForModal(null);
      setSubmitted(false);
      setApplicantName("");
      setApplicantEmail("");
      setApplicantPhone("");
      setApplicantNote("");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
      {/* ================= HERO SECTION (WARM, EDITORIAL, PRESTIGIOUS) ================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0a1226] text-white overflow-hidden">
        {/* Subtle Warm Amber & Blue Ambient Radiance */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.18),transparent_70%)] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-yellow-400 font-medium">Careers</span>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-yellow-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Academic & Administrative Recruitment 2027–28
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-white">
            Teach the way you <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-300 to-amber-400 font-serif italic">
              always wanted to.
            </span>
          </h1>

          {/* Hiring Philosophy Manifesto Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md max-w-3xl mx-auto mb-10 shadow-2xl">
            <p className="text-lg sm:text-2xl font-serif italic text-slate-100 leading-relaxed">
              &ldquo;We hire for two things that can&apos;t always be trained:{" "}
              <span className="text-yellow-300 font-bold not-italic font-sans">
                real command of your subject
              </span>
              , and{" "}
              <span className="text-yellow-300 font-bold not-italic font-sans">
                genuine warmth with children
              </span>
              .&rdquo;
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-500 text-white shadow-xl shadow-red-600/30 transition-all hover:-translate-y-0.5"
            >
              <span>View Current Openings</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919876155746?text=Hi%2C%20I%20am%20interested%20in%20career%20opportunities%20at%20The%20Bharat%20School"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              <Building2 className="w-4 h-4 text-yellow-400" />
              <span>Book a Classroom Walk</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= 3 PILLARS OF TEACHER LIFE AT TBS ================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1e3a8a] flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Pedagogical Freedom
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No rigid bureaucratic boxes. We give educators the autonomy to make ideas come alive and teach for deep conceptual understanding.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Small Class Sizes
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our student-teacher ratio ensures you know every single child by name, learning style, and personal curiosity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Supportive Culture
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Air-conditioned smart classrooms, respectful academic leadership, and a warm family-like staff culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CURRENT OPENINGS ================= */}
      <section id="openings" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 block mb-2">
              Active Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Current Openings
            </h2>
            <p className="text-lg font-bold text-[#1e3a8a]">
              If you have both, we have room for you.
            </p>
          </div>

          {/* Job Openings Stack */}
          <div className="space-y-6 mb-12">
            {openings.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${role.badgeColor}`}>
                        {role.department}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {role.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#1e3a8a] transition-colors">
                      {role.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{role.location}</span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => handleApply(role)}
                      className="px-6 py-3 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-blue-900/15 flex items-center gap-2 hover:-translate-y-0.5"
                    >
                      <span>Apply for this Role</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-6 space-y-3">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {role.summary}
                    </p>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                      <strong className="text-slate-900 block mb-1">Ideal Candidate:</strong>
                      {role.idealFor}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {role.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Teaching Faculty Open Application Banner */}
          <div className="bg-linear-to-r from-[#0e1c45] to-[#1e3a8a] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-300 font-bold">
                Teaching Faculty Pool
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Educators from Pre-Primary to Grade 12
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Even if your exact subject isn&apos;t listed above, if you have real command of your discipline and genuine warmth with children, we want to hear from you.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap gap-3">
              <a
                href="mailto:careers@thebharatschool.com?subject=Faculty%20Application%20-%20The%20Bharat%20School"
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-yellow-400 hover:bg-yellow-300 text-slate-950 transition-colors shadow-md"
              >
                Send Resume Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESUME SUBMISSION CALLOUT ================= */}
      <section className="py-16 bg-white border-y border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Send your resume to:
          </h3>
          <div className="my-4">
            <a
              href="mailto:careers@thebharatschool.com"
              className="inline-block text-xl sm:text-3xl font-mono font-black text-[#1e3a8a] hover:text-red-600 transition-colors underline decoration-blue-200 underline-offset-8"
            >
              careers@thebharatschool.com
            </a>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            Attach your updated CV and include the position you are applying for in the subject line.
          </p>
        </div>
      </section>

      {/* ================= MODAL: QUICK APPLICATION ================= */}
      {selectedRoleForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-slate-800 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setSelectedRoleForModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Apply for Position
                </h3>
                <p className="text-xs font-semibold text-[#1e3a8a]">
                  {selectedRoleForModal.title}
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Application Received!</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Thank you, {applicantName}. Our recruitment team will review your application and connect with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Brief Note or LinkedIn / Portfolio Link
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your experience and subject expertise..."
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-[11px] text-slate-600 flex items-start gap-2">
                  <Mail className="w-4 h-4 text-[#1e3a8a] shrink-0 mt-0.5" />
                  <span>
                    You can also email your CV directly to{" "}
                    <strong className="text-slate-900">careers@thebharatschool.com</strong>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold text-sm shadow-md transition-all"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
