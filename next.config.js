/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
  trailingSlash: true,
  images: {
    domains: [
      "images.unsplash.com",
      "picsum.photos",
      "naszsklep-api.vercel.app",
    ],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "naszsklep-api.vercel.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/women",
        destination: "/women/1",
        permanent: true,
      },
      {
        source: "/men",
        destination: "/men/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
