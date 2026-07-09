import { FileText, Download } from "lucide-react";

export function ReportingSection() {
  const reports = ["SEO Reports", "PPC Reports", "Marketing Reports", "Executive Reports", "White-label Reports"];
  return (
    <section className="bg-brand-ink px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-black sm:text-4xl">Client & Executive Reporting</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <ul className="space-y-4">
              {reports.map((report) => (
                <li key={report} className="flex items-center gap-3 text-lg font-bold">
                  <FileText className="h-6 w-6 text-primary-500" /> {report}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <button className="flex items-center gap-2 rounded bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/20">
                <Download className="h-4 w-4" /> PDF Export
              </button>
              <button className="flex items-center gap-2 rounded bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/20">
                <Download className="h-4 w-4" /> Excel Export
              </button>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-xl">
             <div className="mb-4 h-4 w-1/3 rounded bg-brand-ink/10" />
             <div className="mb-8 h-8 w-2/3 rounded bg-brand-ink/20" />
             <div className="grid grid-cols-2 gap-4">
               <div className="h-32 rounded bg-primary-100" />
               <div className="h-32 rounded bg-primary-100" />
               <div className="col-span-2 h-40 rounded bg-brand-ink/5" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}