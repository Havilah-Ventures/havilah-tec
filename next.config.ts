import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/diagnostic",
        destination: "/services/diagnostic",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
