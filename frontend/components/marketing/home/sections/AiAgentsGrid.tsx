import { Bot } from "lucide-react";

export function AiAgentsGrid() {
  const agents = ["SEO Agent", "Ads Agent", "CRM Agent", "Support Agent", "Research Agent", "Content Agent", "Social Agent", "Analytics Agent", "Coding Agent"];
  return (
    <section className="bg-brand-cream px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-black text-brand-ink sm:text-4xl">Dedicated AI Agents</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent} className="group flex cursor-pointer items-center gap-4 rounded-xl border border-brand-ink/10 bg-white p-6 shadow-sm transition hover:border-primary-500/50 hover:shadow-md">
              <div className="rounded-full bg-primary-100 p-3 text-primary-600 transition group-hover:bg-primary-600 group-hover:text-white">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{agent}</h3>
                <p className="text-sm font-semibold text-brand-ink/60">Autonomous task execution</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}