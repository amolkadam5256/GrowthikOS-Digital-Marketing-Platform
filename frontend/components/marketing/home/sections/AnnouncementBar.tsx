import Link from "next/link";
import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="border-b border-primary-900/10 bg-primary-50 text-primary-900">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-4 text-xs font-bold sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-2">
            <span className="rounded-sm bg-primary-600 px-2 py-0.5 text-[10px] uppercase text-white">New</span>
            <Sparkles className="h-4 w-4 text-primary-600" aria-hidden="true" />
            AI Agent Released: Automate your SEO audits instantly
          </p>
          <div className="hidden h-4 w-px bg-primary-900/20 sm:block" />
          <Link href="/templates" className="hidden hover:underline sm:block">New Templates</Link>
          <div className="hidden h-4 w-px bg-primary-900/20 sm:block" />
          <Link href="/webinar" className="hidden hover:underline sm:block">Upcoming Webinar</Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500"></span>
            </span>
            All systems operational
          </span>
        </div>
      </div>
    </div>
  );
}