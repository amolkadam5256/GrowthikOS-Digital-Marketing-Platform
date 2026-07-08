import { NextResponse } from "next/server";

/**
 * GET /api/health
 *
 * API health-check route — used by Docker, load balancers, and monitoring.
 * Returns 200 OK when the frontend server is running.
 */
export function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "dmp-frontend",
      timestamp: new Date().toISOString(),
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT ?? "unknown",
    },
    { status: 200 }
  );
}
