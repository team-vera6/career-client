'use client';

import { useEffect, useState } from 'react';

import { getMemos } from '@/apis/memo/get';
import Memo from '@/components/memo/Memo';
import { getCurrentWeek } from '@/utils/date';

interface WeeklyMemoType {
  id: string;
  memo: string;
  isBookmark: boolean;
  date: string;
}

const WeeklyMemo = () => {
  const [memos, setMemos] = useState<WeeklyMemoType[]>([]);
  const { year, month, week } = getCurrentWeek();

  const getMemoList = async () => {
    const data = await getMemos({ year, month, week });
    setMemos(
      data.memos.map((memo) => {
        return {
          id: String(memo.id),
          isBookmark: memo.isMarked,
          memo: memo.content,
          date: `${month}.${week}`,
        };
      }),
    );
  };

  useEffect(() => {
    getMemoList();
  }, []);

  console.log(memos);

  return (
    <>
      {memos.length > 0 ? (
        <div className="flex flex-col gap-3">
          {memos.map((memo, index) => (
            <Memo
              id={String(index)}
              key={index}
              memo={memo.memo}
              date={memo.date}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default WeeklyMemo;
