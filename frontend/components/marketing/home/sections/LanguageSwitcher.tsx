"use client";

import { useState, useRef, useEffect } from "react";
import { Globe2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { locales, localeMeta, stripLocaleFromPathname } from "@/i18n/config";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (code: string) => {
    const purePath = stripLocaleFromPathname(pathname);
    const newPath = code === "en" ? purePath : \`/\${code}\${purePath === "/" ? "" : purePath}\`;
    router.push(newPath || "/");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-sm transition hover:bg-white/10 hover:text-white sm:flex"
      >
        <Globe2 className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md border border-white/10 bg-brand-ink py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[100]">
          <div className="max-h-60 overflow-auto">
            {locales.map((code) => {
              const meta = localeMeta[code];
              return (
                <button
                  key={code}
                  onClick={() => changeLanguage(code)}
                  className="flex w-full items-center px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                >
                  <span className="mr-3">{meta.flag}</span>
                  <span className="flex-1 text-left">{meta.nativeLabel}</span>
                  <span className="text-xs text-white/40">{meta.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
