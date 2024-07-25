'use client';

import { useSetAtom } from 'jotai';
import { useState } from 'react';

import { pageButtonStatesAtom } from '@/app/review/stores';
import ScorePicker from '@/components/score-picker/ScorePicker';

export const Score = () => {
  const setPageButtonStates = useSetAtom(pageButtonStatesAtom);
  const [selectedScore, setSelectedScore] = useState(0);

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
