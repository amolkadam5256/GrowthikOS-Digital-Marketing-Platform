import { seoCards } from "../data";
import { Eyebrow } from "../ui";

export function SeoExpertise() {
  return (
    <section className="border-b border-[#E4E2DD] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Search expertise</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            SEO services in Pune built on technical precision.
          </h2>
          <p className="mt-4 leading-7 text-[#6B7280]">
            Growthik does not just chase keywords. The team builds the
            technical and local-authority foundation that makes ranking
            possible.
          </p>
        </div>
        <div className="grid overflow-hidden border border-[#E4E2DD] bg-[#E4E2DD] sm:grid-cols-2 lg:grid-cols-5">
          {seoCards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.title} className="bg-white p-6">
                <Icon className="mb-5 h-10 w-10 text-[#D90B1C]" />
                <h3 className="font-display text-base font-bold">
                  {card.title}
                </h3>
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
