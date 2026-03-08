/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/products/**",
      },
    ],
  },
};

export default nextConfig;
