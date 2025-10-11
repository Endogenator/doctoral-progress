import createMDX from '@next/mdx'

const withMDX = createMDX({ extension: /\.mdx?$/ })

const securityHeaders = [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }]

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  eslint: {
    // Prevent lint errors from failing the Vercel build
    ignoreDuringBuilds: true,
  },
}

export default withMDX(nextConfig)
