import { CalendarCheck } from "lucide-react";
import InfoHero from "@/components/info/InfoHero";
import { SPORTS_CLUB } from "@/data/schoolInfoData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bharat Sports Club | After-School Sports in Panchkula",
  description:
    "Bharat Sports Club at The Bharat School, Sector 12, Panchkula: badminton, basketball, skating, chess and pickleball. Open to students and outsiders. Book your slot online.",
  path: "/bharat-sports-club",
  image: SPORTS_CLUB.banner,
});

function BookButton({ className = "" }) {
  return (
    <a
      href={SPORTS_CLUB.bookingUrl}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#e1251b] text-white text-sm font-bold shadow-xl shadow-red-600/30 hover:bg-red-600 transition-colors ${className}`}
    >
      <CalendarCheck className="w-4 h-4" />
      Book Now
    </a>
  );
}

export default function SportsClubPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero
        crumbs={[{ label: "Beyond Academics", href: "/beyond-academics" }, { label: "Bharat Sports Club" }]}
        eyebrow="Your Premier After-School Sports Destination"
        title="Bharat"
        highlight="Sports Club"
      >
        <div className="mt-8">
          <BookButton />
        </div>
      </InfoHero>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight text-center mb-6">Welcome to Bharat Sports Club</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-center text-slate-600 text-base sm:text-lg leading-relaxed mb-12">
            {SPORTS_CLUB.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <img src={SPORTS_CLUB.banner} alt="Bharat Sports Club ground at The Bharat School, Panchkula" className="w-full rounded-3xl shadow-2xl object-cover aspect-[21/9]" />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SPORTS_CLUB.sports.map((s) => (
              <a
                key={s.name}
                href={SPORTS_CLUB.bookingUrl}
                target="_blank"
                rel="noopener"
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl"
              >
                <img src={s.photo} alt={`${s.name} at Bharat Sports Club`} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="inline-block mb-2 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-black">{s.price}</span>
                  <h3 className="text-xl sm:text-2xl font-black">{s.name}</h3>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-14 text-center">
            <p className="text-lg font-bold text-slate-800 mb-5">Book your slot now by clicking the button below and be part of the action!</p>
            <BookButton />
          </div>
        </div>
      </section>
    </div>
  );
}
