import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  Globe2,
  GraduationCap,
  Handshake,
  HeartPulse,
  LineChart,
  LockKeyhole,
  Mail,
  Menu,
  MessageCircle,
  Rocket,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

import { footerGroups } from "./data";
import { locales, localeMeta, localizePathname, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

const trustedLogos = [
  "Healthcare",
  "Real Estate",
  "Education",
  "E-commerce",
  "Finance",
  "Manufacturing",
  "Agencies",
  "Startups",
];

const featureCards = [
  {
    icon: Search,
    title: "Search intelligence",
    body: "Track keywords, technical SEO, backlinks, and AI citations from one project workspace.",
  },
  {
    icon: Bot,
    title: "AI growth agent",
    body: "Turn crawls, campaigns, and analytics into recommended next actions for your team.",
  },
  {
    icon: BarChart3,
    title: "Client reporting",
    body: "Generate readable white-label reports with KPIs, wins, risks, and monthly priorities.",
  },
  {
    icon: Zap,
    title: "Automation layer",
    body: "Schedule audits, alerts, content checks, and follow-ups without manual handoffs.",
  },
];

const productModules = [
  "SEO Audit",
  "Rank Tracking",
  "AI Visibility",
  "Ads Intelligence",
  "CRM",
  "Automation",
  "Analytics",
  "Reports",
  "Website Builder",
  "Lead Generation",
  "Social Media",
  "API",
];

const results = [
  { value: "91.2%", label: "audit completion rate" },
  { value: "5.58M", label: "keywords monitored" },
  { value: "94,985", label: "pages analyzed" },
  { value: "28.7k", label: "reports generated" },
];

const useCases = [
  { icon: Users, label: "Agencies" },
  { icon: Building2, label: "Enterprise" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: CircleDollarSign, label: "Finance" },
];

const enterpriseItems = [
  "Unified API access",
  "SSO and role management",
  "White-label reporting",
  "Audit logs",
  "Dedicated success support",
  "Custom client portals",
];

const workflowSteps = [
  "Connect website, search, ad, and analytics data.",
  "Let AI identify risks, opportunities, and priority work.",
  "Ship actions into reports, tasks, alerts, and campaigns.",
];

const languageOptions = locales.map((locale) => ({
  code: locale,
  label: localeMeta[locale].label,
}));

type MarketingHomeProps = {
  locale: Locale;
  messages: Messages;
};

export function MarketingHome({ locale, messages }: MarketingHomeProps) {
  const t = messages.home;
  const common = messages.common;

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink">
      <AnnouncementBar announcement={t.announcement} getStarted={common.get_started} />
      <SiteHeader locale={locale} t={t} common={common} />
      <main>
        <HeroSection t={t} />
        <TrustedBy label={t.trusted_by} />
        <PlatformSection t={t} />
        <AiWorkflow t={t} />
        <ProductModules t={t} />
        <DashboardShowcase t={t} />
        <AgentSection t={t} />
        <ResultsSection t={t} />
        <UseCases t={t} />
        <EnterpriseSection t={t} />
        <CommunitySection t={t} />
        <FinalCta t={t} />
      </main>
      <MegaFooter localeName={common.footer_language} />
    </div>
  );
}

function AnnouncementBar({
  announcement,
  getStarted,
}: {
  announcement: string;
  getStarted: string;
}) {
  return (
    <div className="border-b border-primary-900/10 bg-primary-50 text-primary-900">
      <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-4 text-xs font-bold sm:px-6 lg:px-8">
        <p className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary-600" aria-hidden="true" />
          {announcement}
        </p>
        <Link
          href="/signup"
          className="hidden rounded-sm bg-primary-600 px-4 py-2 text-white transition hover:bg-primary-500 sm:inline-flex"
        >
          {getStarted}
        </Link>
      </div>
    </div>
  );
}

