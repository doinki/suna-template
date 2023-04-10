import type { Meta, StoryObj } from '@storybook/react';

import Circle from './Circle';

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: 'Circle',
};

export default meta;
type Story = StoryObj<typeof Circle>;

export const Usage: Story = {};
