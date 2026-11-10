import InfoHero from "@/components/info/InfoHero";
import PdfDocument from "@/components/info/PdfDocument";
import { DOCUMENTS } from "@/data/schoolInfoData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Transfer Certificates 2024-25 | The Bharat School, Panchkula",
  description: "List of Transfer Certificates (TC) issued by The Bharat School, Panchkula for the session 2024-25.",
  path: "/2024-25",
});

export default function Tc2024Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero crumbs={[{ label: "Transfer Certificate", href: "/transfer-certificate" }, { label: "2024-25" }]} title="Transfer Certificates" highlight="2024-25" />
      <PdfDocument title={DOCUMENTS.tc2024.title} file={DOCUMENTS.tc2024.file} />
    </div>
  );
}
