"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, Calculator, Calendar, CreditCard, Settings, User } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-brand-ink/80 backdrop-blur-sm transition-opacity flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl transform overflow-hidden rounded-xl bg-brand-ink border border-white/10 shadow-2xl transition-all">
        <Command label="Global Command Menu" shouldFilter={true}>
          <div className="flex items-center border-b border-white/10 px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 text-white/50" />
            <Command.Input 
              autoFocus 
              placeholder="What do you need?" 
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/40 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 text-sm text-white/70">
            <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
            <Command.Group heading="Suggestions" className="overflow-hidden px-1 py-2 font-medium text-white/40">
              <Command.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-primary-600 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </Command.Item>
              <Command.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-primary-600 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                <Search className="mr-2 h-4 w-4" />
                <span>Search SEO Reports</span>
              </Command.Item>
              <Command.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-primary-600 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                <Calculator className="mr-2 h-4 w-4" />
                <span>ROI Calculator</span>
              </Command.Item>
            </Command.Group>
            <Command.Separator className="-mx-1 my-1 h-px bg-white/10" />
            <Command.Group heading="Settings" className="overflow-hidden px-1 py-2 font-medium text-white/40">
              <Command.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-primary-600 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <Command.Shortcut className="ml-auto text-xs tracking-widest text-white/40">⌘P</Command.Shortcut>
              </Command.Item>
              <Command.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-primary-600 aria-selected:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <Command.Shortcut className="ml-auto text-xs tracking-widest text-white/40">⌘S</Command.Shortcut>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
