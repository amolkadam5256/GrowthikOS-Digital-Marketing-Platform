import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Camera,
  Clock3,
  Code2,
  Compass,
  Gauge,
  Globe2,
  LineChart,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  Share2,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

export const contact = {
  phone: "+91 80557 54054",
  phoneHref: "tel:+918055754054",
  email: "info@growthikmedia.com",
  emailHref: "mailto:info@growthikmedia.com",
  address: "Akshay Palace CHS, Warje Malwadi Rd, Warje, Pune 411058",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Insights", href: "#faq" },
];

export const heroBadges = [
  "ROI focused",
  "Google and Meta certified",
  "Real-time reporting",
];

export const trustLogos = [
  "Healthcare",
  "Real Estate",
  "Education",
  "E-commerce",
  "Manufacturing",
  "Local Services",
  "Startups",
  "Retail",
];

export const stats = [
  { value: "2019", label: "Growth systems shipped since" },
  { value: "120+", label: "Campaigns audited and rebuilt" },
  { value: "3.2x", label: "Average qualified-lead lift" },
  { value: "24/7", label: "GA4 and GTM visibility" },
];

export const serviceGroups = [
  {
    id: "web",
    label: "Web + UX",
    services: [
      "Website Design",
      "Website Development",
      "Landing Pages",
      "Full-stack Development",
      "Web Applications",
      "E-commerce Development",
      "Website Maintenance",
      "Website Speed and CWV",
    ],
  },
  {
    id: "search",
    label: "Search + Paid",
    services: [
      "Advanced SEO",
      "Google Ads (PPC)",
      "Performance Marketing",
      "Meta Ads",
      "Email Marketing",
      "SMS Marketing",
      "WhatsApp Marketing",
      "Lead Generation",
    ],
  },
  {
    id: "social",
    label: "Social + Demand",
    services: [
      "Social Media Marketing",
      "Influencer Management",
      "YouTube SEO",
      "Social Promotions",
      "Media Planning and Buying",
      "Political Digital Marketing",
    ],
  },
  {
    id: "brand",
    label: "Brand Systems",
    services: [
      "Brand Identity",
      "Brand Strategy",
      "Brand Naming",
      "Logo Design",
      "Brochure Design",
      "Business Card Design",
    ],
  },
];

export const seoCards: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "Technical SEO",
    body: "Core Web Vitals, schema markup, crawl paths, and architecture that search engines can parse cleanly.",
    icon: Gauge,
  },
  {
    title: "Local SEO in Pune",
    body: "Map-pack visibility and neighborhood intent across Baner, Hinjewadi, Wakad, PCMC, and Warje.",
    icon: MapPin,
  },
  {
    title: "E-commerce SEO",
    body: "Product-page visibility and organic sales growth for Shopify, WooCommerce, and custom stores.",
    icon: MonitorSmartphone,
  },
  {
    title: "Video SEO",
    body: "YouTube optimization and video snippets structured for Google and answer-engine discovery.",
    icon: Megaphone,
  },
  {
    title: "CRO",
    body: "Conversion rate optimization that turns your traffic into calls, demos, leads, and revenue.",
    icon: Target,
  },
];

export const whyCards = [
  {
    title: "Developer-marketer operating model",
    body: "Growthik treats marketing like an engineering system: analytics, speed, tracking, testing, and then campaigns.",
    icon: Code2,
  },
  {
    title: "Pune-centric search strategy",
    body: "Local SEO built around the exact ways customers search across Pune's neighborhoods and business corridors.",
    icon: Compass,
  },
  {
    title: "Readable reporting",
    body: "GA4, GTM, Search Console, and campaign data translated into decisions your team can act on.",
    icon: BarChart3,
  },
];

export const capabilities = [
  { label: "Core Web Vitals", icon: Zap },
  { label: "GA4 and GTM", icon: LineChart },
  { label: "AI search readiness", icon: Bot },
  { label: "Lead quality checks", icon: ShieldCheck },
  { label: "Local authority", icon: Globe2 },
  { label: "Campaign velocity", icon: Clock3 },
];

