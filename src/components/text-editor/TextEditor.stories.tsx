import { Meta, StoryObj } from '@storybook/react';

import TextEditor from './TextEditor';

const meta = {
  title: 'Components',
  component: TextEditor,
} satisfies Meta<typeof TextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarkdownEditor: Story = {
  args: {},
};
