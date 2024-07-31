'use client';

import { useSetAtom } from 'jotai';
import { useState } from 'react';

import { memoListAtom } from '@/app/review/stores';
import PlusIcon from '@/components/icons/PlusIcon';
import TextEditorModal from '@/components/modal/text-editor';

const AddButton = () => {
  const setMemos = useSetAtom(memoListAtom);
  const [openTextEditor, setOpenTextEditor] = useState(false);

  return (
    <>
      <button
        className="button-line button-small h-8"
        onClick={() => setOpenTextEditor(true)}
      >
        <PlusIcon size={20} />
        <p className="font-body-13 text-text-strong">추가</p>
      </button>

      <TextEditorModal
        isOpen={openTextEditor}
        onDismiss={() => {
          setOpenTextEditor(false);
        }}
        onSaveText={(text) => {
          setMemos((prev) => [
            ...prev,
            {
              id: new Date().toString(),
              title: '',
              memo: text,
              date: '7.22',
            },
          ]);
        }}
      />
    </>
  );
};

export default AddButton;
