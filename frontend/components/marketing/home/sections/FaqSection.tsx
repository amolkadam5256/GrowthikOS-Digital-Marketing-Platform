import { FaqAccordion } from "../interactive/FaqAccordion";
import { Eyebrow } from "../ui";

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#F0EFEC] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Help center</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Frequently asked questions.
          </h2>
          <p className="mt-4 leading-7 text-[#6B7280]">
            Straight answers about pricing, timelines, SEO, ads, AI search, and
            how Growthik works.
          </p>
        </div>
        <FaqAccordion />
      </div>
    </section>
  );
}
