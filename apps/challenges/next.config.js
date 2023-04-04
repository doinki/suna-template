const { NormalModuleReplacementPlugin } = require('webpack');

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
  webpack: (config) => {
    config.plugins.push(
      new NormalModuleReplacementPlugin(/@$/, (resource) => {
        // eslint-disable-next-line no-param-reassign
        resource.request = resource.request.replace(/@$/, '@');
      })
    );

    return config;
  },
};
