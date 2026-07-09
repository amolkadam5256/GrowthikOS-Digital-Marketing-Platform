import Link from "next/link";
import type { ReactNode } from "react";
import { contact, navLinks, socialLinks } from "../data";

const serviceLinks = [
  "SEO Services",
  "Google Ads",
  "Website Development",
  "Social Media Marketing",
  "Branding and Design",
  "E-commerce Solutions",
];

export function Footer() {
  return (
    <footer className="border-t border-[#1c1c1d] bg-[#0B0B0C] py-16 text-neutral-400">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 border-b border-[#1c1c1d] pb-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 font-display text-xl font-bold text-white"
            >
              <span className="h-2.5 w-2.5 rounded-sm bg-[#D90B1C]" />
              Growthik Media
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7">
              Helping Pune-based brands grow online with SEO, Google Ads, and
              websites built to convert. No jargon, just measurable results.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <div>
                <a
                  href={contact.phoneHref}
                  className="text-white hover:text-[#D90B1C]"
                >
                  {contact.phone}
                </a>
              </div>
              <div>
                <a
                  href={contact.emailHref}
                  className="text-white hover:text-[#D90B1C]"
                >
                  {contact.email}
                </a>
              </div>
              <div>{contact.address}</div>
            </div>
          </div>
          <FooterColumn
            title="Quick links"
            items={navLinks.map((link) => link.label)}
          />
          <FooterColumn title="Services" items={serviceLinks} />
          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.08em] text-neutral-500">
              Business hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <span>Mon - Fri</span>
                <span>10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <Link
              href="#contact"
              className="mt-6 inline-flex rounded-sm bg-[#D90B1C] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Get started today
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div>Copyright 2026 Growthik Media. All rights reserved.</div>
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <SocialLink
                  key={link.label}
                  label={link.label}
                  icon={<Icon className="h-4 w-4" />}
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.08em] text-neutral-500">
        {title}
      </h3>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item}>
            <a href="#home" className="text-neutral-300 hover:text-[#D90B1C]">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <a
      href="#home"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2a2a2b] text-neutral-300 transition hover:border-[#D90B1C] hover:text-[#D90B1C]"
    >
      {icon}
    </a>
  );
}
