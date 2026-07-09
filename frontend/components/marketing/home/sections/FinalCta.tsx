import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { contact } from "../data";
import { Eyebrow } from "../ui";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="bg-[#0B0B0C] py-24 text-center text-[#FAFAF9]"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-4 flex justify-center">
          <Eyebrow>{"Let's build your growth engine"}</Eyebrow>
        </div>
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl">
          Ready to turn your website into a lead-generating asset?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-neutral-400">
          Book a free 30-minute strategy call. Growthik will audit your current
          setup and hand you a practical roadmap with no obligation.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 rounded-sm bg-[#D90B1C] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0B0B0C]"
          >
            Book your free strategy call
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="#work"
            className="inline-flex items-center rounded-sm border border-neutral-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#D90B1C] hover:text-[#D90B1C]"
          >
            View case studies
          </Link>
        </div>
      </div>
    </section>
  );
}
