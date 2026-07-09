import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#D90B1C]">
      <span className="h-1.5 w-1.5 rounded-sm bg-[#D90B1C]" />
      {children}
    </div>
  );
}

export function PrimaryCta({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-sm bg-[#0B0B0C] px-6 py-3.5 text-sm font-semibold text-[#FAFAF9] transition hover:bg-[#D90B1C]"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function GhostCta({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-sm border border-[#0B0B0C] px-6 py-3.5 text-sm font-semibold text-[#0B0B0C] transition hover:border-[#D90B1C] hover:text-[#D90B1C]"
    >
      {children}
    </Link>
  );
}
