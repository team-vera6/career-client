'use client';

import { useState } from 'react';

import ScorePicker from '@/components/score-picker/ScorePicker';

const WeekInfo = () => {
  const [selectedScore, setSelectedScore] = useState(0);
  return (
    <section className="w-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="font-head-24">
          6월 1주차<sup className="font-body-14 ml-2">6/3 ~ 6/7</sup>
        </p>
        점 3개
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-head-20">6월 1주차는 어떠셨나요?</p>
        <div className="h-36 bg-surface-foreground rounded-2xl flex items-center justify-center flex-col gap-4">
          <div className="flex justify-between w-[26.25rem] font-title-14">
            <p>아쉬워요</p>
            <p>만족해요</p>
          </div>
          <ScorePicker score={selectedScore} setScore={(e) => setSelectedScore(e)} />
        </div>
      </div>
    </section>
  );
};

export default WeekInfo;
