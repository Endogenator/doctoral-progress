import createMDX from '@next/mdx'

const withMDX = createMDX({ extension: /\.mdx?$/ })

// sitewide no-index while private
const securityHeaders = [
  { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts','tsx','mdx'],
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  }
}

export default withMDX(nextConfig)
