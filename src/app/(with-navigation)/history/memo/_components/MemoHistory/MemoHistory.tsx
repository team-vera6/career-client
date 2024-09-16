'use client';

import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { AllMemosResponse, getAllMemos } from '@/apis/memo/get';
import { showOnlyBookmarkAtom } from '@/stores/bookmark/showOnlyBookmarkAtom';
import { historyMemoListAtom, MemoList } from '@/stores/memos/memos';
import { sortByWeek } from '@/types/sort';

import EmptyMemoHistory from './EmptyMemoHistory';
import MemoWeekGroup from './MemoWeekGroup';

const MemoHistory = () => {
  const showBookmarkOnly = useAtomValue(showOnlyBookmarkAtom);

  const [memos, setMemos] = useAtom(historyMemoListAtom); // grouping 된 전체 메모 리스트
  const [memosForDisplay, setMemosForDisplay] = useState<MemoList[]>([]); // 북마크만 보기 옵션 적용된 메모 리스트

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
      {} as Record<string, MemoList>,
    );

    return Object.values(groupedMemos).sort(sortByWeek);
  };

  const filterOnlyBookmark = (receivedMemos: MemoList[]) => {
    const onlyBookmarkedMemos = receivedMemos.map((week) => ({
      weekNumber: week.weekNumber,
      memos: week.memos.filter((memo) => memo.isMarked),
    }));

    const removedEmptyWeeks = onlyBookmarkedMemos.filter(
      (week) => week.memos.length > 0,
    );

    return removedEmptyWeeks;
  };

  useEffect(() => {
    (async () => {
      const response = await getAllMemos({});

      const sorted = groupMemosByWeek(response);
      setMemos(sorted);
    })();
  }, []);

  useEffect(() => {
    if (!showBookmarkOnly) {
      setMemosForDisplay(memos);
    } else {
      setMemosForDisplay(filterOnlyBookmark(memos));
    }
  }, [memos, showBookmarkOnly]);

  if (memos.length === 0) return <EmptyMemoHistory />;

  return (
    <>
      {memosForDisplay.map(({ weekNumber, memos }) => (
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
