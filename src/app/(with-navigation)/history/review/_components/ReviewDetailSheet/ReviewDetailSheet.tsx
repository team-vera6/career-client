import { SetStateAction } from 'jotai';
import { Dispatch, useEffect, useState } from 'react';

import { getHighlights, getLowlights, getTodos } from '@/apis/reports/get';
import { deleteReview } from '@/apis/review/delete';
import RightActionSheetContainer from '@/components/action-sheets/Container';
import Alert from '@/components/modal/Alert';
import { CurrentWeek } from '@/types/currentWeek';
import { Highlight } from '@/types/highlight';
import { Todo } from '@/types/todo';

// eslint-disable-next-line import/no-named-as-default
import Score from '../../../_components/review/Score';
import { ReviewEditSheet } from '../review-edit-sheet/ReviewEditSheet';
import { ReviewDetail } from './ReviewDetail';

interface Props {
  isOpen: boolean;
  selectedReviewId: number;
  setShowDetail: Dispatch<SetStateAction<boolean>>;
  weekNumber: CurrentWeek;
  fetchList: () => Promise<void>;
}

export const ReviewDetailSheet = ({
  isOpen,
  selectedReviewId,
  setShowDetail,
  weekNumber,
  fetchList,
}: Props) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showEditSheet, setShowEditSheet] = useState(false);

  const [highlights, setHighlights] = useState<
    Omit<Highlight, 'currentWeek'>[]
  >([]);
  const [lowlights, setLowlights] = useState<Omit<Highlight, 'currentWeek'>[]>(
    [],
  );
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const fetchDatas = async () => {
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

    setCompletedTodos((prev) => prev.filter((todo) => todo.status === 'done'));
  };

  useEffect(() => {
    if (!isOpen) return;

    fetchDatas();
  }, [weekNumber, isOpen]);

  const onClickDelete = async () => {
    try {
      await deleteReview(selectedReviewId);
      await fetchList();
      setShowDetail(false);
    } catch (error) {
      console.error('fail to delete review', error);
    }
  };

  return (
    <>
      <RightActionSheetContainer
        closeActionSheet={() => setShowDetail(false)}
        isOpen={isOpen}
        buttons={[
          {
            text: '삭제',
            buttonStyle: 'line',
            onClick: () => setShowDeleteAlert(true),
          },
          {
            text: '수정',
            buttonStyle: 'line',
            onClick: () => setShowEditSheet(true),
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

          <ReviewDetail
            highlights={highlights}
            lowlights={lowlights}
            completedTodos={completedTodos}
          />
        </section>

        <Alert
          isOpen={showDeleteAlert}
          onDismiss={() => setShowDeleteAlert(false)}
          title="정말로 삭제하시겠어요?"
          content=""
          buttons={{
            left: { text: '취소' },
            right: { text: '확인', onClick: onClickDelete },
          }}
        />
      </RightActionSheetContainer>

      <ReviewEditSheet
        selectedReviewId={selectedReviewId}
        isOpen={showEditSheet}
        setIsOpen={() => setShowEditSheet(false)}
        weekNumber={weekNumber}
        highlights={highlights}
        lowlights={lowlights}
        completedTodos={completedTodos}
        fetchList={fetchDatas}
      />
    </>
  );
};
