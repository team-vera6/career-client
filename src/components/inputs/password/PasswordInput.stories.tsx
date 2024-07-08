import { Meta, StoryObj } from '@storybook/react';

import PasswordInput from './PasswordInput';

const meta = {
  title: 'Components/Input',
  component: PasswordInput,
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {
    value: '',
    errorText: '',
  },
};
