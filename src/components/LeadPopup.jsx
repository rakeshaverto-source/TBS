"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, PhoneCall, Check, CheckCircle2, ArrowRight, Award, BookOpen, ShieldCheck, Loader2 } from "lucide-react";
import { addSubmission, useContent } from "@/lib/content/store";

const DELAY_MS = 1500; // desktop: opens 1.5 seconds after every visit to the home page
const MOBILE_DELAY_MS = 10000; // phones: 10 seconds (see the note in the component)

const HIGHLIGHTS = [
  { icon: Award, text: "21+ years of legacy" },
  { icon: BookOpen, text: "CBSE affiliated curriculum" },
  { icon: ShieldCheck, text: "Safe, caring campus" },
];

function Field({ icon: Icon, label, prefix, valid, ...rest }) {
  return (
    <label className="relative block group">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400 group-focus-within:text-[#1e3a8a] transition-colors pointer-events-none" />
      <input
        placeholder=" "
        className={`peer w-full rounded-xl border-2 bg-slate-50 pr-10 pt-5 pb-1.5 text-sm leading-5 font-semibold text-slate-900 focus:outline-none focus:bg-white autofill:shadow-[inset_0_0_0_1000px_#f8fafc] autofill:[-webkit-text-fill-color:#0f172a] transition-colors ${
          prefix ? "pl-[4.4rem]" : "pl-11"
        } ${valid ? "border-emerald-300" : "border-slate-100 focus:border-[#1e3a8a]"}`}
        {...rest}
      />
      {/* Sits on the exact text line: 2px border + 20px top padding. Hidden while the field is empty and unfocused. */}
      {prefix && (
        <span className="absolute left-11 top-[22px] text-sm leading-5 font-semibold text-slate-500 pointer-events-none transition-opacity peer-placeholder-shown:opacity-0 peer-focus:opacity-100">
          {prefix}
        </span>
      )}
      <span
        className={`absolute top-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-medium peer-focus:top-1.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:font-bold peer-focus:text-[#1e3a8a] ${
          prefix ? "left-[4.4rem]" : "left-11"
        }`}
      >
        {label}
      </span>
      {valid && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
        </span>
      )}
    </label>
  );
}

