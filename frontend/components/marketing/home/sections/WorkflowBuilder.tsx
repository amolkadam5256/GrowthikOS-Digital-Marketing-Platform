import { ArrowDown } from "lucide-react";

export function WorkflowBuilder() {
  const flow = ["Trigger", "AI Agent", "CRM Update", "Email Sequence", "WhatsApp Alert", "Google Sheet", "Report Generation", "Dashboard"];
  return (
    <section className="bg-brand-ink px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-black sm:text-4xl">Visual Workflow Builder</h2>
        <p className="mt-4 text-lg font-semibold text-white/70">Drag and drop powerful automations across all your tools.</p>
        
        <div className="mt-16 flex flex-col items-center gap-4">
          {flow.map((step, idx) => (
            <div key={step} className="flex flex-col items-center gap-4">
              <div className="w-64 rounded-lg border border-white/20 bg-white/5 p-4 text-center text-sm font-bold shadow-lg backdrop-blur">
                {step}
              </div>
              {idx < flow.length - 1 && <ArrowDown className="text-primary-500" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}