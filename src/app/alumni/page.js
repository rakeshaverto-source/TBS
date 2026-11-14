import InfoHero from "@/components/info/InfoHero";
import AlumniForm from "@/components/info/AlumniForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Join Our Alumni | The Bharat School, Panchkula",
  description:
    "Former students of The Bharat School (formerly The British School), Panchkula: register with the TBS Alumni network and stay connected with your school.",
  path: "/alumni",
});

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero
        crumbs={[{ label: "Alumni" }]}
        eyebrow="TBS Alumni"
        title="A Lifelong"
        highlight="Connection"
        text="Studied at The Bharat School or The British School? Share where life has taken you and stay connected with your school family."
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AlumniForm />
        </div>
      </section>
    </div>
  );
}
