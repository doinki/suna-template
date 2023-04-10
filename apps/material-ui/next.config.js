/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  experimental: { scrollRestoration: true },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ['@suna/ui'],
  typescript: { tsconfigPath: 'tsconfig.build.json' },
};
