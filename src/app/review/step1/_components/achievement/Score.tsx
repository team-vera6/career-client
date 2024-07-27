'use client';

import { useAtom, useSetAtom } from 'jotai';

import { pageButtonStatesAtom, scoreAtom } from '@/app/review/stores';
import ScorePicker from '@/components/score-picker/ScorePicker';

export const Score = () => {
  const setPageButtonStates = useSetAtom(pageButtonStatesAtom);
  const [selectedScore, setSelectedScore] = useAtom(scoreAtom);

  const onClickPickScore = (count: number) => {
    setSelectedScore(count);
    setPageButtonStates((prev) => ({ ...prev, step1: true }));
  };

  return (
    <ScorePicker
      score={selectedScore}
      setScore={(score) => onClickPickScore(score)}
    />
  );
};
