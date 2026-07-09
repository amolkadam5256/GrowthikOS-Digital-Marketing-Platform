import { Building2 } from "lucide-react";

export function IndustrySolutions() {
  const industries = ["Agencies", "Ecommerce", "SaaS", "Real Estate", "Healthcare", "Education", "Restaurants", "Hotels", "Manufacturing", "Retail", "Finance", "NGOs", "Government"];
  return (
    <section className="bg-brand-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-black text-brand-ink sm:text-4xl">Solutions by Industry</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind} className="flex items-center gap-3 rounded-lg bg-white p-4 font-bold shadow-sm">
              <Building2 className="h-5 w-5 text-primary-500" />
              {ind}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}