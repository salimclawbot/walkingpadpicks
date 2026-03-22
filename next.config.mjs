/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/best-walking-pad-for-heavy-users",
        destination: "/best-walking-pad-heavy-users",
        permanent: true,
        statusCode: 308,
      },
    ];
  },
};

export default nextConfig;
