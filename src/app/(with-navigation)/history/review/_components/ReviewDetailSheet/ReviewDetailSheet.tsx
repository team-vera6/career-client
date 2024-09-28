import { SetStateAction } from 'jotai';
import { Dispatch } from 'react';

import RightActionSheetContainer from '@/components/action-sheets/Container';
import { CurrentWeek } from '@/types/currentWeek';

// eslint-disable-next-line import/no-named-as-default
import Score from '../../../_components/review/Score';
import { ReviewDetail } from './ReviewDetail';

interface Props {
  isOpen: boolean;
  selectedReviewId: number;
  setShowDetail: Dispatch<SetStateAction<boolean>>;
  weekNumber: CurrentWeek;
}

export const ReviewDetailSheet = ({
  isOpen,
  setShowDetail,
  weekNumber,
}: Props) => {
  return (
    <RightActionSheetContainer
      closeActionSheet={() => setShowDetail(false)}
      isOpen={isOpen}
      buttons={[
        { text: '삭제', buttonStyle: 'line' },
        { text: '수정', buttonStyle: 'line' },
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
    </RightActionSheetContainer>
  );
};
