import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: { postcssLoaderOptions: { implementation: require('postcss') } },
    },
  ],
  docs: { autodocs: 'tag' },
  framework: { name: '@storybook/react-webpack5', options: {} },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(j|t)s?(x)'],
};

export default config;
