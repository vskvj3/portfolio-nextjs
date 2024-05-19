/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

import withBundleAnalyzer from '@next/bundle-analyzer'

export default process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig
