"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { CheckCircle2, Percent, ArrowRight } from "lucide-react";
import { useContent } from "@/lib/content/store";
import { getIcon } from "@/lib/icons";

function CountUp({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v / 50) * 50),
    });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>₹{display.toLocaleString("en-IN")}</span>;
}

export default function AdmissionsFees() {
  const { plans: PLANS, concessions: CONCESSIONS } = useContent("admissions").fees;
  return (
    <section id="fees" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="absolute top-32 -left-24 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-24 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#e1251b] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 flex items-center gap-4">
              <span className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-[#e1251b]"></span>
              Transparent Tuition
            </h2>
            <h3 className="text-5xl sm:text-7xl font-black text-[#1e3a8a] tracking-tight mb-4">Fees</h3>
            <p className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              A clear number,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">held for everyone.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute left-0 bottom-1 w-full h-3 sm:h-4 bg-yellow-300/70 origin-left -z-0 rounded"
                />
              </span>
            </p>
          </motion.div>
        </div>

        {/* Plan Cards */}
        <div className={`grid grid-cols-1 gap-8 mb-12 ${PLANS.length > 1 ? "md:grid-cols-2" : "max-w-xl mx-auto"}`}>
          {PLANS.map((plan, i) => {
            const Icon = getIcon(plan.icon);
            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group flex flex-col rounded-[2rem] bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${plan.glow}`}
              >
                <div className={`relative bg-gradient-to-br ${plan.header} text-white p-7 sm:p-8 overflow-hidden`}>
                  <motion.div
                    animate={{ rotate: [0, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-6 -bottom-8"
                  >
                    <Icon className="w-40 h-40 text-white/10" />
                  </motion.div>
                  <div className="relative flex items-center justify-between mb-5">
                    <span className="text-[11px] font-black uppercase tracking-wider bg-white/20 backdrop-blur px-3 py-1 rounded-full">{plan.badge}</span>
                    <span className="text-xs font-semibold text-white/80">{plan.campus}</span>
                  </div>
                  <h4 className="relative text-2xl sm:text-3xl font-black mb-2">{plan.title}</h4>
                  {plan.text && <p className="relative text-sm text-white/85 max-w-sm">{plan.text}</p>}

                  <div className="relative mt-6 pt-5 border-t border-white/20 flex items-end justify-between gap-4">
                    <div>
                      <span className="text-xs text-white/75 block mb-1">{plan.price.label}</span>
                      <span className="text-2xl sm:text-3xl font-black tracking-tight tabular-nums">
                        <CountUp value={plan.price.amount} />
                      </span>
                      <span className="text-sm text-white/80"> {plan.price.suffix || "/ month"}</span>
                    </div>
                    {plan.price.tag && <span className="text-xs font-bold bg-white text-slate-900 px-3 py-1 rounded-full shrink-0">{plan.price.tag}</span>}
                  </div>
                </div>

                <div className="flex-1 p-7 sm:p-8 space-y-3">
                  {plan.rows.map((row, r) => {
                    const RowIcon = row.icon ? getIcon(row.icon) : CheckCircle2;
                    return (
                      <motion.div
                        key={row.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + r * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 transition-colors group-hover:bg-slate-100/70"
                      >
                        <span className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                          <RowIcon className={`w-5 h-5 ${plan.accent}`} />
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs text-slate-500 block">{row.label}</span>
                          <strong className="text-base font-bold text-slate-900">{row.value}</strong>
                        </div>
                        {row.tag && <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full ring-1 ring-slate-200 shrink-0">{row.tag}</span>}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="px-7 sm:px-8 pb-7 sm:pb-8 flex items-center justify-between gap-4 text-xs text-slate-500">
                  {plan.footer ? (
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      {plan.footer}
                    </span>
                  ) : <span />}
                  <a href="#book-tour" className={`inline-flex items-center gap-1 font-bold ${plan.accent} hover:underline shrink-0`}>
                    {plan.link}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Concessions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] bg-[#fef9c3] border border-yellow-200 p-6 sm:p-10 overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -right-8 -top-8"
          >
            <Percent className="w-40 h-40 text-amber-500/10" />
          </motion.div>

          <div className="relative flex items-center gap-4 mb-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30">
              <Percent className="w-7 h-7" />
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900">Concessions & Fee Incentives Available</h4>
          </div>
          <p className="relative text-sm sm:text-base text-slate-700 mb-8 sm:pl-[4.5rem]">We reward commitment and family trust. Concessions available include:</p>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
            {CONCESSIONS.map((c, i) => {
              const Icon = getIcon(c.icon);
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl bg-white p-5 sm:p-6 shadow-lg shadow-amber-900/5"
                >
                  <span className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </span>
                  <h5 className="text-base font-black text-slate-900 capitalize">{c.title}</h5>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
