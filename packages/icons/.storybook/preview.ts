import type { Preview } from '@storybook/react';

const preview: Preview = {
  args: { size: '64' },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  },
};

export default preview;
