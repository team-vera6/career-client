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
    <section className="flex items-center gap-2.5 h-10 px-0.5 py-2.5">
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.isEditable}
      >
        <BoldIcon size={24} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.isEditable}
      >
        <ItalicIcon size={24} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.isEditable}
      >
        <UnderlineIcon size={24} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.isEditable}
      >
        <CodeBlockIcon size={24} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        disabled={!editor.isEditable}
      >
        <Header1Icon size={24} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        disabled={!editor.isEditable}
      >
        <Header2Icon size={24} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        disabled={!editor.isEditable}
      >
        <Header3Icon size={24} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.isEditable}
      >
        <OrderedListIcon size={24} />
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.isEditable}
      >
        <UnorderedListIcon size={24} />
      </button>
    </section>
  );
};

export default MenuBar;
