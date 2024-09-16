'use client';

import { format } from 'date-fns';
import { useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getMemos } from '@/apis/memo/get';
import { addNewMemo } from '@/apis/memo/post';
import { memoListAtom } from '@/app/review/stores';
import EmptyMemoImage from '@/assets/images/memo-empty.png';
import PlusIcon from '@/components/icons/PlusIcon';
import Memo from '@/components/memo/Memo';
import TextEditorModal from '@/components/modal/text-editor';
import { displayWeekAtom } from '@/stores/week/displayWeek';
import { CurrentWeek } from '@/types/currentWeek';

const MemoList = () => {
  const [openTextEditor, setOpenTextEditor] = useState(false);
  const [memos, setMemos] = useAtom(memoListAtom);
  const currentWeek = useAtomValue(displayWeekAtom);

  const getMemoList = async ({ year, month, week }: CurrentWeek) => {
    const data = await getMemos({
      year,
      month,
      week,
    });
    setMemos(
      data.memos.map((memo) => {
        return {
          id: String(memo.id),
          isBookmark: memo.isMarked,
          memo: memo.content,
          date: memo.updatedAt,
        };
      }),
    );
  };

  useEffect(() => {
    getMemoList(currentWeek);
  }, [currentWeek]);

  const addMemo = async (content: string) => {
    try {
      await addNewMemo({ content, isMarked: false });
    } catch (error) {
      console.log('fail to add memo', error);
    }
  };

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
              id={memo.id}
              key={index}
              title={memo.title}
              memo={memo.memo}
              date={memo.date}
            />
          ))}
        </div>
      ) : (
        <div className="w-[15.75rem] flex items-center flex-col gap-5 mt-[3.75rem]">
          <p className="font-body-16 text-text-normal">
            번뜩이는 아이디어는 메모에 남겨봐요.
          </p>
          <Image src={EmptyMemoImage} width={100} height={100} alt="no memo" />
        </div>
      )}

      <TextEditorModal
        isOpen={openTextEditor}
        onDismiss={() => {
          setOpenTextEditor(false);
        }}
        onSaveText={async (text) => {
          await addMemo(text);
          setMemos((prev) => [
            ...prev,
            {
              id: new Date().toString(),
              title: '',
              memo: text,
              date: format(new Date(), 'yyyy-MM-dd HH:mm'),
            },
          ]);
        }}
        value={''}
      />
    </section>
  );
};

export default MemoList;
