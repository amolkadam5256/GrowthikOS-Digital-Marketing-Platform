import { contact } from "../data";

export function TopBar() {
  return (
    <div className="bg-[#0B0B0C] text-xs text-neutral-300">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-6 font-mono lg:px-8">
        <div className="flex gap-5">
          <a href={contact.phoneHref} className="hover:text-[#D90B1C]">
            {contact.phone}
          </a>
          <a
            href={contact.emailHref}
            className="hidden hover:text-[#D90B1C] sm:inline"
          >
            {contact.email}
          </a>
        </div>
        <span className="hidden sm:inline">Warje, Pune 411058</span>
      </div>
    </div>
  );
}
