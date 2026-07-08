import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Global proxy — runs on every matched request at the edge.
 * Replaces the deprecated `middleware.ts` convention in Next.js 16+.
 *
 * Current responsibilities (foundation only):
 *  - Attaches security / hardening HTTP headers
 *
 * Future responsibilities:
 *  - JWT / session authentication checks
 *  - Role-based route protection
 *  - Locale / i18n redirects
 *  - Rate-limiting headers
 *  - A/B testing
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function proxy(_request: NextRequest) {
  const response = NextResponse.next();

  // Security headers applied at the edge (before the page is rendered)
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  return response;
}

/**
 * Matcher — only run on page routes.
 * Excludes static files, images, and Next.js internals.
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public/|icons/|images/|logos/).*)",
  ],
};
