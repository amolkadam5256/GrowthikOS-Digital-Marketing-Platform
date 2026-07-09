"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqItems } from "../data";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-[#E4E2DD]">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="border-b border-[#E4E2DD]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 px-1 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-5">
                <span className="font-mono text-sm text-[#D90B1C]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-semibold text-[#0B0B0C]">
                  {item.question}
                </span>
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition ${
                  isOpen
                    ? "border-[#D90B1C] bg-[#D90B1C] text-white"
                    : "border-[#E4E2DD] text-[#0B0B0C]"
                }`}
              >
                <Plus
                  className={`h-4 w-4 transition ${isOpen ? "rotate-45" : ""}`}
                />
              </span>
            </button>

            {isOpen ? (
              <p className="max-w-3xl px-12 pb-7 text-sm leading-7 text-[#6B7280]">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
