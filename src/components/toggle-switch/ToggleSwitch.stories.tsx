import { Meta, StoryObj } from '@storybook/react';

import ToggleSwitch from './ToggleSwitch';

const meta = {
  title: 'Components',
  component: ToggleSwitch,
} satisfies Meta<typeof ToggleSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toggle: Story = {
  args: {
    initialState: true,
  },
};
