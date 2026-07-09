import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="bg-brand-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-black text-brand-ink sm:text-4xl">Loved by marketers worldwide</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex gap-1 text-yellow-500">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <p className="mt-4 font-semibold text-brand-ink/80">"GrowthikOS completely changed how our agency operates. The AI agent alone saves us 20 hours a week on reporting."</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-ink/10" />
                <div>
                  <p className="font-bold">Sarah Jenkins</p>
                  <p className="text-sm text-brand-ink/60">CMO, TechGrowth</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}