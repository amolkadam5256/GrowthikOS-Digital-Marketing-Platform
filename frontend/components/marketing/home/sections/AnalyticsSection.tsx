import { LineChart, BarChart } from "lucide-react";

export function AnalyticsSection() {
  const charts = ["Funnel", "Traffic", "Revenue", "ROAS", "Conversion", "Retention", "Cohorts", "Heatmaps", "Geographic Maps", "AI Trends"];
  return (
    <section className="bg-brand-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-black text-brand-ink sm:text-4xl">Advanced Analytics</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {charts.map((chart) => (
            <div key={chart} className="flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white px-6 py-2 text-sm font-bold shadow-sm">
              <LineChart className="h-4 w-4 text-primary-600" /> {chart}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}