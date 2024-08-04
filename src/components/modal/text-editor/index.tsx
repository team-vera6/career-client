import '@/components/text-editor/editor.css';

import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import MenuBar from '@/components/text-editor/MenuBar';

import Modal from '../Modal';
import { ModalProps } from '../ModalContainer';

interface Props {
  onSaveText: (text: string) => void;
  value: string;
}

const TextEditorModal = ({
  onSaveText,
  value,
  ...rest
}: ModalProps & Props) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: '<p>Hello World!</p>',
  });

  return (
    <Modal closeIcon {...rest}>
      <div className="h-[25rem] py-3.5 w-[28.5rem] ">
        <div className="px-6 mb-2">
          <MenuBar editor={editor} />
        </div>
        <div className="w-full bg-line-assistive h-[1px]" />
        <div className="px-6 py-4 h-[calc(100%-2.2rem)] overflow-y-scroll">
          <EditorContent
            editor={editor}
            onKeyDown={(e) => {
              if (
                (e.ctrlKey && e.key === 'Enter') ||
                (e.metaKey && e.key === 'Enter')
              ) {
                onSaveText(editor?.getText() ?? value);
                rest.onDismiss?.();
              }
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default TextEditorModal;
