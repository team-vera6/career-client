import { Meta, StoryObj } from '@storybook/react';

import ProgressLine from './ProgressLine';

const meta = {
  title: 'Components/Progress',
  component: ProgressLine,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
} satisfies Meta<typeof ProgressLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Line: Story = {
  args: {
    percentage: 66,
  },
};
