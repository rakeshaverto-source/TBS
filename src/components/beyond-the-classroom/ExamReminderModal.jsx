"use client";
import React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function ExamReminderModal({
  isOpen,
  onClose,
  exam,
  email,
  setEmail,
  onSubmit,
  isSuccess
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full text-slate-900 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1e3a8a] border border-blue-100 flex items-center justify-center font-bold">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Olympiad Alert Registration
            </h3>
            <p className="text-xs text-slate-500">
              {exam?.name || "Olympiad Calendar"}
            </p>
          </div>
        </div>

        {isSuccess ? (
          <div className="py-6 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-900">Alert Registered!</h4>
            <p className="text-xs text-slate-600">
              We have noted your interest. You will receive dates, syllabus breakdowns, and registration deadlines directly.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <div className="font-semibold text-slate-900 mb-1">
                Exam Window: {exam?.windowDates}
              </div>
              <div>Classes: {exam?.classes}</div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Parent Email or Phone for Alerts
              </label>
              <input
                type="text"
                required
                placeholder="parent@example.com / 9876543210"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1e3a8a] focus:ring-1 focus:ring-[#1e3a8a]"
              />
            </div>

            <p className="text-[11px] text-slate-500 leading-normal">
              TBS coordinates registration fees, hall passes, and practice worksheets through the academic coordinator.
            </p>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
            >
              Send Me Dates & Syllabus Notice
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
