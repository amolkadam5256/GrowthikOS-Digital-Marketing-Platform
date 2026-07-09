"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { serviceGroups } from "../data";

export function ServiceExplorer() {
  const [activeId, setActiveId] = useState(serviceGroups[0].id);
  const activeGroup =
    serviceGroups.find((group) => group.id === activeId) ?? serviceGroups[0];

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist">
        {serviceGroups.map((group) => (
          <button
            key={group.id}
            type="button"
            role="tab"
            aria-selected={activeId === group.id}
            onClick={() => setActiveId(group.id)}
            className={`rounded-full border px-4 py-2 font-mono text-xs transition ${
              activeId === group.id
                ? "border-[#0B0B0C] bg-[#0B0B0C] text-[#FAFAF9]"
                : "border-[#E4E2DD] text-[#6B7280] hover:border-[#D90B1C] hover:text-[#D90B1C]"
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div className="grid overflow-hidden border border-[#E4E2DD] bg-[#E4E2DD] sm:grid-cols-2 lg:grid-cols-4">
        {activeGroup.services.map((service, index) => (
          <a
            key={service}
            href="#contact"
            className="group flex min-h-32 flex-col justify-between bg-white p-6 transition hover:bg-[#0B0B0C]"
          >
            <div>
              <div className="mb-4 font-mono text-xs text-[#D90B1C]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-base font-semibold text-[#0B0B0C] group-hover:text-[#FAFAF9]">
                {service}
              </h3>
            </div>
            <div className="mt-5 flex items-center gap-1 font-mono text-xs text-[#6B7280] group-hover:text-[#D90B1C]">
              View service <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
