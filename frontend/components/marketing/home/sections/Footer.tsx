import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const groups = [
    { title: "Products", links: ["AI", "Marketing", "Development", "Automation", "Marketplace", "Integrations"] },
    { title: "Company", links: ["Careers", "Blog", "Docs", "API", "Legal"] },
  ];
  return (
    <footer className="border-t border-brand-ink/10 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/brand/growthik-media-brand-mark.svg" alt="GrowthikOS" width={32} height={32} />
              <span className="text-xl font-black">GrowthikOS</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm font-semibold text-brand-ink/70">
              The AI-powered business operating system. Build, manage, and scale your growth.
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h4 className="font-bold">{group.title}</h4>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-brand-ink/60">
                {group.links.map((link) => (
                  <li key={link}><Link href="#" className="hover:text-primary-600">{link}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}