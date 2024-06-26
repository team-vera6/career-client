import { Meta, StoryObj } from '@storybook/react';

import CheckboxInput from './CheckboxInput';

const meta = {
  title: 'Components/Input',
  component: CheckboxInput,
} satisfies Meta<typeof CheckboxInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    disabled: false,
  },
};
