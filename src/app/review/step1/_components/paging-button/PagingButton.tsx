'use client';

import { useAtomValue, useSetAtom } from 'jotai';

import { addScore } from '@/apis/review/post';
import {
  pageButtonStatesAtom,
  reviewIdAtom,
  scoreAtom,
} from '@/app/review/stores';
import { usePagingButton } from '@/app/review/utils';
import useToast from '@/hooks/useToast';
import { getCurrentWeek } from '@/utils/date';

export const PagingButton = () => {
  const { onClickPagingButton } = usePagingButton();
  const { addToast } = useToast();

  const pageButtonStates = useAtomValue(pageButtonStatesAtom);
  const selectedScore = useAtomValue(scoreAtom);
  const setReviewId = useSetAtom(reviewIdAtom);

  const { year, month, week } = getCurrentWeek();

  const onClickButton = async () => {
    const body = {
      weekNumber: {
        year,
        month,
        week,
      },
      like: selectedScore,
    };

    try {
      const response = await addScore(body);
      setReviewId(response.id);
      onClickPagingButton({ path: 'step2', activePage: 2 });
    } catch (err) {
      addToast({
        message: '다시 시도해주세요.',
        iconType: 'error',
      });
    }
  };

  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="button-primary button-large"
        onClick={onClickButton}
        disabled={!pageButtonStates['step1']}
      >
        다음
      </button>
    </div>
  );
};
