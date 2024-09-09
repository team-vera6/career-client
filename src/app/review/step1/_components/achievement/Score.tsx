'use client';

import { useAtom, useSetAtom } from 'jotai';

import { getReviewId } from '@/apis/review/get';
import { addScore } from '@/apis/review/post';
import {
  pageButtonStatesAtom,
  reviewIdAtom,
  scoreAtom,
} from '@/app/review/stores';
import ScorePicker from '@/components/score-picker/ScorePicker';
import useToast from '@/hooks/useToast';
import { getCurrentWeek } from '@/utils/date';

const { year, month, week } = getCurrentWeek();
const WeekInfo = {
  year,
  month,
  week,
};

export const Score = () => {
  const { addToast } = useToast();

  const setPageButtonStates = useSetAtom(pageButtonStatesAtom);
  const [selectedScore, setSelectedScore] = useAtom(scoreAtom);
  const [reviewId, setReviewId] = useAtom(reviewIdAtom);

  const onClickPickScore = async (count: number) => {
    setSelectedScore(count);
    setPageButtonStates((prev) => ({ ...prev, step1: true }));

    if (!reviewId) {
      // 이미 회고 id를 발급 받은 경우 - get으로 id 가져오기
      const reviewIdResponse = await getReviewId(WeekInfo);

      if (reviewIdResponse?.id) {
        setReviewId(reviewIdResponse.id);
        return;
      }

      // 처음 회고를 이용하는 경우 - post로 id 발급
      try {
        const response = await addScore({
          weekNumber: {
            year,
            month,
            week,
          },
          like: selectedScore,
        });
        setReviewId(response.id);
      } catch (err) {
        addToast({
          message: '다시 시도해 주세요.',
          iconType: 'error',
        });
      }
    }
  };

  return (
    <ScorePicker
      score={selectedScore}
      setScore={(score) => onClickPickScore(score)}
    />
  );
};
