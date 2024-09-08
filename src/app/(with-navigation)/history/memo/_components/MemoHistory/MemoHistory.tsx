'use client';

import { useEffect, useState } from 'react';

import { AllMemosResponse, getAllMemos } from '@/apis/memo/get';
import { Memo } from '@/types/memo';
import { sortByWeek } from '@/types/sort';

import EmptyMemoHistory from './EmptyMemoHistory';
import MemoWeekGroup from './MemoWeekGroup';

const MemoHistory = () => {
  const [memos, setMemos] = useState<
    {
      weekNumber: { year: number; month: number; week: number };
      memos: Memo[];
    }[]
  >([]);

  const groupMemosByWeek = (receivedMemos: AllMemosResponse) => {
    const groupedMemos = receivedMemos.contents.reduce(
      (acc, cur) => {
        const { year, month, week } = cur.weekNumber;

        const item = {
          id: cur.id,
          content: cur.content,
          isMarked: cur.isMarked,
          updatedAt: cur.updatedAt,
        };

        const key = `${year}-${month}-${week}`;
        if (acc[key]) {
          acc[key].memos.push(item);
        } else {
          acc[key] = {
            weekNumber: cur.weekNumber,
            memos: [item],
          };
        }

        return acc;
      },
      {} as Record<
        string,
        {
          weekNumber: { year: number; month: number; week: number };
          memos: Memo[];
        }
      >,
    );

    return Object.values(groupedMemos).sort(sortByWeek);
  };

  useEffect(() => {
    (async () => {
      const response = await getAllMemos({});

      const sorted = groupMemosByWeek(response);
      setMemos(sorted);
    })();
  }, []);

  if (memos.length === 0) return <EmptyMemoHistory />;

  return (
    <>
      {memos.map(({ weekNumber, memos }) => (
        <MemoWeekGroup
          key={`${weekNumber.year}-${weekNumber.month}-${weekNumber.week}`}
          currentWeek={weekNumber}
          memos={memos}
        />
      ))}
      <p>memo</p>
    </>
  );
};

export default MemoHistory;
