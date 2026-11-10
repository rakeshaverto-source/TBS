import InfoHero from "@/components/info/InfoHero";
import PressGallery from "@/components/info/PressGallery";
import { pressImages } from "@/data/pressCoverageData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Press Coverage | The Bharat School, Panchkula in the News",
  description:
    "Newspaper coverage of The Bharat School, Panchkula: student achievements, events, sports championships and school news in Tribune, Bhaskar, Jagran and more.",
  path: "/press-coverage",
  image: pressImages[0],
});

export default function PressCoveragePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero
        crumbs={[{ label: "Press Coverage" }]}
        eyebrow="In The News"
        title="Press"
        highlight="Coverage"
        text="Our students, events and achievements as covered by newspapers across the Tricity."
      />
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PressGallery images={pressImages} />
        </div>
      </section>
    </div>
  );
}
