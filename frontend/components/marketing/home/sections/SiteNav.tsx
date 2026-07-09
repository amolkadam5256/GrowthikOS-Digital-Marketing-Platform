import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navLinks } from "../data";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E2DD] bg-[#FAFAF9]/95 backdrop-blur">
      <div className="mx-auto flex h-[74px] max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-xl font-bold"
        >
          <span className="h-2.5 w-2.5 rounded-sm bg-[#D90B1C]" />
          Growthik Media
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-2 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#D90B1C] after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 rounded-sm bg-[#0B0B0C] px-4 py-2.5 text-sm font-semibold text-[#FAFAF9] transition hover:bg-[#D90B1C]"
        >
          Free Strategy Call
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
