import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Cloudflare quick tunnel for testing Viva redirects and webhooks against `next dev`
  allowedDevOrigins: ["*.trycloudflare.com"],
  experimental: {
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "karpadu.blob.core.windows.net" }],
  },
  async redirects() {
    // Old WordPress URLs of miracars.gr (Greek-only site), from its sitemaps on 2026-10-28.
    const guide = "/el/crete-driving-guide";
    return [
      { source: "/vehicle-listings", destination: "/el/fleet", permanent: true },
      { source: "/autos/:slug*", destination: "/el/fleet", permanent: true },
      { source: "/about", destination: "/el/about", permanent: true },
      { source: "/contacts", destination: "/el/contact", permanent: true },
      { source: "/politiki-aporritou", destination: "/el/privacy", permanent: true },
      { source: "/politiki-cookies", destination: "/el/privacy", permanent: true },
      { source: "/car-rental-booking", destination: "/el", permanent: true },
      { source: "/irakleio", destination: "/el/locations/heraklion", permanent: true },
      { source: "/xania-elafonisi", destination: "/el/locations/chania-airport", permanent: true },
      { source: "/mpalos", destination: "/el/locations/chania-airport", permanent: true },
      { source: "/blog", destination: guide, permanent: true },
      { source: "/rethimno", destination: guide, permanent: true },
      { source: "/agios-nikolaos", destination: guide, permanent: true },
      { source: "/oi-kalyteres-plirofories-tis-kritis", destination: guide, permanent: true },
      { source: "/matala-ena-parathalasio-xorio-stin-notia-kriti", destination: guide, permanent: true },
      { source: "/:year(\\d{4})/:path*", destination: guide, permanent: true },
      { source: "/category/:path*", destination: "/el", permanent: true },
      { source: "/author/:path*", destination: "/el", permanent: true },
      { source: "/feed", destination: "/el", permanent: true },
      { source: "/comments/feed", destination: "/el", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
