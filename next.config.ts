import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/aguilerapjc-portfolio-site",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = {
  images: {
    unoptimized: true,
  },
};
module.exports = nextConfig;
//export default nextConfig;
