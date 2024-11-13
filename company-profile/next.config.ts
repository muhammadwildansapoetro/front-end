import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "images.ctfassets.net" }, { hostname: "randomuser.me" }],
  },

  reactStrictMode: true,
  experimental: { optimizeCss: true }
};

export default nextConfig;
