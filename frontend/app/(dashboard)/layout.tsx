/**
 * (dashboard) Route Group Layout
 *
 * Wraps all authenticated dashboard pages (tools, analytics, reports, etc.).
 * Route group parentheses mean this folder does NOT affect the URL.
 *
 * Future additions:
 *  - Auth guard / session check
 *  - Sidebar navigation
 *  - Top navigation bar
 *  - Notification system
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
