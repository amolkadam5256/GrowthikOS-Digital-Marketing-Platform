import { trustLogos } from "../data";

export function TrustBar() {
  return (
    <section className="border-b border-[#E4E2DD] py-9">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 lg:px-8">
        <div className="shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-[#6B7280]">
          Growth systems for
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex min-w-max animate-[marquee_26s_linear_infinite] gap-12">
            {[...trustLogos, ...trustLogos].map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="font-display text-sm font-semibold text-[#B5B3AC]"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
