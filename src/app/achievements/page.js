import { Trophy, Medal } from "lucide-react";
import InfoHero from "@/components/info/InfoHero";
import { CBSE_RESULTS, SPORTS_STAR, SPORTS_ACHIEVERS } from "@/data/schoolInfoData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "The Best CBSE School in Tricity: Discover Our Achievements",
  description:
    "The remarkable achievements of The Bharat School, recognized as the best CBSE school in Tricity. Discover our commitment to excellence in education.",
  path: "/achievements",
  image: "/wp-content/uploads/2024/12/p2.png",
});

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero
        crumbs={[{ label: "Achievements" }]}
        eyebrow="CBSE Results & Sports"
        title="Our"
        highlight="Achievements"
        text="Year after year our students shine in CBSE board examinations and on the sports field."
      />

      {/* CBSE Results */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1e3a8a] tracking-tight text-center mb-12">CBSE Results</h2>
          <div className="space-y-12">
            {CBSE_RESULTS.map((group) => (
              <div key={group.title}>
                <h3 className="flex items-center gap-3 text-xl font-black text-slate-900 mb-5">
                  <Trophy className="w-6 h-6 text-amber-500" />
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {group.toppers.map((t, i) => (
                    <figure key={t.name} className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-md overflow-hidden text-center">
                      <div className="relative aspect-square bg-gradient-to-b from-blue-50 to-white">
                        <img src={t.photo} alt={`${t.name}, ${group.title} topper at The Bharat School`} loading="lazy" className="w-full h-full object-contain" />
                        {i === 0 && <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-amber-400 text-[10px] font-black uppercase text-slate-900">Topper</span>}
                      </div>
                      <figcaption className="p-4">
                        <div className="text-2xl sm:text-3xl font-black text-[#e1251b]">{t.score}</div>
                        <div className="font-bold text-slate-900">{t.name}</div>
                        {t.stream && <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">{t.stream}</div>}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="py-16 sm:py-20 bg-[#0a1226] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-center mb-12">Sports Achievement</h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start mb-12">
            <img src={SPORTS_STAR.photo} alt={SPORTS_STAR.name} loading="lazy" className="lg:col-span-2 w-full rounded-3xl object-cover shadow-2xl" />
            <div className="lg:col-span-3">
              <h3 className="text-3xl font-black">{SPORTS_STAR.name}</h3>
              <p className="text-yellow-400 font-bold mb-6">{SPORTS_STAR.title}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SPORTS_STAR.levels.map((l) => (
                  <div key={l.level} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300 mb-3">{l.level}</div>
                    <ul className="space-y-2 text-sm text-slate-200">
                      {l.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <Medal className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SPORTS_ACHIEVERS.map((s) => (
              <div key={s.name} className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <h3 className="text-xl font-black mb-3">{s.name}</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <Medal className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
