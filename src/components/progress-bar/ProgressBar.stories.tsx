import { Meta, StoryObj } from '@storybook/react';

import ProgressBar from './ProgressBar';

const meta = {
  title: 'Components/Progress',
  component: ProgressBar,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bar: Story = {
  args: {
    percentage: 30,
  },
};
