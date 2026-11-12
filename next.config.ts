import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/flow",
        destination: "/services/havilah-flow",
        permanent: false,
      },
      {
        source: "/diagnostic",
        destination: "/services/diagnostic",
        permanent: true,
      },
      {
        source: "/services/platforms",
        destination: "/services/data-engineering",
        permanent: true,
      },
      {
        source: "/services/analytics",
        destination: "/services/data-engineering",
        permanent: true,
      },
      {
        source: "/services/governance",
        destination: "/services/data-engineering",
        permanent: true,
      },
      {
        source: "/services/engineering",
        destination: "/services/data-engineering",
        permanent: true,
      },
      {
        source: "/services/dbt",
        destination: "/services/data-engineering",
        permanent: true,
      },
      {
        source: "/services/cloud",
        destination: "/services/data-engineering",
        permanent: true,
      },
      {
        source: "/services/ai",
        destination: "/services/data-engineering",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
