/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    // Will be available on both server and client
    pokeApiUrl: "https://pokeapi.co/api/v2/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
