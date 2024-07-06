import { Meta, StoryObj } from '@storybook/react';
import MemoComponent from './Memo';

const meta: Meta = {
  title: 'Components',
  component: MemoComponent,
} satisfies Meta<typeof MemoComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Memo: Story = {
  args: {
    memo: '제휴 브랜드 전용 새로운 테마,\n템플릿 레퍼런스 찾기제휴 브랜드 전용 새로운 테마,\n제휴 브랜드 전용 새로운 테마,\n제휴 브랜드 전용 새로운 테마,\n',
    date: '7.12',
  },
};