export default function LeadPopup() {
  const { grades } = useContent("admissions").tour;
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  // Auto-open every time the home page is opened.
  // On phones it waits longer and is a bottom sheet that leaves the page usable: Google
  // ranks pages lower on mobile when a popup covers the content right after landing.
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    setIsMobile(mobile);
    const timer = setTimeout(() => setOpen(true), mobile ? MOBILE_DELAY_MS : DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Esc closes; on desktop the page behind can't scroll while the popup is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeRef.current();
    const prev = document.body.style.overflow;
    if (!isMobile) document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, isMobile]);

  const digits = phone.replace(/\D/g, "");
  const nameValid = name.trim().length >= 2;
  const phoneValid = digits.length === 10;

  // Closing (X, backdrop or Esc) still saves the lead if a valid mobile number was entered
  function close() {
    setOpen(false);
    if (submitted || !phoneValid) return;
    const label = grades.find((g) => g.value === grade)?.label || grade;
    addSubmission("homeLeads", {
      parentName: name.trim(),
      phoneNumber: digits,
      grade: label,
      source: "Home page popup (closed without submitting)",
      status: "New",
    });
    setSubmitted(true);
  }
  const closeRef = useRef(close);
  closeRef.current = close;

  async function onSubmit(e) {
    e.preventDefault();
    if (!nameValid) return setError("Please enter your name.");
    if (!phoneValid) return setError("Please enter a valid 10-digit mobile number.");
    if (!grade) return setError("Please select a class.");
    setError("");
    setSending(true);
    const label = grades.find((g) => g.value === grade)?.label || grade;
    await addSubmission("homeLeads", { parentName: name.trim(), phoneNumber: digits, grade: label, source: "Home page popup", status: "New" });
    setSending(false);
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          // Mobile: no backdrop and clicks pass through, so the page stays usable behind the sheet
          className="pointer-events-none fixed inset-0 z-[200] flex items-end justify-center md:items-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="pointer-events-auto absolute inset-0 hidden bg-slate-950/70 backdrop-blur-sm md:block" onClick={close} />

          <motion.div
            role="dialog"
            aria-modal={!isMobile}
            aria-labelledby="lead-popup-title"
            initial={isMobile ? { y: "100%" } : { opacity: 0, y: 40, scale: 0.95 }}
            animate={isMobile ? { y: 0 } : { opacity: 1, y: 0, scale: 1 }}
            exit={isMobile ? { y: "100%" } : { opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 240, damping: isMobile ? 30 : 24 }}
            className="pointer-events-auto relative grid w-full max-w-[880px] max-h-[75dvh] md:max-h-[calc(100dvh-1.5rem)] overflow-y-auto md:grid-cols-[1fr_1.1fr] rounded-t-[1.5rem] md:rounded-[1.75rem] bg-white shadow-[0_-12px_40px_rgba(0,0,0,0.25)] md:shadow-2xl md:shadow-black/40"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-20 rounded-full bg-black/25 p-2 text-white backdrop-blur hover:bg-black/40 md:bg-slate-100 md:text-slate-500 md:hover:bg-slate-200 md:hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: photo + message */}
            <div className="relative md:min-h-[540px] overflow-hidden text-white">
              <motion.img
                src="/school-building.webp"
                alt="The Bharat School campus"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1530] via-[#0f1f44]/85 to-[#1e3a8a]/40" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#e1251b]/30 blur-3xl pointer-events-none" />

              <div className="relative flex h-full flex-col justify-end p-5 pr-14 md:p-8">
                <span className="mb-3 hidden md:inline-flex w-fit items-center gap-2 rounded-full bg-[#e1251b] px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow-lg shadow-red-900/40">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  Limited seats
                </span>
                <h2 id="lead-popup-title" className="text-2xl md:text-4xl font-black leading-tight tracking-tight">
                  Admissions Open <span className="text-yellow-400">2027-28</span>
                </h2>
                <p className="mt-1.5 md:mt-3 text-[13px] md:text-[15px] leading-relaxed text-slate-200">
                  Nurturing excellence with holistic education. Limited seats available—Apply Today!
                </p>

                <ul className="mt-6 hidden md:block space-y-2.5">
                  {HIGHLIGHTS.map(({ icon: Icon, text }, i) => (
                    <motion.li
                      key={text}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
                        <Icon className="h-4 w-4 text-yellow-300" />
                      </span>
                      {text}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="flex flex-col justify-center p-5 md:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center py-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100"
                    >
                      <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                    </motion.div>
                    <h3 className="mt-4 text-2xl font-black text-slate-900">Thank you, {name.trim().split(" ")[0]}!</h3>
                    <p className="mt-2 max-w-xs text-sm text-slate-600">
                      Our admissions team will call you on <span className="font-bold text-slate-800">+91 {digits}</span> shortly.
                    </p>
                    <button
                      onClick={close}
                      className="mt-5 rounded-full bg-[#1e3a8a] px-7 py-3 text-sm font-bold text-white hover:bg-blue-800 transition-colors cursor-pointer"
                    >
                      Continue browsing
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" exit={{ opacity: 0 }} onSubmit={onSubmit} noValidate className="space-y-4">
                    <div className="hidden md:block pr-8">
                      <h3 className="text-xl font-black text-slate-900">Request a call back</h3>
                      <p className="mt-1 text-sm text-slate-500">Takes less than 30 seconds.</p>
                    </div>

                    <Field icon={User} label="Parent name *" id="lead-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} valid={nameValid} />
                    <Field
                      icon={Phone}
                      label="Mobile number *"
                      prefix="+91"
                      type="tel"
                      inputMode="numeric"
                      id="lead-phone"
                      name="phone"
                      autoComplete="tel"
                      value={phone}
                      // Autofill may give "+91 98761 55746" or "09876155746" — keep the last 10 digits
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(-10))}
                      valid={phoneValid}
                    />

                    <div>
                      <p className="mb-2 text-[11px] font-black uppercase tracking-wider text-slate-500">Class of interest *</p>
                      <div className="flex flex-wrap gap-2">
                        {grades.map((g) => {
                          const active = grade === g.value;
                          return (
                            <button
                              key={g.value}
                              type="button"
                              onClick={() => setGrade(g.value)}
                              className={`relative rounded-full px-3.5 py-2 text-xs font-bold transition-colors cursor-pointer ${
                                active ? "text-white" : "bg-slate-50 text-slate-600 ring-1 ring-slate-200 hover:ring-slate-400"
                              }`}
                            >
                              {active && (
                                <motion.span
                                  layoutId="lead-grade-pill"
                                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] shadow-md shadow-blue-600/30"
                                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                              )}
                              <span className="relative">{g.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-[#e1251b]"
                        >
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#e1251b] py-4 text-sm font-black tracking-wide text-white shadow-lg shadow-red-600/30 hover:bg-red-500 disabled:opacity-70 transition-colors cursor-pointer"
                    >
                      <motion.span
                        animate={{ x: ["-120%", "220%"] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                        className="absolute inset-y-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                      {sending ? (
                        <>
                          <Loader2 className="relative h-4 w-4 animate-spin" /> <span className="relative">Sending…</span>
                        </>
                      ) : (
                        <>
                          <span className="relative">Apply Now</span>
                          <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </motion.button>

                    <div className="hidden md:flex items-center gap-3 pt-1">
                      <span className="h-px flex-1 bg-slate-200" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">or call us</span>
                      <span className="h-px flex-1 bg-slate-200" />
                    </div>
                    <a
                      href="tel:+919876155746"
                      className="flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 py-3 text-sm font-extrabold text-[#1e3a8a] hover:border-[#1e3a8a] transition-colors"
                    >
                      <PhoneCall className="h-4 w-4" /> +91 98761 55746
                    </a>
                    <p className="hidden md:block text-center text-[11px] text-slate-400">🔒 Your details are safe with us. No spam, ever.</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
