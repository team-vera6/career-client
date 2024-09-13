'use client';

import { useAtomValue } from 'jotai';

import ProgressDots from '@/components/progress-dots/ProgressDots';

import { reviewStepsAtom } from '../../stores';

export const ActivePage = () => {
  const { activePage } = useAtomValue(reviewStepsAtom);

  return (
    <ProgressDots totalCount={3} activeCount={activePage} displayType="step" />
  );
};
