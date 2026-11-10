import Link from "next/link";

export default function AboutIntro({ intro, mentors }) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* About Our School */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img src={intro.image} alt="The Bharat School students" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-[#e1251b] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3">
              Who We Are
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black text-[#1e3a8a] tracking-tight mb-6">
              {intro.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-8">{intro.text}</p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-full font-bold text-sm bg-[#ef4444] hover:bg-red-600 text-white shadow-[0_4px_14px_0_rgba(239,68,68,0.39)] transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mentors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[#e1251b] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3">
              Guiding Every Learner
            </h2>
            <h3 className="text-3xl sm:text-5xl font-black text-[#1e3a8a] tracking-tight mb-6">
              {mentors.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">{mentors.text}</p>
          </div>
          <div className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] border-8 border-[#1e3a8a]/90">
            <img src={mentors.image} alt="TBS mentors and faculty" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
