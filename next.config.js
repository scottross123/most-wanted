/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['artcrimes.fbi.gov', 'www.fbi.gov']
  }
}

module.exports = nextConfig;
