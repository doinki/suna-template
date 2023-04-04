import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../src';

const meta = {
  args: {
    children: [
      <div key={1}>1</div>,
      <div key={2}>2</div>,
      <div key={3}>3</div>,
    ],
    className: 'gap-4',
  },
  component: Stack,
  tags: ['autodocs'],
  title: 'Stack',
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DirectionColumn: Story = { args: { direction: 'column' } };
export const DirectionColumnReverse: Story = {
  args: { direction: 'column-reverse' },
};
export const DirectionRow: Story = { args: { direction: 'row' } };
export const DirectionRowReverse: Story = {
  args: { direction: 'row-reverse' },
};

export const Divider: Story = { args: { divider: <hr /> } };
