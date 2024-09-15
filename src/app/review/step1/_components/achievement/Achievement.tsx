'use client';

import { useAtomValue } from 'jotai';

import { disabledClickAttemptAtom } from '@/app/review/stores';

import { Score } from './Score';

export const Achievement = () => {
  const disabledClickAttempt = useAtomValue(disabledClickAttemptAtom);

  return (
    <div className="py-9 bg-surface-foreground rounded-2xl flex items-center justify-center flex-col">
      <div className="w-[26.25rem] flex justify-between mb-4 font-title-14 text-text-strong ">
        <p>아쉬워요</p>
        <p>만족해요</p>
      </div>
      <Score />
      {disabledClickAttempt['step1'] && (
        <p className="w-[26.25rem] mt-1 flex justify-start font-body-12 text-state-negative">
          만족도를 체크해 주세요.
        </p>
      )}
    </div>
  );
};
