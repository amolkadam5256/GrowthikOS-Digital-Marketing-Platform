import { ShieldCheck, Server } from "lucide-react";

export function EnterpriseSection() {
  const highlights = ["SSO", "RBAC", "Audit Logs", "API", "White Label", "Custom Branding", "Compliance", "ISO", "SOC2", "Multi-Workspace"];
  return (
    <section id="enterprise" className="bg-brand-ink px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <ShieldCheck className="mx-auto mb-6 h-16 w-16 text-primary-500" />
        <h2 className="text-3xl font-black sm:text-4xl">Enterprise Grade Ready</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-white/70">
          Secure, scalable, and compliant infrastructure built for large teams and agencies.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {highlights.map((item) => (
            <span key={item} className="rounded-sm bg-white/10 px-4 py-2 text-sm font-bold shadow-sm backdrop-blur">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}