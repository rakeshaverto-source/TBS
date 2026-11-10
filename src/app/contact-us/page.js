import { Mail, Phone, MapPin } from "lucide-react";
import InfoHero from "@/components/info/InfoHero";
import CampusCards from "@/components/info/CampusCards";
import ContactForm from "@/components/info/ContactForm";
import { CAMPUSES, SOCIALS } from "@/data/schoolInfoData";
import { pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/server/content";

export const metadata = pageMetadata({
  title: "Best CBSE Schools in Panchkula - Contact Us",
  description:
    "Reach out to The Bharat School, one of the top CBSE schools in Panchkula. Contact us for admissions, inquiries, or any educational services.",
  path: "/contact-us",
});

const tbs = CAMPUSES[0];

const schoolJsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "The Bharat School",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: tbs.email,
  telephone: tbs.phones.map((p) => p.tel),
  address: { "@type": "PostalAddress", streetAddress: "Sector 12", addressLocality: "Panchkula", addressRegion: "Haryana", postalCode: "134112", addressCountry: "IN" },
  sameAs: SOCIALS.filter((s) => s.label !== "WhatsApp").map((s) => s.href),
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolJsonLd) }} />
      <InfoHero
        crumbs={[{ label: "Contact Us" }]}
        eyebrow="Best CBSE School in Panchkula"
        title="Connect"
        highlight="With Us"
        text="Take the first step to brighten your child's future with exceptional educators and advanced learning programs."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <a href={`mailto:${tbs.email}`} className="flex items-start gap-4 p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-md hover:ring-[#1e3a8a] transition">
              <span className="w-11 h-11 rounded-xl bg-blue-50 text-[#1e3a8a] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <h2 className="font-black text-slate-900">Email</h2>
                <p className="text-sm text-slate-600 break-all">{tbs.email}</p>
              </div>
            </a>
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-md">
              <span className="w-11 h-11 rounded-xl bg-red-50 text-[#e1251b] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <h2 className="font-black text-slate-900">Phone</h2>
                {tbs.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="block text-sm text-slate-600 hover:text-[#e1251b]">
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-md">
              <span className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <h2 className="font-black text-slate-900">Address</h2>
                <p className="text-sm text-slate-600">Sector 12, Panchkula, Haryana 134112</p>
                <p className="text-sm text-slate-600 mt-2">
                  <strong className="text-slate-800">Tinkerbelle</strong> (Junior branch of The Bharat School): Sector 8, Panchkula, Haryana 134109
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" className="px-4 py-2 rounded-full bg-[#0a1226] text-white text-xs font-bold hover:bg-[#e1251b] transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CampusCards heading="Find Us" />
    </div>
  );
}
