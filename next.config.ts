import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export', // Required for GitHub Pages static export
  basePath: '/NUR', // Match your GitHub repository name
  assetPrefix: '/NUR/', 
  images: {
    unoptimized: true, // Required for static exports when using <Image /> component
  }
};

export default nextConfig;
