/**
 * (marketing) Route Group Layout
 *
 * Wraps all public marketing pages (home, pricing, about, blog, etc.).
 * Route group parentheses mean this folder does NOT affect the URL.
 *
 * Future additions:
 *  - Marketing navigation header
 *  - Marketing footer
 *  - CTA banners
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
