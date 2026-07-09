import { Brain, Search, Target, Megaphone, Users, LineChart, Layout, Network, Mail, MessageSquare, ShoppingCart, FileText, Store, Repeat } from "lucide-react";

export function PlatformCategories() {
  const categories = [
    { icon: Brain, name: "AI" },
    { icon: Search, name: "SEO" },
    { icon: Target, name: "Google Ads" },
    { icon: Megaphone, name: "Meta Ads" },
    { icon: Users, name: "Social Media" },
    { icon: Users, name: "CRM" },
    { icon: LineChart, name: "Analytics" },
    { icon: Layout, name: "Website Builder" },
    { icon: Network, name: "Funnels" },
    { icon: Repeat, name: "Automation" },
    { icon: Mail, name: "Email" },
    { icon: MessageSquare, name: "WhatsApp" },
    { icon: ShoppingCart, name: "Ecommerce" },
    { icon: FileText, name: "Reports" },
    { icon: Store, name: "Marketplace" },
  ];

  return (
    <section className="bg-brand-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-black text-brand-ink sm:text-4xl">Everything you need to scale</h2>
          <p className="mt-4 text-lg font-semibold text-brand-ink/70">One unified platform replacing dozens of disconnected tools.</p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <div key={cat.name} className="group flex cursor-pointer flex-col items-center gap-4 rounded-xl border border-brand-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-xl">
              <cat.icon className="h-8 w-8 text-brand-ink/50 transition group-hover:text-primary-600" />
              <span className="text-sm font-bold text-brand-ink">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}