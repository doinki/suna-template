/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  experimental: { scrollRestoration: true },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ['@suna/hooks', '@suna/ui', '@suna/utils'],
  typescript: { tsconfigPath: 'tsconfig.build.json' },
};
