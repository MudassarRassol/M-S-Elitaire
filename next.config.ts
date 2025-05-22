import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        
      },
      // Add other domains if needed
    ],
  },
  /* config options here */
};

export default nextConfig;
