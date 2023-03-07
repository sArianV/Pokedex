/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    // Will be available on both server and client
    pokeApiUrl: "https://pokeapi.co/api/v2/",
  },
}

module.exports = nextConfig
