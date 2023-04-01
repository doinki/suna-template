/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ['@suna/hooks', '@suna/ui', '@suna/utils'],
};
