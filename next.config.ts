import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isGithubPages ? "/vtag-website" : "",

  assetPrefix: isGithubPages ? "/vtag-website/" : undefined,

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;
