'use client';

import { useEffect, useState } from 'react';

import { AllMemosResponse, getAllMemos } from '@/apis/memo/get';

import EmptyMemoHistory from './EmptyMemoHistory';

const MemoHistory = () => {
  const [memos, setMemos] = useState<AllMemosResponse>();

  useEffect(() => {
    (async () => {
      const response = await getAllMemos({});
      setMemos(response);
    })();
  }, []);

  if (!memos || memos.contents.length === 0) return <EmptyMemoHistory />;

  return (
    <>
      {/* {memos.contents.map(({ weekNumber, memos }) => (
        <MemoWeekGroup
          key={`${weekNumber.year}-${weekNumber.month}-${weekNumber.week}`}
          currentWeek={weekNumber}
          memos={memos}
        />
      ))} */}
      <p>memo</p>
    </>
  );
};

export default MemoHistory;
