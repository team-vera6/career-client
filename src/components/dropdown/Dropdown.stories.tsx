import { Meta, StoryObj } from '@storybook/react';

import Dropdown from './Dropdown';

const meta = {
  title: 'Components',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropMenu: Story = {
  args: {
    id: '팀베라',
    items: [
      { name: '이유림', value: '이유림' },
      { name: '김종훈', value: '김종훈' },
      { name: '김봉주', value: '김봉주' },
      { name: '장지선', value: '장지선' },
      { name: '김해람', value: '김해람' },
      { name: '이호', value: '이호' },
    ],
  },
};
