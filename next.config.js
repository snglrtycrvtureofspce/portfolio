/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '639a5c86-aea6-414e-8505-51b2938ab53c.s3.eu-north-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;