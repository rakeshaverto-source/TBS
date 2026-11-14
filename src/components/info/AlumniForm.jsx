"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { addSubmission } from "@/lib/content/store";

const input =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1e3a8a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100";

const CLASSES = ["Pre-Primary", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
const THIS_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: THIS_YEAR - 2005 + 1 }, (_, i) => String(THIS_YEAR - i)); // school founded 2005

function Field({ label, required, children, wide }) {
  return (
    <label className={`block ${wide ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
        {label} {required && <span className="text-[#e1251b]">*</span>}
      </span>
      {children}
    </label>
  );
}

// "Join Our Alumni" form. Entries land in the admin panel under "Alumni Registrations".
export default function AlumniForm() {
  const [form, setForm] = useState({
    name: "",
    contactNumber: "",
    email: "",
    lastClass: "",
    lastYear: "",
    seniorSecondarySchool: "",
    graduation: "",
    postGraduation: "",
    currentlyPursuing: "",
    currentLocation: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    const { lastClass, lastYear, ...rest } = form;
    // Stored in the order the questions are asked, so the admin panel reads the same way
    await addSubmission("alumniRegistrations", {
      name: rest.name.trim(),
      contactNumber: rest.contactNumber.trim(),
      email: rest.email.trim(),
      lastClassAndYearInTBS: [lastClass && `Class ${lastClass}`, lastYear].filter(Boolean).join(", "),
      classXIAndXIIFrom: rest.seniorSecondarySchool.trim(),
      graduation: rest.graduation.trim(),
      postGraduation: rest.postGraduation.trim(),
      currentlyPursuing: rest.currentlyPursuing.trim(),
      currentLocation: rest.currentLocation.trim(),
      status: "New",
    });
    setSending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-black text-slate-900 mb-2">Welcome back, {form.name.trim().split(" ")[0]}!</h3>
        <p className="text-slate-600">Thank you for joining the TBS Alumni network. We will stay in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl p-6 sm:p-8">
      <h2 className="text-2xl font-black text-slate-900">Join Our Alumni</h2>
      <p className="mt-1 mb-6 text-sm text-slate-500">Fields marked * are required.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name" required wide>
          <input required name="name" autoComplete="name" value={form.name} onChange={set("name")} placeholder="Your full name" className={input} />
        </Field>
        <Field label="Contact Number" required>
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={form.contactNumber}
            onChange={set("contactNumber")}
            placeholder="+91 98765 43210"
            className={input}
          />
        </Field>
        <Field label="Email">
          <input type="email" name="email" autoComplete="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={input} />
        </Field>

        <div className="sm:col-span-2">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
            Last Class and Year in TBS <span className="text-[#e1251b]">*</span>
          </span>
          <div className="grid grid-cols-2 gap-4">
            <select required aria-label="Last class in TBS" value={form.lastClass} onChange={set("lastClass")} className={input}>
              <option value="">Class</option>
              {CLASSES.map((c) => (
                <option key={c} value={c}>
                  {c === "Pre-Primary" ? c : `Class ${c}`}
                </option>
              ))}
            </select>
            <select required aria-label="Year you left TBS" value={form.lastYear} onChange={set("lastYear")} className={input}>
              <option value="">Year</option>
              {YEARS.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        <Field label="Class XI & XII from School" wide>
          <input value={form.seniorSecondarySchool} onChange={set("seniorSecondarySchool")} placeholder="School name, e.g. The Bharat School" className={input} />
        </Field>
        <Field label="Graduation">
          <input value={form.graduation} onChange={set("graduation")} placeholder="Degree, college" className={input} />
        </Field>
        <Field label="Post Graduation">
          <input value={form.postGraduation} onChange={set("postGraduation")} placeholder="Degree, college" className={input} />
        </Field>
        <Field label="Currently Pursuing">
          <input value={form.currentlyPursuing} onChange={set("currentlyPursuing")} placeholder="Study / job / business" className={input} />
        </Field>
        <Field label="Current Location">
          <input name="city" autoComplete="address-level2" value={form.currentLocation} onChange={set("currentLocation")} placeholder="City, country" className={input} />
        </Field>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e1251b] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 hover:bg-red-600 disabled:opacity-60 transition-colors"
      >
        <Send className="w-4 h-4" />
        {sending ? "Sending…" : "Join the Alumni Network"}
      </button>
    </form>
  );
}
