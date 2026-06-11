/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure Next.js resolves the correct workspace root when multiple lockfiles exist
  outputFileTracingRoot: '/Users/rickdelacour/PhpstormProjects/politie',
  serverExternalPackages: ['ogl'],
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/leading-with-obeya',
        destination: '/sturen-met-obeya',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
