import type { NextConfig } from "next";

const repo = "aguilerapjc-portfolio-site";

const nextConfig: NextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  output: "export", // enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
