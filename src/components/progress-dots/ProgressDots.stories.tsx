import { Meta, StoryObj } from '@storybook/react';

import ProgressDots from './ProgressDots';

const meta = {
  title: 'Components/Progress',
  component: ProgressDots,
  argTypes: {
    displayType: {
      control: { type: 'select' },
      options: ['step', 'progress'],
    },
    totalCount: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
      },
    },
    activeCount: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
      },
    },
  },
} satisfies Meta<typeof ProgressDots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dots: Story = {
  args: {
    totalCount: 7,
    activeCount: 4,
    displayType: 'progress',
  },
};
