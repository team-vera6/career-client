import { Meta, StoryObj } from '@storybook/react';

import LineInput from './LineInput';

const meta = {
  title: 'Components/Input',
  component: LineInput,
} satisfies Meta<typeof LineInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underline: Story = {
  args: {
    placeholder: '',
    disabled: false,
    errorText: '',
    size: 20,
  },
};
