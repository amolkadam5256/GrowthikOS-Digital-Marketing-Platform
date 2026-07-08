"use client";

import { useEffect } from "react";

/**
 * Global error boundary — catches runtime errors in any route segment.
 * Must be a Client Component ("use client").
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: Send to error monitoring service (e.g. Sentry)
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-3xl font-bold tracking-tight">
        Something went wrong
      </h1>
      <p className="max-w-md text-base text-muted-foreground">
        An unexpected error occurred. Please try again, or contact support if
        the problem persists.
      </p>
      {error.digest && (
        <p className="text-xs text-muted-foreground">
          Error ID: <code>{error.digest}</code>
        </p>
      )}
      <button
        onClick={reset}
        className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        Try again
      </button>
    </main>
  );
}
