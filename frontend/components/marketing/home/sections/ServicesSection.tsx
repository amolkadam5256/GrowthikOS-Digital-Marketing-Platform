import { ServiceExplorer } from "../interactive/ServiceExplorer";
import { Eyebrow, GhostCta, PrimaryCta } from "../ui";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-[#E4E2DD] bg-[#F0EFEC] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Full-funnel digital marketing, divided into systems your team can
            actually manage.
          </h2>
          <p className="mt-4 leading-7 text-[#6B7280]">
            Choose the growth layer you need now, then expand as the data
            proves what works.
          </p>
        </div>
        <ServiceExplorer />
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryCta href="#contact">Explore all services</PrimaryCta>
          <GhostCta href="#contact">Get started today</GhostCta>
        </div>
      </div>
    </section>
  );
}
