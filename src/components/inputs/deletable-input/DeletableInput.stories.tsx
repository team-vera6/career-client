import { Meta, StoryObj } from '@storybook/react';

import DeletableInputComponent from './DeletableInput';

const meta = {
  title: 'Components/Input',
  component: DeletableInputComponent,
  argTypes: {
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof DeletableInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DeletableInput: Story = {
  args: {
    value: 'text',
    onChange: () => {},
    onClickDelete: () => {},
  },
};
