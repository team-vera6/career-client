/* eslint-disable import/no-named-as-default */
import '@/components/text-editor/editor.css';

import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { deleteMemo } from '@/apis/memo/delete';
import { memoListAtom } from '@/app/review/stores';
import MenuBar from '@/components/text-editor/MenuBar';
import TextEditorBottom from '@/components/text-editor/TextEditorBottom';

import Modal from '../Modal';
import { ModalProps } from '../ModalContainer';

interface Props {
  onSaveText: (text: string) => void;
  value: string;
  disabledEditor?: boolean;
  lastUpdated?: string;
  id?: string;
  isBookmark?: boolean;
}

const TextEditorModal = ({
  onSaveText,
  value,
  disabledEditor = false,
  lastUpdated,
  id,
  isBookmark,
  ...rest
}: ModalProps & Props) => {
  const setMemoList = useSetAtom(memoListAtom);

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: value,
    editable: !disabledEditor,
    autofocus: 'end',
  });

  useEffect(() => {
    if (!editor) return;

    if (rest.isOpen) {
      editor.chain().focus('end', { scrollIntoView: true });
    }
  }, [editor, rest.isOpen]);

  const onClickDelete = async () => {
    if (lastUpdated) {
      try {
        await deleteMemo(Number(id));
        setMemoList((prev) => prev.filter((memo) => memo.id !== id));
      } catch (error) {
        console.error('fail to delete memo', error);
      }
    } else {
      rest.onDismiss?.();
    }
  };

  return (
    <Modal closeIcon {...rest}>
      <div className="h-[25rem] py-3.5 w-[28.5rem]">
        <div className="px-6 mb-2">
          <MenuBar editor={editor} />
        </div>
        <div className="w-full bg-line-assistive h-[1px]" />

        <div className="px-6 py-4 h-[calc(100% - 2.2rem)] overflow-y-scroll">
          <EditorContent
            editor={editor}
            onKeyDown={(e) => {
              if (
                (e.ctrlKey && e.key === 'Enter') ||
                (e.metaKey && e.key === 'Enter')
              ) {
                onSaveText(editor?.getHTML() ?? '');
                rest.onDismiss?.();
              }
            }}
          />
        </div>

        <TextEditorBottom
          id={id}
          isBookmark={isBookmark}
          updatedAt={lastUpdated}
          deleteMemo={onClickDelete}
        />
      </div>
    </Modal>
  );
};

export default TextEditorModal;
