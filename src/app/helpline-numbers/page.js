import Link from "next/link";
import InfoHero from "@/components/info/InfoHero";
import CampusCards from "@/components/info/CampusCards";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Admission Helpline Numbers | The Bharat School, Panchkula",
  description:
    "Admission helpline numbers, email and maps for The Bharat School, Sector 12 and Tinkerbelle (junior branch), Sector 8, Panchkula.",
  path: "/helpline-numbers",
});

export default function HelplinePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero
        crumbs={[{ label: "Contact Us", href: "/contact-us" }, { label: "Helpline" }]}
        title="Admission"
        highlight="Helpline"
        text="Call, write or visit either of our campuses in Panchkula. We are happy to help."
      >
        <Link href="/contact-us" className="mt-8 inline-flex px-7 py-3.5 rounded-full bg-[#e1251b] text-white text-sm font-bold hover:bg-red-600 transition-colors">
          Send an Enquiry
        </Link>
      </InfoHero>
      <CampusCards heading="Helpline" />
    </div>
  );
}
