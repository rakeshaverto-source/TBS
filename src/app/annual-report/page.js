import InfoHero from "@/components/info/InfoHero";
import PdfDocument from "@/components/info/PdfDocument";
import { DOCUMENTS } from "@/data/schoolInfoData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Annual Report 2025-26 | The Bharat School, Panchkula",
  description: "Read the Annual Report 2025-26 of The Bharat School, Panchkula: highlights of academics, events, achievements and activities of the year.",
  path: "/annual-report",
});

export default function AnnualReportPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero crumbs={[{ label: "Annual Report" }]} title="Annual" highlight="Report" text="A look back at the academic year 2025-26 at The Bharat School." />
      <PdfDocument title={DOCUMENTS.annualReport.title} file={DOCUMENTS.annualReport.file} />
    </div>
  );
}
