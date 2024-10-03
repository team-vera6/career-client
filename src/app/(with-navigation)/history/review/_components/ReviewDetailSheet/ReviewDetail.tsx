'use client';

import { LastWeekReviewItem } from '@/app/review/_components/last-week-review/LastWeekReviewItem';
import HighlightCircleIcon from '@/components/icons/HighlightCircleIcon';
import LowlightCircleIcon from '@/components/icons/LowlightCircleIcon';
import DeletableInput from '@/components/inputs/deletable-input/DeletableInput';
import { Highlight } from '@/types/highlight';
import { Todo } from '@/types/todo';

interface Props {
  highlights: Omit<Highlight, 'currentWeek'>[];
  lowlights: Omit<Highlight, 'currentWeek'>[];
  completedTodos: Todo[];
}

export const ReviewDetail = ({
  highlights,
  lowlights,
  completedTodos,
}: Props) => {
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
              id={highlight.id}
              project={highlight.project}
              content={highlight.content}
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
              id={lowlight.id}
              project={lowlight.project}
              content={lowlight.content}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-title-14 text-text-strong">완료한 일</p>
        <div className="pl-8 flex flex-col gap-2">
          {completedTodos.map((todo) => (
            <DeletableInput
              key={`todo-${todo.id}`}
              value={todo.content}
              disabled
            />
          ))}
        </div>
      </div>
    </div>
  );
};
