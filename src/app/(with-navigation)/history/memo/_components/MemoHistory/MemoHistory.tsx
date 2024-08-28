'use client';

import { useEffect, useState } from 'react';

import { AllMemos, getAllMemos } from '@/apis/memo/get';

import EmptyMemoHistory from './EmptyMemoHistory';
import MemoWeekGroup from './MemoWeekGroup';

const MemoHistory = () => {
  const [memos, setMemos] = useState<AllMemos>();

  useEffect(() => {
    (async () => {
      const response = await getAllMemos({ id: 0 });
      setMemos(response);
    })();
  }, []);

  if (!memos || memos.contents.length < 1) return <EmptyMemoHistory />;

  return (
    <>
      {memos.contents.map(({ weekNumber, memos }) => (
        <MemoWeekGroup
          key={`${weekNumber.year}-${weekNumber.month}-${weekNumber.week}`}
          currentWeek={weekNumber}
          memos={memos}
        />
      ))}
    </>
  );
};

export default MemoHistory;
