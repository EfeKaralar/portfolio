/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },

  // Compress output
  compress: true,


  // Production optimizations
  reactStrictMode: true,

  // Optional: Add redirects if needed
  async redirects() {
    return [
      // Example: redirect www to non-www
      // {
      //   source: '/:path*',
      //   has: [{ type: 'host', value: 'www.yourdomain.com' }],
      //   destination: 'https://yourdomain.com/:path*',
      //   permanent: true
      // }
    ];
  }
};

module.exports = nextConfig;
