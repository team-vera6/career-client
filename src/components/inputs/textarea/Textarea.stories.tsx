import { Meta, StoryObj } from '@storybook/react';

import Textarea from './Textarea';

const meta = {
  title: 'Components/Input',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextareaInput: Story = {
  args: {
    placeholder: '',
    errorText: '',
    rows: 10,
    cols: 40,
  },
};
