'use client';

import { useAtom, useSetAtom } from 'jotai';

import { addScore } from '@/apis/review/post';
import {
  pageButtonStatesAtom,
  reviewIdAtom,
  scoreAtom,
} from '@/app/review/stores';
import ScorePicker from '@/components/score-picker/ScorePicker';
import useToast from '@/hooks/useToast';
import { getCurrentWeek } from '@/utils/date';

export const Score = () => {
  const { addToast } = useToast();

  const setPageButtonStates = useSetAtom(pageButtonStatesAtom);
  const [selectedScore, setSelectedScore] = useAtom(scoreAtom);
  const setReviewId = useSetAtom(reviewIdAtom);

  const { year, month, week } = getCurrentWeek();

  const onClickPickScore = async (count: number) => {
    setSelectedScore(count);
    setPageButtonStates((prev) => ({ ...prev, step1: true }));

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
  };

  return (
    <ScorePicker
      score={selectedScore}
      setScore={(score) => onClickPickScore(score)}
    />
  );
};
