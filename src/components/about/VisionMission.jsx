import { Eye, Target } from "lucide-react";

export default function VisionMission({ vision, mission }) {
  return (
    <section id="vision-mission">
      {/* Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-[3/2]">
          <img src={vision.image} alt="Our Vision" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="bg-[#e1251b] text-white flex items-center px-6 sm:px-12 lg:px-16 py-14">
          <div className="w-full max-w-xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <Eye className="w-8 h-8 text-yellow-300" />
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Our Vision</h2>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-white/95 text-justify hyphens-auto">{vision.text}</p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1 bg-[#1e3a8a] text-white flex items-center px-6 sm:px-12 lg:px-16 py-14">
          <div className="w-full max-w-xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <Target className="w-8 h-8 text-yellow-300" />
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Our Mission</h2>
            </div>
            <p className="text-base sm:text-lg leading-relaxed text-white/95 text-justify hyphens-auto">{mission.text}</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative min-h-[280px] lg:min-h-[420px]">
          <img src={mission.image} alt="Our Mission" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
