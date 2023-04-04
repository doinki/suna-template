import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from '../src';

const meta = {
  component: Divider,
  tags: ['autodocs'],
  title: 'Divider',
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OrientationHorizontal: Story = {
  args: { orientation: 'horizontal' },
};
export const OrientationVertical: Story = {
  args: { orientation: 'vertical' },
  render: (args) => (
    <div style={{ height: 320 }}>
      <Divider {...args} />
    </div>
  ),
};
