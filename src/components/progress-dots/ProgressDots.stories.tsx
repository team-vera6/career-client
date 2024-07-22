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
  },
} satisfies Meta<typeof ProgressDots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dots: Story = {
  args: {
    dotCount: 7,
    displayType: 'progress',
    activeLevel: 4,
  },
};
