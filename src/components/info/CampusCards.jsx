import { MapPin, Phone, Mail, Navigation, Globe } from "lucide-react";
import { CAMPUSES } from "@/data/schoolInfoData";

// Both campuses with helpline numbers, email and an embedded Google Map.
export default function CampusCards({ heading = "Our Campuses" }) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CAMPUSES.map((c) => (
            <article key={c.key} className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden flex flex-col">
              <div className="p-6 sm:p-8 flex-1">
                <h3 className="text-2xl font-black text-slate-900">{c.name}</h3>
                <p className="text-sm font-semibold text-[#e1251b] mb-6">{c.tagline}</p>

                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <MapPin className="w-5 h-5 text-[#1e3a8a] shrink-0" />
                    <address className="not-italic">
                      {c.address.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-5 h-5 text-[#1e3a8a] shrink-0" />
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Admission helpline</span>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {c.phones.map((p) => (
                          <a key={p.tel} href={`tel:${p.tel}`} className="font-bold text-slate-900 hover:text-[#e1251b]">
                            {p.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="w-5 h-5 text-[#1e3a8a] shrink-0" />
                    <a href={`mailto:${c.email}`} className="font-semibold hover:text-[#e1251b] break-all">
                      {c.email}
                    </a>
                  </li>
                  {c.website && (
                    <li className="flex gap-3">
                      <Globe className="w-5 h-5 text-[#1e3a8a] shrink-0" />
                      <a href={c.website} target="_blank" rel="noopener" className="font-semibold hover:text-[#e1251b]">
                        tinkerbelle.in
                      </a>
                    </li>
                  )}
                </ul>

                <a
                  href={c.directions}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-[#e1251b] text-white hover:bg-red-600 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
              <iframe
                src={c.map}
                title={`Map of ${c.name}, Panchkula`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-72 border-0"
                allowFullScreen
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
