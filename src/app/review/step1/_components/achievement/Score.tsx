'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { getReviewId } from '@/apis/review/get';
import { addScore } from '@/apis/review/post';
import {
  disabledClickAttemptAtom,
  pageButtonStatesAtom,
  reviewIdAtom,
  scoreAtom,
} from '@/app/review/stores';
import ScorePicker from '@/components/score-picker/ScorePicker';
import { getCurrentWeek } from '@/utils/date';

const { year, month, week } = getCurrentWeek();

export const Score = () => {
  const setPageButtonStates = useSetAtom(pageButtonStatesAtom);
  const setDisabledClickAttempt = useSetAtom(disabledClickAttemptAtom);

  const [selectedScore, setSelectedScore] = useAtom(scoreAtom);
  const [reviewId, setReviewId] = useAtom(reviewIdAtom);

  useEffect(() => {
    (async () => {
      try {
        const reviewIdResponse = await getReviewId({ year, month, week });
        if (reviewIdResponse) {
          setReviewId(reviewIdResponse.id);
          setSelectedScore(reviewIdResponse.like);
          setPageButtonStates((prev) => ({
            ...prev,
            step1: !!reviewIdResponse.id,
          }));
        }
      } catch (error) {
        setPageButtonStates((prev) => ({ ...prev, step1: false }));
      }
    })();
  }, [setPageButtonStates, setReviewId, setSelectedScore]);

  const onClickPickScore = async (count: number) => {
    setSelectedScore(count);
    setPageButtonStates((prev) => ({ ...prev, step1: true }));
    setDisabledClickAttempt((prev) => ({ ...prev, step1: false }));

    if (reviewId) return;

    // 처음 회고를 이용하는 경우 - post로 id 발급
    try {
      const response = await addScore({
        weekNumber: {
          year,
          month,
          week,
        },
        like: count,
      });

      setReviewId(response.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScorePicker
      score={selectedScore}
      setScore={(score) => onClickPickScore(score)}
    />
  );
};
