import { Meta, StoryObj } from '@storybook/react';

import { ToastItem } from './Toast';

const meta = {
  title: 'Components',
  component: ToastItem,
  argTypes: {
    iconType: {
      control: { type: 'select' },
      options: ['success', 'error', undefined],
    },
  },
} satisfies Meta<typeof ToastItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toast: Story = {
  args: {
    id: 1,
    message: '변경사항을 저장했어요.',
    iconType: undefined,
  },
};
