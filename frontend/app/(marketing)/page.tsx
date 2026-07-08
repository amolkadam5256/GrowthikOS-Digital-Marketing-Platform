import Link from "next/link";

/**
 * (marketing) Home Page — /
 *
 * Public landing page of the Digital Marketing Platform.
 * Updated to feature beautiful CTAs linking directly to /login and /signup.
 */
export default function MarketingHomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            SaaS Digital Marketing Platform
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary-500 max-w-xl mx-auto">
            Scale your search engine optimization, campaign automation, and data
            analytics with our enterprise-grade SaaS suite.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-primary-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Get started for free
            </Link>
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-foreground hover:opacity-80 transition-opacity"
            >
              Sign in to your account <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
