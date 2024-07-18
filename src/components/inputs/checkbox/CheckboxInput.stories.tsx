import { Meta, StoryObj } from '@storybook/react';

import CheckboxInput from './CheckboxInput';

const meta = {
  title: 'Components/Input',
  component: CheckboxInput,
  argTypes: {
    onChange: { action: 'changed' },
    onClickCheckbox: { action: 'changed' },
    category: {
      control: { type: 'select' },
      options: ['dashboard', 'review'],
    },
  },
} satisfies Meta<typeof CheckboxInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    checked: false,
    onChange: () => {},
    onClickCheckbox: () => {},
    category: 'dashboard',
  },
};
