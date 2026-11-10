import Link from "next/link";
import { ChevronDown } from "lucide-react";
import InfoHero from "@/components/info/InfoHero";
import { FAQ, DOCUMENTS } from "@/data/schoolInfoData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQs | The Bharat School (formerly The British School), Panchkula",
  description:
    "Answers to common questions about The British School becoming The Bharat School, Panchkula: values, uniform, CBSE affiliation, Tinkerbelle and more.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <InfoHero crumbs={[{ label: "FAQ" }]} title="Frequently Asked" highlight="Questions" text={FAQ.title} />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {FAQ.items.map((f, i) => (
            <details key={f.q} className="group rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm open:shadow-lg open:ring-[#1e3a8a]/30 transition" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <span className="w-8 h-8 rounded-full bg-blue-50 text-[#1e3a8a] text-xs font-black flex items-center justify-center shrink-0">{i + 1}</span>
                <h2 className="flex-1 text-base sm:text-lg font-bold text-slate-900">{f.q}</h2>
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 sm:px-6 pb-6 pl-[4.25rem] sm:pl-[4.5rem] text-slate-600 leading-relaxed">{f.a}</p>
            </details>
          ))}

          <div className="mt-10 rounded-2xl bg-[#0a1226] text-white p-6 sm:p-8 flex flex-wrap items-center gap-4">
            <p className="flex-1 min-w-[200px] font-semibold">Still have a question? Our front desk will get back to you within 24 working hours.</p>
            <Link href="/contact-us" className="px-6 py-3 rounded-full bg-[#e1251b] text-sm font-bold hover:bg-red-600 transition-colors">
              Contact Us
            </Link>
            <a href={DOCUMENTS.externalExams.file} target="_blank" rel="noopener" className="px-6 py-3 rounded-full bg-white/10 text-sm font-bold hover:bg-white/20 transition-colors">
              External Exams (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