function SiteHeader({
  locale,
  t,
  common,
}: {
  locale: Locale;
  t: Messages["home"];
  common: Messages["common"];
}) {
  const navItems = [
    { label: t.nav_platform, href: "#platform", hasMenu: true },
    { label: t.nav_ai_agent, href: "#ai-agent" },
    { label: t.nav_modules, href: "#modules" },
    { label: t.nav_enterprise, href: "#enterprise" },
    { label: t.nav_resources, href: "#resources", hasMenu: true },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-ink/95 text-white backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={localizePathname("/", locale)} className="flex items-center gap-3">
          <Image
            src="/brand/growthik-media-brand-mark.svg"
            alt="Growthik Media"
            width={34}
            height={34}
            priority
            className="h-8 w-8"
          />
          <span className="text-lg font-black">GrowthikOS</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/70 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              {item.label}
              {item.hasMenu ? (
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 text-sm font-semibold text-white/75 md:flex">
          <Search className="h-5 w-5" aria-label="Search" />
          <div className="group relative">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-white/75 transition hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/70"
              aria-label={common.language_switcher}
              aria-haspopup="true"
            >
              <Globe2 className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="invisible absolute right-0 top-full mt-3 w-64 translate-y-2 rounded-sm border border-white/10 bg-brand-ink p-2 opacity-0 shadow-2xl shadow-black/30 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="grid max-h-80 gap-1 overflow-y-auto pr-1">
                {languageOptions.map((language) => (
                  <Link
                    key={language.code}
                    href={localizePathname("/", language.code)}
                    className={`flex items-center justify-between rounded-sm px-3 py-2 text-sm transition hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none ${
                      language.code === locale
                        ? "bg-white/10 text-white"
                        : "text-white/75"
                    }`}
                    hrefLang={language.code}
                    aria-current={language.code === locale ? "page" : undefined}
                  >
                    <span>{language.label}</span>
                    <span className="text-xs font-black uppercase text-white/35">
                      {language.code}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/login" className="transition hover:text-white">
            {common.sign_in}
          </Link>
          <Link
            href="/signup"
            className="rounded-sm bg-primary-600 px-4 py-2 text-white transition hover:bg-primary-500"
          >
            {common.sign_up}
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-sm border border-white/30 text-white md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

function HeroSection({ t }: { t: Messages["home"] }) {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 brand-hero-gradient" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="rounded-sm border border-primary-500/40 bg-primary-500/10 px-3 py-2 text-xs font-black uppercase text-primary-100">
              {t.hero_badge}
            </span>
            <span className="rounded-sm border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/70">
              {t.hero_support_badge}
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
            {t.hero_title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/75">
            {t.hero_description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary-600 px-6 text-sm font-black text-white transition hover:bg-primary-500"
            >
              {t.primary_cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/login"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-6 text-sm font-black text-white transition hover:border-white hover:bg-white/10"
            >
              {t.secondary_cta}
            </Link>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["94", "SEO score checks"],
              ["217+", "AI signals"],
              ["28.7k", "reports"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-sm border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-xs font-semibold text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-md border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <DashboardPreview />
          </div>
          <div className="absolute -bottom-8 left-8 right-8 hidden rounded-md border border-white/10 bg-black/70 p-4 shadow-2xl backdrop-blur sm:block">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-primary-100">
                  AI recommendation
                </p>
                <p className="mt-2 text-sm font-semibold text-white/75">
                  Fix 14 technical issues before your next crawl window.
                </p>
              </div>
              <Bot className="h-10 w-10 text-primary-100" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-sm bg-[#101010] p-4 text-white">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/growthik-media-brand-mark.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <div>
            <p className="text-sm font-black">GrowthikOS Command</p>
            <p className="text-xs text-white/45">example.com project</p>
          </div>
        </div>
        <span className="rounded-sm bg-success-500/15 px-3 py-1 text-xs font-bold text-success-500">
          Live
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {["SEO", "AI", "Ads"].map((label, index) => (
          <div key={label} className="rounded-sm border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-bold text-white/45">{label}</p>
            <p className="mt-3 text-3xl font-black">{[92, 74, 61][index]}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-primary-500"
                style={{ width: `${[92, 74, 61][index]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_180px]">
        <div className="rounded-sm border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-black">Organic growth</p>
            <LineChart className="h-5 w-5 text-primary-100" aria-hidden="true" />
          </div>
          <div className="mt-6 flex h-32 items-end gap-2">
            {[34, 52, 41, 68, 59, 81, 74, 92].map((height) => (
              <div
                key={height}
                className="w-full rounded-t-sm bg-primary-500/80"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-sm border border-white/10 bg-primary-600 p-4">
          <p className="text-sm font-black">Priority work</p>
          <ul className="mt-4 space-y-3 text-xs font-semibold text-white/80">
            <li>Core Web Vitals</li>
            <li>AI citation gaps</li>
            <li>Missing schema</li>
            <li>Lead page speed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function TrustedBy({ label }: { label: string }) {
  return (
    <section className="border-b border-brand-ink/10 bg-white py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-black uppercase text-brand-ink/45">
          {label}
        </p>
        <div className="mt-5 overflow-hidden">
          <div className="marquee-track flex w-max gap-4">
            {[...trustedLogos, ...trustedLogos].map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="min-w-40 rounded-sm border border-brand-ink/10 bg-brand-cream px-5 py-3 text-center text-sm font-black text-brand-ink/70"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformSection({ t }: { t: Messages["home"] }) {
  return (
    <section id="platform" className="bg-brand-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-sm font-black uppercase text-primary-600">
              {t.platform_eyebrow}
            </span>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight sm:text-5xl">
              {t.platform_title}
            </h2>
          </div>
          <p className="max-w-2xl text-base font-semibold leading-8 text-brand-ink/70">
            {t.platform_description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-md border border-brand-ink/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-xl"
            >
              <feature.icon className="h-7 w-7 text-primary-600" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-black">{feature.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-brand-ink/65">
                {feature.body}
              </p>
              <Link
                href="/signup"
                className="mt-5 inline-flex items-center gap-2 text-sm font-black text-primary-600"
              >
                Explore
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiWorkflow({ t }: { t: Messages["home"] }) {
  return (
    <section className="bg-brand-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="text-sm font-black uppercase text-primary-100">
            {t.ai_workflow_eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            {t.ai_workflow_title}
          </h2>
          <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-white/70">
            {t.ai_workflow_description}
          </p>
          <div className="mt-8 space-y-4">
            {workflowSteps.map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-primary-600 text-sm font-black">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm font-semibold leading-6 text-white/75">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-md border border-white/10 bg-white/5 p-5">
            <video
              className="aspect-square w-full rounded-sm object-cover"
              src="/robot-mascot.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="GrowthikOS AI agent animation"
            />
          </div>
          <div className="grid gap-4">
            {["Predict ranking losses", "Detect AI citations", "Write next actions"].map(
              (item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/5 p-5">
                  <Sparkles className="h-6 w-6 text-primary-100" aria-hidden="true" />
                  <p className="mt-5 text-lg font-black">{item}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/60">
                    Turn platform data into a focused recommendation your team can ship.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductModules({ t }: { t: Messages["home"] }) {
  return (
    <section id="modules" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-sm font-black uppercase text-primary-600">
            {t.modules_eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            {t.modules_title}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productModules.map((module, index) => (
            <Link
              key={module}
              href="/signup"
              className="group rounded-md border border-brand-ink/10 bg-brand-cream p-5 transition hover:-translate-y-1 hover:border-primary-500/50 hover:bg-primary-50"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-lg font-black">{module}</span>
                <span className="grid h-8 w-8 place-items-center rounded-sm bg-white text-sm font-black text-primary-600">
                  {index + 1}
                </span>
              </div>
              <p className="mt-5 text-sm font-semibold leading-6 text-brand-ink/65">
                Connect insights, tasks, alerts, and reports without leaving the
                project context.
              </p>
              <ArrowRight
                className="mt-5 h-4 w-4 text-primary-600 transition group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardShowcase({ t }: { t: Messages["home"] }) {
  return (
    <section className="bg-brand-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase text-primary-600">
              {t.dashboard_eyebrow}
            </span>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              {t.dashboard_title}
            </h2>
            <p className="mt-5 text-base font-semibold leading-8 text-brand-ink/70">
              {t.dashboard_description}
            </p>
          </div>
          <div className="rounded-md border border-brand-ink/10 bg-brand-ink p-3 shadow-2xl">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentSection({ t }: { t: Messages["home"] }) {
  return (
    <section id="ai-agent" className="bg-brand-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase text-primary-100">
              {t.agent_eyebrow}
            </span>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              {t.agent_title}
            </h2>
            <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-white/70">
              {t.agent_description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Summarize crawl risks", "Draft a client update", "Prioritize pages", "Create ad angles"].map(
                (prompt) => (
                  <div key={prompt} className="rounded-sm border border-white/10 bg-white/5 p-4 text-sm font-bold text-white/75">
                    {prompt}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/5 p-5">
            <div className="rounded-sm bg-black p-5">
              <div className="flex items-center gap-3">
                <Bot className="h-10 w-10 text-primary-100" aria-hidden="true" />
                <div>
                  <p className="text-xl font-black">Growthik Agent</p>
                  <p className="text-sm font-semibold text-white/50">Reasoning over project data</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Traffic dropped after 6 pages lost schema coverage.",
                  "Two competitors gained AI citations for your commercial terms.",
                  "Recommended next step: fix schema and publish FAQ block.",
                ].map((line) => (
                  <p key={line} className="rounded-sm bg-white/5 p-4 text-sm font-semibold leading-6 text-white/70">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsSection({ t }: { t: Messages["home"] }) {
  return (
    <section className="bg-primary-600 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <span className="text-sm font-black uppercase text-white/70">
            {t.results_eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight">
            {t.results_title}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result) => (
            <div key={result.label} className="rounded-md border border-white/20 bg-white/10 p-5">
              <p className="text-3xl font-black">{result.value}</p>
              <p className="mt-2 text-sm font-semibold text-white/75">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases({ t }: { t: Messages["home"] }) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-sm font-black uppercase text-primary-600">
            {t.use_cases_eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            {t.use_cases_title}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <Link
              key={item.label}
              href="/signup"
              className="flex items-center justify-between rounded-md border border-brand-ink/10 bg-brand-cream p-5 transition hover:border-primary-500/50 hover:bg-primary-50"
            >
              <span className="flex items-center gap-4 text-lg font-black">
                <item.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                {item.label}
              </span>
              <ArrowRight className="h-4 w-4 text-primary-600" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnterpriseSection({ t }: { t: Messages["home"] }) {
  return (
    <section id="enterprise" className="bg-brand-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-black uppercase text-primary-100">
              {t.enterprise_eyebrow}
            </span>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              {t.enterprise_title}
            </h2>
            <p className="mt-5 text-base font-semibold leading-8 text-white/70">
              {t.enterprise_description}
            </p>
            <Link
              href="/signup"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary-600 px-6 text-sm font-black text-white transition hover:bg-primary-500"
            >
              {t.enterprise_cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {enterpriseItems.map((item) => (
              <div key={item} className="flex gap-4 rounded-md border border-white/10 bg-white/5 p-5">
                <Check className="h-5 w-5 shrink-0 text-success-500" aria-hidden="true" />
                <span className="text-sm font-bold text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunitySection({ t }: { t: Messages["home"] }) {
  return (
    <section className="bg-brand-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="text-sm font-black uppercase text-primary-600">
            {t.community_eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            {t.community_title}
          </h2>
          <p className="mt-5 text-base font-semibold leading-8 text-brand-ink/70">
            {t.community_description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[MessageCircle, Mail, Handshake, Rocket].map((Icon, index) => (
              <span
                key={index}
                className="grid h-11 w-11 place-items-center rounded-sm bg-primary-600 text-white"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "/images/blog/seo-services-in-pune-rank-1-google-growthik-media-thumbnail.png",
            "/images/blog/b2b-content-marketing-strategy-pune-india-2026.png",
            "/images/blog/fix-high-bounce-rate-pune-website-seo-2026.jpg",
            "/og-image.png",
          ].map((src, index) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-brand-ink/10 bg-white">
              <Image
                src={src}
                alt={`GrowthikOS resource preview ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 280px, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ t }: { t: Messages["home"] }) {
  return (
    <section className="relative overflow-hidden bg-brand-ink px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 brand-cta-gradient" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <span className="text-sm font-black uppercase text-primary-100">
            {t.final_eyebrow}
          </span>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            {t.final_title}
          </h2>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/75">
            {t.final_description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/signup"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary-600 px-6 text-sm font-black text-white transition hover:bg-primary-500"
          >
            {t.primary_cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/login"
            className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-6 text-sm font-black text-white transition hover:bg-white/10"
          >
            {t.secondary_cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

function MegaFooter({ localeName }: { localeName: string }) {
  const social = [Star, Globe2, Activity, LockKeyhole];

  return (
    <footer id="resources" className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-black uppercase text-white">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="/signup"
                      className="text-sm font-medium text-white/60 transition hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/15 pt-8 text-sm text-white/60 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/brand/growthik-media-wordmark.svg"
                alt="Growthik Media"
                width={150}
                height={40}
                className="h-auto w-36 rounded-sm bg-white px-3 py-2"
              />
              <p className="font-semibold text-white/75">
                (c) 2026 Growthik Media. GrowthikOS Digital Marketing Platform.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-5">
              {["Legal Info", "Privacy Policy", "Cookie Settings", "Terms of Service"].map(
                (item) => (
                  <Link key={item} href="/signup" className="transition hover:text-white">
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {social.map((Icon, index) => (
              <Icon key={index} className="h-5 w-5" aria-hidden="true" />
            ))}
            <Link
              href="/contact"
              className="rounded-sm border border-white/30 px-4 py-2 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              {localeName}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
