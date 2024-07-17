'use client';

import { useState } from 'react';

import PlusIcon from '@/components/icons/PlusIcon';
import ScorePicker from '@/components/score-picker/ScorePicker';

export const CurrentWeek = () => {
  return (
    <>
      <p className="font-head-24">
        6월 1주차<sup className="font-body-14 ml-2">6/3 ~ 6/7</sup>
      </p>
      점 3개
    </>
  );
};

export const CurrentWeekScore = () => {
  const [selectedScore, setSelectedScore] = useState(0);

  return (
    <>
      <p className="font-head-20">n월 n주차는 어떠셨나요?</p>
      <div className="h-36 bg-surface-foreground rounded-2xl flex items-center justify-center flex-col gap-4">
        <div className="flex justify-between w-[26.25rem] font-title-14">
          <p>아쉬워요</p>
          <p>만족해요</p>
        </div>
        <ScorePicker score={selectedScore} setScore={(e) => setSelectedScore(e)} />
      </div>
    </>
  );
};

export const AddTodo = ({ week }: { week: 'current' | 'next' }) => {
  return (
    <button className="button-text button-small" onClick={() => console.log(week)}>
      <PlusIcon />
      <p className="font-body-13">추가</p>
    </button>
  );
};
