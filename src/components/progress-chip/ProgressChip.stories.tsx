import { Meta, StoryObj } from '@storybook/react';

import ProgressChip from './ProgressChip';

const meta = {
  title: 'Components',
  component: ProgressChip,
} satisfies Meta<typeof ProgressChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Progress: Story = {
  args: {
    percentage: 30,
  },
};
