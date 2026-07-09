import {
  Activity,
  BadgeDollarSign,
  Bot,
  CalendarClock,
  FileSpreadsheet,
  Gauge,
  Globe2,
  LineChart,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type KpiMetric = {
  id: string;
  label: string;
  value: string;
  delta: string;
  status: string;
  icon: LucideIcon;
  sparkline: number[];
};

export type CampaignRow = {
  campaign: string;
  channel: string;
  spend: number;
  leads: number;
  roas: number;
  status: "Scaling" | "Healthy" | "Watch" | "Automated";
};

export const kpiMetrics: KpiMetric[] = [
  {
    id: "revenue",
    label: "Revenue",
    value: "$184.2k",
    delta: "+18.4%",
    status: "Ahead of plan",
    icon: BadgeDollarSign,
    sparkline: [42, 48, 53, 61, 58, 69, 76],
  },
  {
    id: "visitors",
    label: "Visitors",
    value: "92,840",
    delta: "+12.7%",
    status: "Live demand",
    icon: Users,
    sparkline: [34, 39, 46, 44, 53, 58, 64],
  },
  {
    id: "conversion",
    label: "Conversion",
    value: "7.8%",
    delta: "+2.1%",
    status: "Funnel lift",
    icon: Target,
    sparkline: [22, 29, 31, 38, 42, 48, 55],
  },
  {
    id: "ai-score",
    label: "AI visibility",
    value: "84/100",
    delta: "+9 pts",
    status: "Citation growth",
    icon: Bot,
    sparkline: [18, 24, 36, 39, 44, 53, 62],
  },
];

export const trafficSeries = [
  { date: "Mon", organic: 12400, paid: 8200, ai: 2800 },
  { date: "Tue", organic: 13900, paid: 8800, ai: 3600 },
  { date: "Wed", organic: 15800, paid: 9100, ai: 4200 },
  { date: "Thu", organic: 17100, paid: 10200, ai: 5100 },
  { date: "Fri", organic: 16900, paid: 11800, ai: 5900 },
  { date: "Sat", organic: 18100, paid: 10900, ai: 6400 },
  { date: "Sun", organic: 19600, paid: 12100, ai: 7200 },
];

export const channelShare = [
  { value: 42, name: "Organic" },
  { value: 28, name: "Paid" },
  { value: 18, name: "AI Search" },
  { value: 12, name: "Referral" },
];

export const campaignRows: CampaignRow[] = [
  {
    campaign: "AI Visibility Sprint",
    channel: "Organic",
    spend: 12400,
    leads: 842,
    roas: 6.4,
    status: "Scaling",
  },
  {
    campaign: "Pune Local SEO",
    channel: "Search",
    spend: 7200,
    leads: 418,
    roas: 5.9,
    status: "Healthy",
  },
  {
    campaign: "Enterprise Retargeting",
    channel: "Meta",
    spend: 18800,
    leads: 621,
    roas: 4.2,
    status: "Watch",
  },
  {
    campaign: "WhatsApp Nurture",
    channel: "CRM",
    spend: 2900,
    leads: 306,
    roas: 8.1,
    status: "Automated",
  },
  {
    campaign: "B2B Content Engine",
    channel: "Content",
    spend: 9800,
    leads: 544,
    roas: 5.1,
    status: "Healthy",
  },
];

export const regionAnalytics = [
  { region: "India", visitors: "41.2k", lift: "+16%", intensity: 96 },
  { region: "United States", visitors: "18.7k", lift: "+11%", intensity: 74 },
  { region: "United Kingdom", visitors: "9.4k", lift: "+8%", intensity: 58 },
  { region: "UAE", visitors: "7.8k", lift: "+21%", intensity: 68 },
  { region: "Singapore", visitors: "5.6k", lift: "+6%", intensity: 46 },
];

export const aiInsights = [
  {
    title: "AI opportunity detected",
    body: "Competitors gained citations for 18 commercial queries. Add source-backed FAQ blocks to the top 5 service pages.",
    impact: "High",
    icon: Sparkles,
  },
  {
    title: "Budget shift recommended",
    body: "Move 12% from retargeting into search campaigns with ROAS above 5.5x for the next 7 days.",
    impact: "Medium",
    icon: Gauge,
  },
  {
    title: "White-label report ready",
    body: "Client-ready summary includes KPI lift, risks, next actions, and campaign pacing for this week.",
    impact: "Ready",
    icon: FileSpreadsheet,
  },
];

export const reportWidgets = [
  { id: "revenue", label: "Revenue", icon: BadgeDollarSign },
  { id: "traffic", label: "Traffic", icon: LineChart },
  { id: "funnel", label: "Funnel", icon: Target },
  { id: "ai", label: "AI insights", icon: Bot },
  { id: "geo", label: "Geo map", icon: Globe2 },
  { id: "schedule", label: "Schedule", icon: CalendarClock },
];

export const workflowNodes = [
  {
    id: "source",
    position: { x: 0, y: 80 },
    data: { label: "Data sources" },
  },
  {
    id: "ai",
    position: { x: 210, y: 0 },
    data: { label: "AI analysis" },
  },
  {
    id: "report",
    position: { x: 420, y: 80 },
    data: { label: "Report builder" },
  },
  {
    id: "schedule",
    position: { x: 630, y: 0 },
    data: { label: "Scheduled delivery" },
  },
  {
    id: "alerts",
    position: { x: 630, y: 165 },
    data: { label: "Live alerts" },
  },
];

export const workflowEdges = [
  { id: "source-ai", source: "source", target: "ai", animated: true },
  { id: "ai-report", source: "ai", target: "report", animated: true },
  { id: "report-schedule", source: "report", target: "schedule", animated: true },
  { id: "report-alerts", source: "report", target: "alerts", animated: true },
];

export const dashboardModules = [
  { label: "Analytics", icon: Activity },
  { label: "Campaigns", icon: Megaphone },
  { label: "Automation", icon: Workflow },
  { label: "Security", icon: ShieldCheck },
];
