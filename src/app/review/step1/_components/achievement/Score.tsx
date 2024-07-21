'use client';

import { useState } from 'react';

import ScorePicker from '@/components/score-picker/ScorePicker';

export const Score = () => {
  const [selectedScore, setSelectedScore] = useState(0);

  return (
    <ScorePicker score={selectedScore} setScore={(e) => setSelectedScore(e)} />
  );
};
