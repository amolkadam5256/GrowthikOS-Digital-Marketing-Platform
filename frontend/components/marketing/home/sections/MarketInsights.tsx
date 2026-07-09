import { Eyebrow, PrimaryCta } from "../ui";

const insights = [
  [
    "01",
    "Local intent is surging",
    "Near me and best in Pune searches keep reshaping local lead generation.",
  ],
  [
    "02",
    "Digital adoption is high",
    "Pune buyers compare, review, and shortlist across search and social before calling.",
  ],
  [
    "03",
    "Competition is intensifying",
    "More local brands are investing seriously in SEO, ads, and site performance.",
  ],
];

export function MarketInsights() {
  return (
    <section id="work" className="border-b border-[#E4E2DD] py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Eyebrow>Pune market, 2026</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight">
            Why Pune brands need a digital-first strategy now.
          </h2>
          <p className="mt-5 leading-8 text-[#6B7280]">
            {"Pune is one of India's most active startup and business hubs. A"}
            growing share of high-intent searches include local terms such as
            {
              ' "near me" or "best in Pune", which means traditional marketing alone cannot capture demand.'
            }
          </p>
          <p className="mt-4 leading-8 text-[#6B7280]">
            Whether you run a manufacturing unit in PCMC or a retail brand in
            Koregaon Park, your customers are searching right now. Growthik
            helps turn that local relevance into measurable digital visibility.
          </p>
          <div className="mt-7">
            <PrimaryCta href="#services">Grow your presence in Pune</PrimaryCta>
          </div>
        </div>
        <div className="overflow-hidden border border-[#E4E2DD] bg-[#E4E2DD]">
          {insights.map(([num, title, body]) => (
            <article key={num} className="flex gap-5 bg-white p-6">
              <div className="w-14 shrink-0 font-display text-2xl font-bold text-[#D90B1C]">
                {num}
              </div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#6B7280]">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
