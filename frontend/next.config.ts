import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security headers — also configured at the edge in proxy.ts
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Image optimization: add trusted remote domains here as needed
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
