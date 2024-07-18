import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import MenuBar from '@/components/text-editor/MenuBar';

import { ModalProps } from '../ModalContainer';
import Modal from '../Modal';

const TextEditorModal = (props: ModalProps) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: '<p>Hello World! 🌎</p>',
  });

  return (
    <Modal closeIcon {...props}>
      <div className="h-[25rem] py-3.5 w-[28.5rem]">
        <div className="px-6 mb-2">
          <MenuBar editor={editor} />
        </div>
        <div className="w-full bg-line-assistive h-[1px]" />
        <div className="px-6 mt-4">
          <EditorContent editor={editor} />
        </div>
      </div>
    </Modal>
  );
};

export default TextEditorModal;
