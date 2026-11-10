import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Shared dark hero for the information pages (contact, FAQ, MPD, staff ...).
export default function InfoHero({ title, highlight, eyebrow, text, crumbs = [], children }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#0a1226] text-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#e1251b]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              {c.href ? (
                <Link href={c.href} className="hover:text-white transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-yellow-400 font-medium">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-yellow-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {eyebrow}
          </div>
        )}

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] mb-5">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-yellow-300 to-amber-400 font-serif italic">
                {highlight}
              </span>
            </>
          )}
        </h1>
        {text && <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">{text}</p>}
        {children}
      </div>
    </section>
  );
}
