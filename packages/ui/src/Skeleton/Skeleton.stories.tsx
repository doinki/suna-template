import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton';

const meta = {
  component: Skeleton,
  tags: ['autodocs'],
  title: 'Skeleton',
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  render: (args) => (
    <div className="space-y-6">
      <Skeleton height={64} variant="circular" width={64} {...args} />
      <Skeleton height={64} variant="rectangular" width={160} {...args} />
      <Skeleton height={64} variant="rounded" width={320} {...args} />
      <Skeleton variant="text" />
    </div>
  ),
};

export const Animation: Story = {
  render: (args) => (
    <div className="space-y-6">
      <Skeleton
        animation="pulse"
        height={120}
        variant="rectangular"
        width={120}
        {...args}
      />
      <Skeleton
        animation={false}
        height={120}
        variant="rectangular"
        width={120}
        {...args}
      />
    </div>
  ),
};

export const Size: Story = {
  args: { height: 320, variant: 'rounded', width: 320 },
};
