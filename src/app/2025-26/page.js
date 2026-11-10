import InfoHero from "@/components/info/InfoHero";
import PdfDocument from "@/components/info/PdfDocument";
import { DOCUMENTS } from "@/data/schoolInfoData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Transfer Certificates 2025-26 | The Bharat School, Panchkula",
  description: "List of Transfer Certificates (TC) issued by The Bharat School, Panchkula for the session 2025-26.",
  path: "/2025-26",
});

export default function Tc2025Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero crumbs={[{ label: "Transfer Certificate", href: "/transfer-certificate" }, { label: "2025-26" }]} title="Transfer Certificates" highlight="2025-26" />
      <PdfDocument title={DOCUMENTS.tc2025.title} file={DOCUMENTS.tc2025.file} />
    </div>
  );
}
