import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/diagnostic",
        destination: "/services/diagnostic",
        permanent: true,
      },
      {
        source: "/services/engineering",
        destination: "/services/platforms",
        permanent: true,
      },
      {
        source: "/services/dbt",
        destination: "/services/platforms",
        permanent: true,
      },
      {
        source: "/services/cloud",
        destination: "/services/platforms",
        permanent: true,
      },
      {
        source: "/services/ai",
        destination: "/services/analytics",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
