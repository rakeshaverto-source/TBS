"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { addSubmission } from "@/lib/content/store";
import { CONTACT_CLASSES } from "@/data/schoolInfoData";

const input =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1e3a8a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100";

// Contact / admission enquiry form. Entries land in the admin panel under "Contact Enquiries".
export default function ContactForm() {
  const [form, setForm] = useState({ parentName: "", childName: "", phone: "", email: "", className: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    addSubmission("contactEnquiries", { ...form, status: "New" });
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-black text-slate-900 mb-2">Thank you!</h3>
        <p className="text-slate-600">We have received your enquiry. Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl p-6 sm:p-8 space-y-4">
      <h2 className="text-2xl font-black text-slate-900">Fill The Form Below</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="sr-only">Parent Name</span>
          <input required value={form.parentName} onChange={set("parentName")} placeholder="Parent Name *" className={input} />
        </label>
        <label className="block">
          <span className="sr-only">Child Name</span>
          <input value={form.childName} onChange={set("childName")} placeholder="Child Name" className={input} />
        </label>
        <label className="block">
          <span className="sr-only">Telephone</span>
          <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="Telephone *" className={input} />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input type="email" value={form.email} onChange={set("email")} placeholder="Email" className={input} />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Class</span>
        <select value={form.className} onChange={set("className")} className={input}>
          <option value="">Please Choose the Class</option>
          {CONTACT_CLASSES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="sr-only">Your query</span>
        <textarea rows={4} value={form.message} onChange={set("message")} placeholder="Queries Regarding Admissions" className={input} />
      </label>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e1251b] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 hover:bg-red-600 transition-colors"
      >
        <Send className="w-4 h-4" />
        Send Enquiry
      </button>
    </form>
  );
}
