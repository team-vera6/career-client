import { Meta, StoryObj } from '@storybook/react';

import ScorePicker from './ScorePicker';

const meta = {
  title: 'Components',
  component: ScorePicker,
  argTypes: {
    score: {
      control: {
        type: 'number',
        min: 0,
        max: 7,
      },
    },
  },
} satisfies Meta<typeof ScorePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ScoreMark: Story = {
  args: {
    score: 3,
    setScore: () => {},
  },
};
