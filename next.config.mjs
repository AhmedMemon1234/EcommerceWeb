/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['readymadeui.com'], // Allowed image domains
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
};

export default nextConfig;
