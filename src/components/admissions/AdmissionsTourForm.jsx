"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Check,
  User,
  Phone,
  PhoneCall,
  Building2,
  Sparkles,
  CalendarClock,
  MessageCircle,
  Sun,
  Sunset,
  CalendarDays,
  ArrowRight,
  School,
  Users,
  Eye,
} from "lucide-react";
import { useContent } from "@/lib/content/store";
import { getIcon } from "@/lib/icons";

function SectionLabel({ number, children, done }) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <span
        className={`w-6 h-6 rounded-full text-[11px] font-black flex items-center justify-center transition-colors duration-300 ${
          done ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-500"
        }`}
      >
        {done ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : number}
      </span>
      <span className="text-xs font-black uppercase tracking-wider text-slate-600">{children}</span>
    </div>
  );
}

function FloatingInput({ icon: Icon, label, value, onChange, type = "text", prefix, valid, ...rest }) {
  return (
    <div className="relative group">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#1e3a8a] transition-colors pointer-events-none" />
      {prefix && <span className="absolute left-11 top-[1.85rem] text-sm font-bold text-slate-500 pointer-events-none">{prefix}</span>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`peer w-full bg-slate-50 border-2 rounded-2xl pr-11 pt-6 pb-2 text-sm font-semibold text-slate-900 focus:outline-none focus:bg-white transition-colors ${
          prefix ? "pl-[4.6rem]" : "pl-12"
        } ${valid ? "border-emerald-200" : "border-slate-100 focus:border-[#1e3a8a]"}`}
        {...rest}
      />
      <label
        className={`absolute top-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 pointer-events-none transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:font-bold peer-focus:text-[#1e3a8a] ${
          prefix ? "left-[4.6rem] peer-placeholder-shown:left-[4.6rem]" : "left-12"
        }`}
      >
        {label}
      </label>
      <AnimatePresence>
        {valid && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
          >
            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function SuccessBurst() {
  const dots = Array.from({ length: 12 });
  const colors = ["#e1251b", "#1e3a8a", "#f59e0b", "#10b981"];
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {dots.map((_, i) => {
        const angle = (i / dots.length) * Math.PI * 2;
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{ x: Math.cos(angle) * 90, y: Math.sin(angle) * 90, opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="absolute w-3 h-3 rounded-full"
            style={{ backgroundColor: colors[i % colors.length] }}
          />
        );
      })}
    </div>
  );
}

export default function AdmissionsTourForm({
  parentName,
  setParentName,
  phoneNumber,
  setPhoneNumber,
  selectedCampus,
  setSelectedCampus,
  selectedGrade,
  setSelectedGrade,
  preferredDay,
  setPreferredDay,
  tourSubmitted,
  setTourSubmitted,
  handleTourSubmit,
}) {
  const { campuses: CAMPUSES, grades: GRADES, slots: SLOTS, highlights: TOUR_HIGHLIGHTS } = useContent("admissions").tour;
  const nameValid = parentName.trim().length >= 2;
  const phoneValid = phoneNumber.replace(/\D/g, "").length === 10;
  const filled = [nameValid, phoneValid, !!selectedCampus, !!selectedGrade, !!preferredDay].filter(Boolean).length;
  const percent = Math.round((filled / 5) * 100);

  const campus = CAMPUSES.find((c) => c.value === selectedCampus);
  const grade = GRADES.find((g) => g.value === selectedGrade);
  const slot = SLOTS.find((s) => s.value === preferredDay);

  return (
    <section id="book-tour" className="relative py-20 sm:py-28 bg-slate-50 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#e1251b]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#1e3a8a]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/15 ring-1 ring-slate-200 bg-white"
        >
          {/* Left: Info Panel */}
          <div className="lg:col-span-5 relative bg-gradient-to-br from-[#0a1530] via-[#0f1f44] to-[#1e3a8a] text-white p-8 sm:p-10 overflow-hidden">
            <motion.div
              animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#e1251b]/25 blur-3xl pointer-events-none"
            />
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "24px 24px" }}
            />

            <div className="relative">
              <h2 className="text-yellow-400 font-bold tracking-[0.25em] uppercase text-xs mb-3">Visit The Campus</h2>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Book a Campus Tour</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                This is where the decision actually gets made. Walk the classrooms before you commit.
              </p>

              {/* Polaroid */}
              <div className="relative mx-auto max-w-xs mb-10">
                <motion.div
                  animate={{ rotate: [-3, -1, -3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-white p-2.5 pb-10 rounded-md shadow-2xl shadow-black/50"
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/80 rotate-[-4deg]" />
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <img src="/Primary classroom.webp" alt="Classroom at The Bharat School" className="w-full h-full object-cover" />
                  </div>
                  <p className="absolute bottom-2.5 left-0 right-0 text-center font-serif italic text-slate-700">See you on campus!</p>
                </motion.div>
              </div>

              <div className="space-y-3 mb-8">
                {TOUR_HIGHLIGHTS.map((h, i) => {
                  const Icon = getIcon(h.icon);
                  return (
                    <motion.div
                      key={h.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.12 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-yellow-300" />
                      </span>
                      <span className="text-sm font-semibold text-slate-100">{h.text}</span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2 text-xs font-bold text-yellow-300 uppercase tracking-wider mb-3">
                  <CalendarClock className="w-4 h-4" />
                  Quick response time on every working day
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Admissions Helpline</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                  <a href="tel:+919876155746" className="inline-flex items-center gap-1.5 text-base font-extrabold hover:text-yellow-300 transition-colors">
                    <PhoneCall className="w-4 h-4" />
                    +91 9876155746
                  </a>
                  <a href="tel:01722565400" className="inline-flex items-center gap-1.5 text-base font-extrabold hover:text-yellow-300 transition-colors">
                    <PhoneCall className="w-4 h-4" />
                    0172-256-5400
                  </a>
                </div>
                <a
                  href="https://wa.me/919876155746?text=Hi%2C%20I%20want%20to%20schedule%20a%20campus%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs shadow hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait">
              {tourSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[480px] flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="relative">
                    <SuccessBurst />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                      className="relative w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Tour Request Received!</h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md">
                    Thank you, {parentName}. Our admissions officer will contact you on {phoneNumber} shortly to confirm your preferred time slot.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 pt-1">
                    {[campus?.label, grade?.label, slot?.label].filter(Boolean).map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setTourSubmitted(false)}
                    className="mt-3 px-6 py-3 rounded-full bg-[#1e3a8a] hover:bg-blue-800 text-white text-sm font-bold cursor-pointer transition-colors"
                  >
                    Book Another Tour
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleTourSubmit} className="space-y-7">
                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-black text-slate-900">Your tour request</span>
                      <span className="text-xs font-bold text-slate-500">{percent}% complete</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#1e3a8a] via-[#e1251b] to-amber-400"
                        animate={{ width: `${percent}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* 1. Details */}
                  <div>
                    <SectionLabel number={1} done={nameValid && phoneValid}>
                      Your details
                    </SectionLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FloatingInput icon={User} label="Parent Name *" value={parentName} onChange={(e) => setParentName(e.target.value)} valid={nameValid} required />
                      <FloatingInput
                        icon={Phone}
                        label="Phone Number *"
                        type="tel"
                        prefix="+91"
                        inputMode="numeric"
                        maxLength={11}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/[^\d ]/g, ""))}
                        valid={phoneValid}
                        required
                      />
                    </div>
                  </div>

                  {/* 2. Campus */}
                  <div>
                    <SectionLabel number={2} done={!!selectedCampus}>
                      Campus *
                    </SectionLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CAMPUSES.map((c) => {
                        const Icon = getIcon(c.icon);
                        const active = selectedCampus === c.value;
                        return (
                          <motion.button
                            key={c.value}
                            type="button"
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelectedCampus(c.value)}
                            className={`relative flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-colors cursor-pointer ${
                              active ? "border-[#1e3a8a] bg-blue-50" : "border-slate-100 bg-slate-50 hover:border-slate-300"
                            }`}
                          >
                            <span
                              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                active ? "bg-[#1e3a8a] text-white" : "bg-white text-slate-400"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </span>
                            <span>
                              <span className={`block text-sm font-black ${active ? "text-[#1e3a8a]" : "text-slate-800"}`}>{c.label}</span>
                              <span className="block text-xs text-slate-500">{c.sub}</span>
                            </span>
                            {active && (
                              <motion.span
                                layoutId="campus-check"
                                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1e3a8a] flex items-center justify-center shadow-md"
                              >
                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                              </motion.span>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Grade */}
                  <div>
                    <SectionLabel number={3} done={!!selectedGrade}>
                      Grade of Interest *
                    </SectionLabel>
                    <div className="flex flex-wrap gap-2.5">
                      {GRADES.map((g) => {
                        const active = selectedGrade === g.value;
                        return (
                          <motion.button
                            key={g.value}
                            type="button"
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedGrade(g.value)}
                            className={`relative px-4 py-2.5 rounded-full text-sm font-bold transition-colors cursor-pointer ${
                              active ? "text-white" : "bg-slate-50 text-slate-600 ring-1 ring-slate-200 hover:ring-slate-300"
                            }`}
                          >
                            {active && (
                              <motion.span
                                layoutId="grade-pill"
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] shadow-md shadow-blue-600/30"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                              />
                            )}
                            <span className="relative">{g.label}</span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 4. Slot */}
                  <div>
                    <SectionLabel number={4} done={!!preferredDay}>
                      Preferred Visit Slot
                    </SectionLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {SLOTS.map((s) => {
                        const Icon = getIcon(s.icon);
                        const active = preferredDay === s.value;
                        return (
                          <motion.button
                            key={s.value}
                            type="button"
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setPreferredDay(s.value)}
                            className={`relative flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 p-4 rounded-2xl border-2 text-left transition-colors cursor-pointer ${
                              active ? "border-[#e1251b] bg-red-50" : "border-slate-100 bg-slate-50 hover:border-slate-300"
                            }`}
                          >
                            <span
                              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                active ? "bg-[#e1251b] text-white" : "bg-white text-slate-400"
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </span>
                            <span>
                              <span className={`block text-sm font-black ${active ? "text-[#e1251b]" : "text-slate-800"}`}>{s.label}</span>
                              <span className="block text-xs text-slate-500 mt-0.5">{s.time}</span>
                            </span>
                            {active && (
                              <motion.span
                                layoutId="slot-check"
                                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#e1251b] flex items-center justify-center shadow-md"
                              >
                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                              </motion.span>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Summary + Submit */}
                  <div className="pt-2 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-bold text-slate-700">You&apos;re booking:</span>
                      {[campus?.label, grade?.label, slot?.label].filter(Boolean).map((t) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="px-2.5 py-1 rounded-full bg-slate-100 font-semibold text-slate-600"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full py-4 rounded-full bg-[#e1251b] hover:bg-red-500 text-white font-black text-sm tracking-wide shadow-lg shadow-red-600/30 overflow-hidden cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <motion.span
                        animate={{ x: ["-120%", "220%"] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      />
                      <span className="relative">Request a Tour</span>
                      <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
