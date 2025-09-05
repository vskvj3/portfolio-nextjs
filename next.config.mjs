/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'github.com',
      'raw.githubusercontent.com',
      'user-images.githubusercontent.com',
      'camo.githubusercontent.com'
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

import withBundleAnalyzer from "@next/bundle-analyzer";

export default process.env.ANALYZE === "true"
  ? withBundleAnalyzer(nextConfig)
  : nextConfig;
