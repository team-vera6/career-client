'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

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

export const Score = () => {
  const { addToast } = useToast();

  const setPageButtonStates = useSetAtom(pageButtonStatesAtom);
  const [selectedScore, setSelectedScore] = useAtom(scoreAtom);
  const [reviewId, setReviewId] = useAtom(reviewIdAtom);

  useEffect(() => {
    (async () => {
      const reviewIdResponse = await getReviewId({ year, month, week });

      if (reviewIdResponse?.id) {
        setReviewId(reviewIdResponse.id);
        setSelectedScore(reviewIdResponse.like);
      }
    })();
  }, [reviewId, setReviewId, setSelectedScore]);

  const onClickPickScore = async (count: number) => {
    setSelectedScore(count);
    setPageButtonStates((prev) => ({ ...prev, step1: true }));

    if (reviewId) return;

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
  };

  return (
    <ScorePicker
      score={selectedScore}
      setScore={(score) => onClickPickScore(score)}
    />
  );
};
