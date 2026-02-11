/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages' || process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  // Use static export for GitHub Pages, standalone for VPS/Docker.
  output: isGitHubPages ? 'export' : 'standalone',

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // GitHub Pages only supports static assets; disable Next image optimization there.
    unoptimized: isGitHubPages,
  },

  // Security headers (not supported in static export)
  async headers() {
    if (isGitHubPages) return [];
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

  // GitHub Pages serves static files; ensure folder-style routes work.
  trailingSlash: isGitHubPages,

  // Optional: Add redirects if needed (not supported in static export)
  async redirects() {
    if (isGitHubPages) return [];
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
