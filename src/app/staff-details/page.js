import InfoHero from "@/components/info/InfoHero";
import { STAFF } from "@/data/schoolInfoData";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Staff Details | The Bharat School, Sector 12, Panchkula",
  description: "Teaching and non-teaching staff of The Bharat School, Sector 12, Panchkula with designation and qualifications.",
  path: "/staff-details",
});

export default function StaffDetailsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <InfoHero crumbs={[{ label: "Staff Details" }]} eyebrow="The Bharat School, Sector 12, Panchkula" title="Staff" highlight="Details" />
      <section className="py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Staff of The Bharat School with designation and qualification</caption>
                <thead className="bg-[#0a1226] text-white">
                  <tr>
                    <th scope="col" className="px-4 sm:px-6 py-4 font-bold">S.No</th>
                    <th scope="col" className="px-4 sm:px-6 py-4 font-bold">Staff</th>
                    <th scope="col" className="px-4 sm:px-6 py-4 font-bold">Designation</th>
                    <th scope="col" className="px-4 sm:px-6 py-4 font-bold">Qualification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {STAFF.map((s, i) => (
                    <tr key={s.name} className="odd:bg-white even:bg-slate-50/70 hover:bg-blue-50/50">
                      <td className="px-4 sm:px-6 py-3.5 text-slate-500">{i + 1}</td>
                      <td className="px-4 sm:px-6 py-3.5 font-bold text-slate-900 whitespace-nowrap">{s.name}</td>
                      <td className="px-4 sm:px-6 py-3.5 text-slate-700 whitespace-nowrap">{s.designation}</td>
                      <td className="px-4 sm:px-6 py-3.5 text-slate-600">{s.qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
