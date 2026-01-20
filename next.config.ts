import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/hulelab-landing',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
