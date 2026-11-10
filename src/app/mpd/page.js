import InfoHero from "@/components/info/InfoHero";
import PdfDocument from "@/components/info/PdfDocument";
import { DOCUMENTS } from "@/data/schoolInfoData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mandatory Public Disclosure (MPD) | The Bharat School, Panchkula",
  description:
    "Mandatory Public Disclosure of The Bharat School, Sector 12, Panchkula as required by CBSE: school information, documents, staff, results and infrastructure.",
  path: "/mpd",
});

export default function MpdPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero
        crumbs={[{ label: "MPD" }]}
        eyebrow="As required by CBSE"
        title="Mandatory Public"
        highlight="Disclosure"
        text="General information, documents, results, staff and infrastructure details of The Bharat School."
      />
      <PdfDocument title={DOCUMENTS.mpd.title} file={DOCUMENTS.mpd.file} note="The Bharat School, Sector 12, Panchkula" />
    </div>
  );
}
