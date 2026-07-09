import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-black text-brand-ink sm:text-4xl">Simple, transparent pricing</h2>
          <div className="mt-6 inline-flex rounded-full bg-brand-cream p-1">
            <button className="rounded-full bg-white px-6 py-2 text-sm font-bold shadow-sm">Monthly</button>
            <button className="rounded-full px-6 py-2 text-sm font-bold text-brand-ink/60">Yearly (Save 20%)</button>
          </div>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {["Starter", "Pro", "Enterprise"].map((plan, i) => (
            <div key={plan} className={`rounded-2xl border ${i === 1 ? 'border-primary-500 shadow-xl' : 'border-brand-ink/10'} p-8`}>
              <h3 className="text-2xl font-black">{plan}</h3>
              <p className="mt-4 text-4xl font-black">${[49, 99, 299][i]}<span className="text-lg text-brand-ink/50">/mo</span></p>
              <ul className="mt-8 space-y-4">
                {[1, 2, 3, 4, 5].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-semibold">
                    <Check className="h-5 w-5 text-primary-500" /> Feature description here
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-md py-3 font-bold ${i === 1 ? 'bg-primary-600 text-white hover:bg-primary-500' : 'bg-brand-cream text-brand-ink hover:bg-brand-ink/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}