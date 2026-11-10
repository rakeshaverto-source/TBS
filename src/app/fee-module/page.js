import Link from "next/link";
import { Phone, CheckCircle2 } from "lucide-react";
import InfoHero from "@/components/info/InfoHero";
import { FEE_MODULE } from "@/data/schoolInfoData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "CBSE Fee Structure - The Bharat School",
  description:
    "Explore the CBSE fee structure at The Bharat School, including tuition, admission fees, and payment details. Register now to secure your child's future.",
  path: "/fee-module",
});

export default function FeeModulePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero
        crumbs={[{ label: "Admissions", href: "/admissions" }, { label: "Fee Module" }]}
        eyebrow={`For Session ${FEE_MODULE.session}`}
        title="Fee"
        highlight="Module"
        text="Please call the school office for details."
      >
        <a href="tel:+919876155746" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#e1251b] text-white text-sm font-bold hover:bg-red-600 transition-colors">
          <Phone className="w-4 h-4" />
          +91 98761 55746
        </a>
      </InfoHero>

      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden">
            <table className="w-full text-left">
              <caption className="p-5 text-left text-lg font-black text-slate-900 border-b border-slate-100">Monthly Fees • Session {FEE_MODULE.session}</caption>
              <thead className="bg-[#0a1226] text-white text-sm">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Class</th>
                  <th scope="col" className="px-6 py-4 font-bold text-right">Monthly Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {FEE_MODULE.rows.map((r) => (
                  <tr key={r.cls} className="hover:bg-blue-50/50">
                    <td className="px-6 py-4 font-bold text-slate-900">{r.cls}</td>
                    <td className="px-6 py-4 text-right font-black text-[#1e3a8a] tabular-nums">{r.fee}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-amber-50">
                  <th scope="row" className="px-6 py-4 text-left font-bold text-slate-900">Admission Fee</th>
                  <td className="px-6 py-4 text-right font-black text-[#e1251b] tabular-nums">{FEE_MODULE.admissionFee}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <ul className="mt-8 space-y-3">
            {FEE_MODULE.notes.map((n) => (
              <li key={n} className="flex gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                {n}
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <Link href="/admissions" className="inline-flex px-7 py-3.5 rounded-full bg-[#1e3a8a] text-white text-sm font-bold hover:bg-[#172554] transition-colors">
              View Admission Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
