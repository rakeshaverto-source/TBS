import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import InfoHero from "@/components/info/InfoHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Transfer Certificate | The Bharat School, Panchkula",
  description: "Lists of Transfer Certificates (TC) issued by The Bharat School, Panchkula for the sessions 2024-25 and 2025-26.",
  path: "/transfer-certificate",
});

const SESSIONS = [
  { href: "/2025-26", label: "Session 2025-26" },
  { href: "/2024-25", label: "Session 2024-25" },
];

export default function TransferCertificatePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero crumbs={[{ label: "Transfer Certificate" }]} title="Transfer" highlight="Certificate" text="Lists of Transfer Certificates issued by the school, session-wise." />
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SESSIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center gap-4 p-6 rounded-3xl bg-white ring-1 ring-slate-200 shadow-md hover:shadow-xl hover:ring-[#1e3a8a]/40 transition"
            >
              <span className="w-12 h-12 rounded-2xl bg-red-50 text-[#e1251b] flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </span>
              <span className="flex-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">TC List</span>
                <span className="block text-lg font-black text-slate-900">{s.label}</span>
              </span>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 group-hover:text-[#e1251b] transition" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
