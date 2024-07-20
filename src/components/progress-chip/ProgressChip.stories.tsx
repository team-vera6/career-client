import { Meta, StoryObj } from '@storybook/react';

import ProgressChip from './ProgressChip';

const meta = {
  title: 'Components/Progress',
  component: ProgressChip,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
} satisfies Meta<typeof ProgressChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Chip: Story = {
  args: {
    percentage: 30,
  },
};
