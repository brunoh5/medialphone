/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dcdn.mitiendanube.com',
      },
      {
        protocol: 'https',
        hostname: 'medialshop.bubbstorelive.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.medialshop.com.br',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'images.yampi.me',
      },
    ],
  },
}

export default nextConfig
