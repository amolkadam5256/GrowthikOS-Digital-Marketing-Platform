"use client";

import { useEffect, useState } from "react";

const domains = [
  "yourbrand.in",
  "clientsite.co.in",
  "punestartup.com",
  "yourbrand.in",
];

const metrics = [
  { label: "SEO Health Score", value: "78", delta: "+24" },
  { label: "Core Web Vitals", value: "Pass", delta: "LCP 1.2s" },
  { label: "Local Pack Rank", value: "#2", delta: "+9" },
  { label: "Broken Links", value: "3", delta: "flagged", warning: true },
];

export function GrowthReadout() {
  const [domainIndex, setDomainIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDomainIndex((current) => (current + 1) % domains.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside className="overflow-hidden rounded-md bg-[#0B0B0C] text-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between border-b border-[#232324] px-4 py-3 font-mono text-xs text-neutral-500">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        </div>
        <span className="text-neutral-300">audit.growthikmedia.com</span>
        <span className="text-[#16A34A]">live</span>
      </div>

      <div className="p-6">
        <div className="mb-5 flex items-center gap-2 font-mono text-sm text-[#16A34A]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#16A34A]" />
          scanning {domains[domainIndex]} ...
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-[#232324] bg-[#232324]">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-[#141415] p-4">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-neutral-500">
                {metric.label}
              </div>
              <div className="flex flex-wrap items-baseline gap-2 font-display text-2xl font-bold">
                <span className={metric.warning ? "text-[#D90B1C]" : ""}>
                  {metric.value}
                </span>
                <span
                  className={`font-mono text-xs font-medium ${
                    metric.warning ? "text-neutral-500" : "text-[#16A34A]"
                  }`}
                >
                  {metric.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-2 border-t border-[#232324] pt-4 font-mono text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            Verdict: <strong className="text-[#16A34A]">Ready to rank</strong>{" "}
            - 3 fixes queued
          </span>
          <span className="text-neutral-500">GA4 / GTM connected</span>
        </div>
      </div>
    </aside>
  );
}
