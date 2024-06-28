import { Meta, StoryObj } from '@storybook/react';

import CheckboxInput from './CheckboxInput';

const meta = {
  title: 'Components/Input',
  component: CheckboxInput,
  argTypes: {
    onChange: { action: 'changed' },
    onClickCheckbox: { action: 'changed' },
  },
} satisfies Meta<typeof CheckboxInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    value: '',
    checked: false,
    disabled: false,
    onChange: () => {},
    onClickCheckbox: () => {},
  },
};
