/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com", "miro.medium.com"],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
