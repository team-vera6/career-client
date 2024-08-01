'use client';

import { SetStateAction } from 'jotai';
import { Dispatch } from 'react';

import RightActionSheetContainer from '@/components/action-sheets/Container';

import Score from '../../../_components/review/Score';
import { ReviewDetail } from './ReviewDetail';

interface Props {
  selectedReview: string;
  setShowDetail: Dispatch<SetStateAction<boolean>>;
}

export const ReviewDetailSheet = ({ setShowDetail }: Props) => {
  return (
    <RightActionSheetContainer
      closeActionSheet={() => setShowDetail(false)}
      buttons={[
        { text: '삭제', buttonStyle: 'line' },
        { text: '수정', buttonStyle: 'line' },
      ]}
    >
      <section className="flex flex-col">
        <div className="flex items-center justify-between mb-5.5">
          <p className="font-head-28 text-text-strong">6월 4주차</p>

          <div className="flex items-center gap-2">
            <p className="font-body-14 text-text-strong">만족도</p>
            <Score activeCount={5} className="bg-surface-foregroundOn" />
          </div>
        </div>

        <ReviewDetail />
      </section>
    </RightActionSheetContainer>
  );
};
