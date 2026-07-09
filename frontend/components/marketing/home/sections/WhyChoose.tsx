import { whyCards } from "../data";
import { Eyebrow } from "../ui";

export function WhyChoose() {
  return (
    <section className="border-b border-[#E4E2DD] bg-[#F0EFEC] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Local expertise</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Why Pune businesses choose Growthik.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {whyCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-md border border-[#E4E2DD] bg-white p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#FCE9E9]">
                  <Icon className="h-5 w-5 text-[#D90B1C]" />
                </div>
                <h3 className="font-display text-lg font-bold">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  {card.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
