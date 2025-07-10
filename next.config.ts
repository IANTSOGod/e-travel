import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  env:{
    MINIO_ENDPOINT: process.env.MINIO_ENDPOINT,
    CONVEX_URL: process.env.CONVEX_URL,
  }
};

export default nextConfig;
