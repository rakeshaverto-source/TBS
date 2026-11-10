import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/campus-hero.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e20]/85 via-[#0a1530]/75 to-[#0f1f44]/90" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-300 mb-6">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-yellow-400 font-semibold">About Us</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 font-serif italic">
            TBS
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Tricity&rsquo;s leading co-ed CBSE day school since 2005. Committed to cultivating intellect, character and future leaders.
        </p>
      </div>
    </section>
  );
}
