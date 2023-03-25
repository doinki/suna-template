import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '../src';

const meta = {
  component: Skeleton,
  tags: ['autodocs'],
  title: 'Skeleton',
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: () => (
    <ul className="space-y-4">
      <li>
        <code>&quot;circular&quot;</code>
        <Skeleton height={64} variant="circular" width={64} />
      </li>
      <li>
        <code>&quot;rectangular&quot;</code>
        <Skeleton height={64} variant="rectangular" width={160} />
      </li>
      <li>
        <code>&quot;rounded&quot;</code>
        <Skeleton height={64} variant="rounded" width={320} />
      </li>
      <li>
        <code>&quot;text&quot;</code>
        <Skeleton variant="text" />
      </li>
    </ul>
  ),
};

export const Animations: Story = {
  render: () => (
    <ul className="space-y-4">
      <li>
        <code>&quot;pulse&quot;</code>
        <Skeleton
          animation="pulse"
          height={120}
          variant="rectangular"
          width={120}
        />
      </li>
      <li>
        <code>false</code>
        <Skeleton
          animation={false}
          height={120}
          variant="rectangular"
          width={120}
        />
      </li>
    </ul>
  ),
};

export const Size: Story = {
  args: { height: 320, variant: 'rounded', width: 320 },
};
