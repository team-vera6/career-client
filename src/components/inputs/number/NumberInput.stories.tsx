import { Meta, StoryObj } from '@storybook/react';

import NumberInput from './NumberInput';

const meta = {
  title: 'Components/Input',
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberOnly: Story = {
  args: {
    errorText: '',
  },
};
