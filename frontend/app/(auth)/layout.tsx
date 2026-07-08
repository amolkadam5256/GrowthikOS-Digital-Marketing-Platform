/**
 * (auth) Route Group Layout
 *
 * Wraps all authentication pages (login, register, forgot-password, etc.).
 * Route group parentheses mean this folder does NOT affect the URL.
 *
 * Future additions:
 *  - Centered auth card container
 *  - Branding / logo
 *  - Auth-specific background
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
