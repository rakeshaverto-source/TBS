import { Download, ExternalLink, FileText } from "lucide-react";

// Embeds a PDF with open / download buttons. Phones that can't show PDFs inline get the buttons.
export default function PdfDocument({ title, file, note }) {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden">
          <div className="flex flex-wrap items-center gap-4 p-5 sm:p-6 border-b border-slate-100">
            <span className="w-12 h-12 rounded-2xl bg-red-50 text-[#e1251b] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </span>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">{title}</h2>
              {note && <p className="text-sm text-slate-500">{note}</p>}
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={file}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-[#1e3a8a] text-white hover:bg-[#172554] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open PDF
              </a>
              <a
                href={file}
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
          <object data={`${file}#view=FitH`} type="application/pdf" className="w-full h-[75vh] min-h-[480px] bg-slate-100" aria-label={title}>
            <div className="p-10 text-center text-slate-600">
              <p className="mb-4">This document can&apos;t be shown here on your device.</p>
              <a href={file} target="_blank" rel="noopener" className="font-bold text-[#e1251b] underline">
                Open {title} (PDF)
              </a>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
