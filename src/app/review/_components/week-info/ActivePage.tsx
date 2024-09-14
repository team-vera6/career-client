'use client';

import { useAtomValue } from 'jotai';

import ProgressDots from '@/components/progress-dots/ProgressDots';

import { reviewStepAtom } from '../../stores';

export const ActivePage = () => {
  const reviewStep = useAtomValue(reviewStepAtom);

  return (
    <ProgressDots totalCount={3} activeCount={reviewStep} displayType="step" />
  );
};
