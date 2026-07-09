import { BarChart3, LineChart, PieChart } from "lucide-react";

export function LiveDashboardDemo() {
  return (
    <section className="bg-brand-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black text-brand-ink sm:text-4xl">Live Dashboard Experience</h2>
          <p className="mt-4 text-lg font-semibold text-brand-ink/70">Interact with real-time charts powered by your connected data.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="col-span-2 rounded-xl border border-brand-ink/10 bg-white p-6 shadow-sm">
             <div className="mb-6 flex items-center justify-between">
               <h3 className="text-lg font-bold">Revenue vs Leads</h3>
               <LineChart className="text-brand-ink/50" />
             </div>
             <div className="flex h-64 items-end gap-2">
               {[40, 60, 45, 80, 55, 90, 75, 100].map((h, i) => (
                 <div key={i} className="w-full rounded-t-sm bg-primary-500/80 transition-all hover:bg-primary-600" style={{ height: `${h}%` }} />
               ))}
             </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-xl border border-brand-ink/10 bg-white p-6 shadow-sm">
               <div className="flex items-center justify-between">
                 <h3 className="text-lg font-bold">Traffic Source</h3>
                 <PieChart className="text-brand-ink/50" />
               </div>
               <div className="mt-6 flex h-24 items-center justify-center gap-4">
                 <div className="h-20 w-20 rounded-full border-8 border-primary-500" />
                 <div className="space-y-2 text-sm font-bold text-brand-ink/70">
                   <p><span className="text-primary-500">■</span> Organic</p>
                   <p><span className="text-brand-ink/20">■</span> Direct</p>
                 </div>
               </div>
            </div>
            <div className="rounded-xl border border-brand-ink/10 bg-brand-ink p-6 text-white shadow-sm">
               <h3 className="text-lg font-bold text-primary-400">AI Visibility</h3>
               <p className="mt-2 text-3xl font-black">92/100</p>
               <p className="mt-1 text-sm text-white/50">+14% this month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}