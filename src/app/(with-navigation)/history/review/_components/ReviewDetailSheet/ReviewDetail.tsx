'use client';

import { useEffect, useState } from 'react';

import { getHighlights, getLowlights, getTodos } from '@/apis/reports/get';
import { LastWeekReviewItem } from '@/app/review/_components/last-week-review/LastWeekReviewItem';
import HighlightCircleIcon from '@/components/icons/HighlightCircleIcon';
import LowlightCircleIcon from '@/components/icons/LowlightCircleIcon';
import DeletableInput from '@/components/inputs/deletable-input/DeletableInput';
import { CurrentWeek } from '@/types/currentWeek';
import { Highlight } from '@/types/highlight';
import { Todo } from '@/types/todo';

interface Props {
  weekNumber: CurrentWeek;
}

export const ReviewDetail = ({ weekNumber }: Props) => {
  const [highlights, setHighlights] = useState<
    Omit<Highlight, 'currentWeek'>[]
  >([]);
  const [lowlights, setLowlights] = useState<Omit<Highlight, 'currentWeek'>[]>(
    [],
  );
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      Promise.all([
        getHighlights({
          year: weekNumber.year,
          month: weekNumber.month,
          week: weekNumber.week,
        }).then((res) => setHighlights(res.highlights)),
        getLowlights({
          year: weekNumber.year,
          month: weekNumber.month,
          week: weekNumber.week,
        }).then((res) => setLowlights(res.lowlights)),
        getTodos({
          year: weekNumber.year,
          month: weekNumber.month,
          week: weekNumber.week,
        }).then((res) => setCompletedTodos(res.todos)),
      ]);

      setCompletedTodos((prev) =>
        prev.filter((todo) => todo.status === 'done'),
      );
    })();
  }, [weekNumber]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <HighlightCircleIcon size={24} />
          <p className="font-title-14 text-text-strong">하이라이트</p>
        </div>
        <div className="pl-8 flex flex-col gap-2">
          {highlights.map((highlight) => (
            <LastWeekReviewItem
              key={`highlight-${highlight.id}`}
              text={highlight.content}
              project="연동된 프로젝트"
              progressCount={37}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <LowlightCircleIcon size={24} />
          <p className="font-title-14 text-text-strong">로우라이트</p>
        </div>
        <div className="pl-8 flex flex-col gap-2">
          {lowlights.map((lowlight) => (
            <LastWeekReviewItem
              key={`lowlight-${lowlight.id}`}
              text={lowlight.content}
              project="연동된 프로젝트"
              progressCount={79}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-title-14 text-text-strong">완료한 일</p>
        <div className="pl-8 flex flex-col gap-2">
          {completedTodos.map((todo) => (
            <DeletableInput key={`todo-${todo.id}`} value={todo.content} />
          ))}
        </div>
      </div>
    </div>
  );
};