export const faqItems = [
  {
    question: "What should a good digital marketing partner offer for lead generation?",
    answer:
      "A strong lead-gen partner blends technical SEO, paid search, Meta campaigns, conversion rate optimization, and clean analytics. Growthik builds a trackable revenue system instead of chasing impressions.",
  },
  {
    question: "How much does digital marketing cost for a small business in Pune?",
    answer:
      "Pricing depends on scope, competition, and speed. Most small and mid-sized Pune businesses start with one or two priorities such as Local SEO, Google Ads, or social media, then expand once the data shows what is working.",
  },
  {
    question: "How long before SEO shows measurable results?",
    answer:
      "You can often see early technical and ranking movement within 4 to 6 weeks. Meaningful revenue growth usually compounds over 3 to 6 months, especially when local SEO, content, and site performance move together.",
  },
  {
    question: "SEO or Google Ads: which should a Pune startup start with?",
    answer:
      "Ads are faster for demand capture, while SEO lowers acquisition cost over time. For many startups, the strongest plan is both: paid campaigns for immediate learning and SEO for compounding visibility.",
  },
  {
    question: "Why choose a local Pune agency over a national or offshore one?",
    answer:
      "Local context matters for search behavior, pricing, neighborhoods, and customer trust. Growthik works inside the Pune market, which keeps strategy sessions practical and feedback loops quick.",
  },
  {
    question: "How do you optimize content for AI search engines like ChatGPT?",
    answer:
      "We structure pages with clear answers, FAQ sections, schema, source-worthy expertise, and topical coverage so AI answer engines can understand and cite the business accurately.",
  },
  {
    question: "Do you build websites as well as run marketing campaigns?",
    answer:
      "Yes. Growthik builds sites in modern stacks such as Next.js, React, and WordPress, with speed, mobile usability, tracking, and conversion paths planned from the beginning.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free strategy call or request a digital audit. Growthik reviews your current setup, flags the highest-impact fixes, and maps the next growth moves before any retainer decision.",
  },
];

export const socialLinks = [
  { label: "LinkedIn", icon: Users },
  { label: "Instagram", icon: Camera },
  { label: "Facebook", icon: Share2 },
];

export const freeToolCategories = [
  {
    title: "Keyword Research",
    tools: [
      {
        name: "Keyword Generator",
        description:
          "Find relevant keyword ideas, search intent angles, and content opportunities for any niche.",
      },
      {
        name: "Keyword Difficulty Checker",
        description:
          "Estimate how hard it will be to reach the first page for a target keyword.",
      },
      {
        name: "Amazon Keyword Tool",
        description:
          "Discover product-led search terms for marketplace listings and e-commerce pages.",
      },
      {
        name: "Bing Keyword Tool",
        description:
          "Expand your keyword research beyond Google with Bing-specific search ideas.",
      },
      {
        name: "YouTube Keyword Tool",
        description:
          "Get video topic ideas based on the words people search for on YouTube.",
      },
    ],
  },
  {
    title: "Link Building",
    tools: [
      {
        name: "Backlink Checker",
        description:
          "Review the top links pointing to a website and spot authority-building opportunities.",
      },
      {
        name: "Website Authority Checker",
        description:
          "Measure domain strength and compare backlink profiles across competitors.",
      },
      {
        name: "Broken Link Checker",
        description:
          "Find broken links on a page or domain before they hurt user experience and crawl quality.",
      },
    ],
  },
  {
    title: "SERP & Ranking",
    tools: [
      {
        name: "Website Traffic Checker",
        description:
          "Estimate organic traffic and understand which pages are pulling search demand.",
      },
      {
        name: "Keyword Rank Checker",
        description:
          "Check ranking positions by keyword, location, device, and search engine.",
      },
      {
        name: "SERP Checker",
        description:
          "Analyze the top ranking results for any keyword and identify what the page needs to beat.",
      },
    ],
  },
  {
    title: "AI & Content Tools",
    tools: [
      {
        name: "AI Visibility Checker",
        description:
          "See whether your brand appears across ChatGPT, Gemini, Perplexity, and AI search results.",
      },
      {
        name: "AI Writing Tools",
        description:
          "Create briefs, ads, metadata, outlines, and content drafts with AI-assisted workflows.",
      },
      {
        name: "SEO Toolbar",
        description:
          "Preview on-page signals, broken links, redirects, and SERP data while browsing.",
      },
    ],
  },
];

export const heroToolOptions = [
  "Keyword Generator",
  "Website Audit",
  "AI Visibility Checker",
  "Rank Checker",
  "Backlink Checker",
];

export const signupPlans = [
  {
    name: "Starter",
    price: "$29/mo",
    description: "Track one project, audit your site, and rebuild your search foundation.",
    href: "/signup",
  },
  {
    name: "GrowthikOS Free",
    price: "Free",
    description: "Run your first audit and explore the SEO tool suite before upgrading.",
    href: "/signup",
  },
];

export const footerGroups = [
  {
    title: "Core Tools",
    links: [
      "Dashboard",
      "Site Audit",
      "Rank Tracker",
      "Keyword Explorer",
      "Content Explorer",
      "AI Content Helper",
      "Report Builder",
    ],
  },
  {
    title: "Extra Tools",
    links: [
      "Domain Comparison",
      "Backlink Analysis",
      "Broken Link Checker",
      "Traffic Checker",
      "Schema Checker",
      "AI Search SEO",
      "All Tools",
    ],
  },
  {
    title: "Free SEO Tools",
    links: [
      "Keyword Generator",
      "SERP Checker",
      "Rank Checker",
      "AI Visibility Checker",
      "Website Authority Checker",
      "SEO Audit Tool",
      "Word Counter",
    ],
  },
  {
    title: "Product",
    links: ["Pricing", "Our Data", "API", "Enterprise", "Roadmap", "Security"],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "SEO Guide",
      "Marketing Academy",
      "Help Center",
      "Case Studies",
      "Contact",
    ],
  },
];
