import { CheckCircle2 } from "lucide-react";
import { GrowthReadout } from "../interactive/GrowthReadout";
import { heroBadges } from "../data";
import { Eyebrow, GhostCta, PrimaryCta } from "../ui";

export function Hero() {
  return (
    <section id="home" className="border-b border-[#E4E2DD] py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <Eyebrow>{"Pune's digital marketing agency since 2019"}</Eyebrow>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-normal text-[#0B0B0C] sm:text-5xl lg:text-6xl">
            Best digital marketing agency in Pune, built for{" "}
            <span className="text-[#D90B1C]">ROI-driven growth</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6B7280]">
            Growthik helps businesses across Baner, Hinjewadi, Wakad, PCMC, and
            Warje get more qualified traffic, cleaner leads, and real revenue
            through SEO, Google Ads, and websites engineered to convert.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryCta href="#contact">Book your free strategy call</PrimaryCta>
            <GhostCta href="#work">View case studies</GhostCta>
          </div>
          <div className="mt-10 flex flex-wrap gap-5">
            {heroBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm font-semibold"
              >
                <CheckCircle2 className="h-4 w-4 text-[#D90B1C]" />
                {badge}
              </div>
            ))}
          </div>
        </div>
        <GrowthReadout />
      </div>
    </section>
  );
}
