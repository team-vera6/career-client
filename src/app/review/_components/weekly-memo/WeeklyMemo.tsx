'use client';

import { useEffect, useState } from 'react';

import { getMemos } from '@/apis/memo/get';
import NoMemoIcon from '@/components/icons/NoMemoIcon';
import Memo from '@/components/memo/Memo';
import { Memo as MemoType } from '@/types/memo';
import { getCurrentWeek } from '@/utils/date';

const { year, month, week } = getCurrentWeek();

const WeeklyMemo = () => {
  const [memos, setMemos] = useState<MemoType[]>([]);

  const getMemoList = async () => {
    const data = await getMemos({ year, month, week });
    setMemos(
      data.memos.map((memo) => {
        return {
          id: memo.id,
          isMarked: memo.isMarked,
          content: memo.content,
          updatedAt: memo.updatedAt,
        };
      }),
    );
  };

  useEffect(() => {
    getMemoList();
  }, []);

  if (memos.length === 0)
    return (
      <div className="w-[15.75rem] h-[8.75rem] flex flex-col items-center justify-center gap-3 bg-surface-foregroundOn rounded-lg">
        <NoMemoIcon size={24} />
        <p className="font-title-14 text-text-neutral">작성한 메모가 없어요</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-3">
      {memos.map((memo, index) => (
        <Memo
          id={String(memo.id)}
          key={String(index)}
          memo={memo.content}
          date={memo.updatedAt}
          disabledEditor
          isBookmark={memo.isMarked}
        />
      ))}
    </div>
  );
};

export default WeeklyMemo;
