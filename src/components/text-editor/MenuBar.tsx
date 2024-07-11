import { Editor } from '@tiptap/react';

import BoldIcon from '../icons/markdown/BoldIcon';
import CodeBlockIcon from '../icons/markdown/CodeBlockIcon';
import Header1Icon from '../icons/markdown/Header1Icon';
import Header2Icon from '../icons/markdown/Header2Icon';
import Header3Icon from '../icons/markdown/Header3Icon';
import ItalicIcon from '../icons/markdown/ItalicIcon';
import OrderedListIcon from '../icons/markdown/OrderedListIcon';
import UnderlineIcon from '../icons/markdown/UnderlineIcon';
import UnorderedListIcon from '../icons/markdown/UnorderedListIcon';

interface Props {
  editor: Editor | null;
}

const MenuBar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <section className="flex items-center gap-2 h-[3.875rem] border-b border-line-assistive">
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleBold().run()}>
        <BoldIcon size={20} />
      </button>
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleItalic().run()}>
        <ItalicIcon size={20} />
      </button>
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleStrike().run()}>
        <UnderlineIcon size={20} />
      </button>
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleCode().run()}>
        <CodeBlockIcon size={20} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Header1Icon size={20} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Header2Icon size={20} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Header3Icon size={20} />
      </button>
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <OrderedListIcon size={20} />
      </button>
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <UnorderedListIcon size={20} />
      </button>
    </section>
  );
};

export default MenuBar;
