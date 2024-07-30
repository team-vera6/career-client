'use client';

import { SetStateAction } from 'jotai';
import { Dispatch } from 'react';

import RightActionSheetContainer from '@/components/action-sheets/Container';

interface Props {
  selectedReview: string;
  setShowDetail: Dispatch<SetStateAction<boolean>>;
}

export const ReviewDetailSheet = ({ selectedReview, setShowDetail }: Props) => {
  return (
    <RightActionSheetContainer
      closeActionSheet={() => setShowDetail(false)}
      buttons={[
        { text: '삭제', buttonStyle: 'line' },
        { text: '수정', buttonStyle: 'line' },
      ]}
    >
      오호랑
    </RightActionSheetContainer>
  );
};
