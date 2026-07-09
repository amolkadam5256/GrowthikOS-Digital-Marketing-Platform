import { Download, Star } from "lucide-react";

export function AiMarketplace() {
  const items = ["AI Agents", "Templates", "Prompt Packs", "Automations", "Integrations", "Industry Packs"];
  return (
    <section className="bg-brand-ink px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">Growthik Marketplace</h2>
          <p className="mt-4 text-lg font-semibold text-white/70">Install ready-made growth engines in one click.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="group cursor-pointer rounded-xl border border-white/10 bg-[#111] p-6 transition hover:border-primary-500/50 hover:bg-white/5">
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-lg bg-primary-600/20" />
                <button className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition group-hover:bg-primary-600">
                  <Download className="h-3 w-3" /> Install
                </button>
              </div>
              <h3 className="mt-6 text-xl font-bold">{item}</h3>
              <p className="mt-2 text-sm text-white/60">Enhance your workspace with specialized {item.toLowerCase()} built by experts.</p>
              <div className="mt-6 flex items-center gap-1 text-xs font-bold text-yellow-500">
                <Star className="h-3 w-3 fill-current" /> 4.9 (120+ installs)
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}