import type { Metadata } from "next";

import { DashboardShell } from "@/components/dashboard/DashboardShell";

export const metadata: Metadata = {
  title: "Enterprise Analytics Dashboard",
  description:
    "GrowthikOS enterprise analytics, reporting, AI insights, live widgets, and campaign performance dashboard.",
};

export default function DashboardPage() {
  return <DashboardShell />;
}
