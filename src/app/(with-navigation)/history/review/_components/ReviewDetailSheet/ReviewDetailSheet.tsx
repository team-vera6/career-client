import { SetStateAction } from 'jotai';
import { Dispatch, useState } from 'react';

import { deleteReview } from '@/apis/review/delete';
import RightActionSheetContainer from '@/components/action-sheets/Container';
import Alert from '@/components/modal/Alert';
import useToast from '@/hooks/useToast';
import { CurrentWeek } from '@/types/currentWeek';

// eslint-disable-next-line import/no-named-as-default
import Score from '../../../_components/review/Score';
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
  const { addToast } = useToast();

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

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
          onClick: () => {
            addToast({
              iconType: 'error',
              message: '준비 중인 기능이에요.',
            });
          },
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

        <ReviewDetail weekNumber={weekNumber} />
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
  );
};
