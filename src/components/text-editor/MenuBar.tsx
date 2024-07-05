import { Editor } from '@tiptap/react';

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
        B
      </button>
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleItalic().run()}>
        I
      </button>
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleStrike().run()}>
        U
      </button>
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleCode().run()}>
        {'</>'}
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        H1
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </button>
      <button
        className="w-6 h-6"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        H3
      </button>
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        123
      </button>
      <button className="w-6 h-6" onClick={() => editor.chain().focus().toggleBulletList().run()}>
        bul
      </button>
    </section>
  );
};

export default MenuBar;
