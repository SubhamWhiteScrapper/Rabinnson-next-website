import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {}, // disables turbopack warnings
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
