const { NormalModuleReplacementPlugin } = require('webpack');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ['@suna/hooks', '@suna/ui', '@suna/utils'],
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
