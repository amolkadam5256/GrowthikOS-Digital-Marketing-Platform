import { capabilities, stats } from "../data";
import { Eyebrow } from "../ui";

export function StorySection() {
  return (
    <section id="about" className="border-b border-[#E4E2DD] py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Eyebrow>Growth engineering</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Marketing systems built like products, not one-off campaigns.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#6B7280]">
            Growthik Media is a Pune-based digital marketing partner led by
            founder Amol Kadam. The team blends development, search, analytics,
            and performance marketing so your website becomes a measurable
            growth engine.
          </p>
          <p className="mt-4 text-base leading-8 text-[#6B7280]">
            The work starts with tracking and technical health: Core Web Vitals,
            GA4, GTM, Search Console, schema, local intent, and conversion
            paths. Only then do campaigns scale.
          </p>
          <div className="mt-9 grid border-l border-t border-[#E4E2DD] sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-r border-[#E4E2DD] p-5"
              >
                <div className="font-display text-3xl font-bold text-[#D90B1C]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs leading-5 text-[#6B7280]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md bg-[#0B0B0C] p-8 text-[#FAFAF9]">
          <p className="font-display text-xl font-semibold leading-8">
            {
              '"Marketing works best when it is measurable, fast, and built on a site that search engines and customers both understand."'
            }
          </p>
          <div className="mt-7 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D90B1C] font-display font-bold">
              AK
            </div>
            <div>
              <div className="font-semibold">Amol Kadam</div>
              <div className="font-mono text-xs text-neutral-400">
                Founder, Growthik Media
              </div>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <span
                  key={capability.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2b] px-3 py-1.5 font-mono text-xs text-neutral-300"
                >
                  <Icon className="h-3.5 w-3.5 text-[#D90B1C]" />
                  {capability.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
