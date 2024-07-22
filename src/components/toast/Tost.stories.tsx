import { Meta, StoryObj } from '@storybook/react';

import ToastComponents from './Toast';

const meta = {
  title: 'Components',
  component: ToastComponents,
  argTypes: {
    iconType: {
      control: { type: 'select' },
      options: ['success', 'error', undefined],
    },
  },
} satisfies Meta<typeof ToastComponents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toast: Story = {
  args: {
    id: 'test-id',
    message: '변경사항을 저장했어요.',
    iconType: undefined,
  },
};
