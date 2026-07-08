/**
 * Global loading UI — shown while a page segment is loading.
 * Replace with a proper skeleton/spinner component once the design system is built.
 */
export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-current border-t-transparent opacity-60" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
