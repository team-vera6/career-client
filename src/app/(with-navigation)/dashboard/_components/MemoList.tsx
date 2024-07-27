'use client';

import Image from 'next/image';
import { useState } from 'react';

import EmptyMemoImage from '@/assets/images/memo-empty.png';
import PlusIcon from '@/components/icons/PlusIcon';
import Memo from '@/components/memo/Memo';
import TextEditorModal from '@/components/modal/text-editor';

const MemoList = () => {
  const [openTextEditor, setOpenTextEditor] = useState(false);
  const [memos, setMemos] = useState<
    { title: string; memo: string; date: string }[]
  >([]);

  return (
    <section className="shrink-0 min-w-[252px]">
      <div className="flex items-center justify-between w-full">
        <p className="font-title-16 text-text-strong">이번 주 메모</p>
        <button
          className="button-line button-small h-8"
          onClick={() => setOpenTextEditor(true)}
        >
          <PlusIcon size={20} />
          <p className="font-body-13 text-text-strong">추가</p>
        </button>
      </div>

      {memos.length > 0 ? (
        <div className="flex flex-col gap-3 mt-4">
          {memos.map((memo, index) => (
            <Memo
              key={index}
              title={memo.title}
              memo={memo.memo}
              date={memo.date}
            />
          ))}
        </div>
      ) : (
        <div className="w-[15.75rem] flex items-center flex-col gap-5 mt-[3.75rem]">
          <p className="font-body-16 text-text-normal">남긴 메모가 없어요</p>
          <Image src={EmptyMemoImage} width={100} height={100} alt="no memo" />
        </div>
      )}

      <TextEditorModal
        isOpen={openTextEditor}
        onDismiss={() => {
          setOpenTextEditor(false);
        }}
        onSaveText={(text) => {
          setMemos((prev) => [
            ...prev,
            { title: '', memo: text, date: new Date().toLocaleDateString() },
          ]);
        }}
      />
    </section>
  );
};

export default MemoList;
