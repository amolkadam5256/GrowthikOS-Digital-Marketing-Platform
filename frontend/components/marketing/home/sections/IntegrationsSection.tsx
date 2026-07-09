export function IntegrationsSection() {
  const logos = ["Google", "Meta", "Microsoft", "LinkedIn", "OpenAI", "Claude", "Gemini", "Stripe", "Razorpay", "Shopify", "WooCommerce", "WordPress", "Slack", "Discord", "Zapier", "Make", "n8n", "HubSpot"];
  return (
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-black text-brand-ink sm:text-4xl">Plays nicely with others</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((logo) => (
            <div key={logo} className="flex h-16 w-40 items-center justify-center rounded-lg border border-brand-ink/10 bg-brand-cream/50 font-bold text-brand-ink/70">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}