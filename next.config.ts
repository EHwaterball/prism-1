import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "prism-performance-energy.iannkiim.chatgpt.site" },
    ],
  },
};

export default nextConfig;
