import Link from "next/link";

/**
 * Global 404 page — shown when no route matches.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <span className="text-7xl font-black tracking-tighter opacity-10 select-none">
        404
      </span>
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="max-w-md text-base text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        Back to home
      </Link>
    </main>
  );
}
