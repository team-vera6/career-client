import { Dispatch, SetStateAction } from 'react';

import Score from '@/app/(with-navigation)/history/_components/review/Score';
import { ReviewEdit } from '@/app/(with-navigation)/history/review/_components/review-edit-sheet/ReviewEdit';
import RightActionSheetContainer from '@/components/action-sheets/Container';
import { CurrentWeek } from '@/types/currentWeek';
import { Highlight } from '@/types/highlight';
import { Todo } from '@/types/todo';

interface Props {
  isOpen: boolean;
  selectedReviewId: number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  weekNumber: CurrentWeek;
  highlights: Omit<Highlight, 'currentWeek'>[];
  lowlights: Omit<Highlight, 'currentWeek'>[];
  completedTodos: Todo[];
  fetchList: () => Promise<void>;
}

export const ReviewEditSheet = ({
  isOpen,
  setIsOpen,
  weekNumber,
  highlights,
  lowlights,
  completedTodos,
  fetchList,
}: Props) => {
  return (
    <RightActionSheetContainer
      disableAnimation
      isOpen={isOpen}
      closeActionSheet={() => setIsOpen(false)}
      buttons={[
        {
          text: '저장',
          buttonStyle: 'primary',
          onClick: () => console.log('저장'),
        },
      ]}
    >
      <section className="flex flex-col">
        <div className="flex items-center justify-between mb-5.5">
          <p className="font-head-28 text-text-strong">
            {weekNumber.month}월 {weekNumber.week}주차
          </p>

          <div className="flex items-center gap-2">
            <p className="font-body-14 text-text-strong">만족도</p>
            <Score activeCount={5} className="bg-surface-foregroundOn" />
          </div>
        </div>

        <ReviewEdit
          highlights={highlights}
          lowlights={lowlights}
          completedTodos={completedTodos}
          fetchList={fetchList}
        />
      </section>
    </RightActionSheetContainer>
  );
};
