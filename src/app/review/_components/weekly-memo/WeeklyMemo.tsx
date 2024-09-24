'use client';

import { useEffect, useState } from 'react';

import { getMemos } from '@/apis/memo/get';
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

  if (memos.length === 0) return null;

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
