import Link from "next/link";
import Image from "next/image";
import { Search, Globe2, Bell, LayoutDashboard, ChevronDown } from "lucide-react";

export function SiteHeader() {
  const navItems = [
    "Platform", "Solutions", "Resources", "Enterprise", "Pricing"
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-ink/95 text-white backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 pr-4">
          <Image src="/brand/growthik-media-brand-mark.svg" alt="GrowthikOS" width={32} height={32} className="h-8 w-8" />
          <span className="text-lg font-black">GrowthikOS</span>
        </Link>

        <nav className="hidden flex-1 items-center gap-6 overflow-x-auto text-sm font-semibold text-white/70 xl:flex">
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="flex shrink-0 items-center gap-1 transition hover:text-white">
              {item}
              {["Platform", "Solutions", "Resources"].includes(item) && <ChevronDown className="h-3.5 w-3.5" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 pl-4 text-sm font-semibold text-white/75">
          <button className="flex h-9 items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-3 text-xs text-white/50 transition hover:bg-white/10 hover:text-white xl:w-48 xl:justify-between">
            <span className="flex items-center gap-2"><Search className="h-4 w-4" /> <span className="hidden xl:inline">Search...</span></span>
            <kbd className="hidden rounded-sm bg-white/10 px-1.5 py-0.5 text-[10px] xl:inline">Ctrl+K</kbd>
          </button>
          
          <LanguageSwitcher />
          <button className="relative hidden h-9 w-9 items-center justify-center rounded-sm transition hover:bg-white/10 hover:text-white sm:flex">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
          </button>
          <Link href="/dashboard" className="hidden h-9 w-9 items-center justify-center rounded-sm transition hover:bg-white/10 hover:text-white sm:flex"><LayoutDashboard className="h-5 w-5" /></Link>
          
          <div className="hidden h-5 w-px bg-white/20 sm:block" />
          
          <Link href="/login" className="hidden transition hover:text-white sm:block">Sign In</Link>
          <Link href="/signup" className="rounded-sm bg-primary-600 px-4 py-2 text-white transition hover:bg-primary-500">Get Started</Link>
        </div>
      </div>
    </header>
  );
}