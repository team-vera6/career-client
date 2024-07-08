import { Meta, StoryObj } from '@storybook/react';

import DatePicker from './DatePicker';

const meta = {
  title: 'Components',
  component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Calender: Story = {
  args: {},
};
