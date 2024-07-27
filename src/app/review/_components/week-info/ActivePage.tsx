'use client';

import { useAtomValue } from 'jotai';

import ProgressDots from '@/components/progress-dots/ProgressDots';

import { reviewPageAtom } from '../../stores';

export const ActivePage = () => {
  const activePage = useAtomValue(reviewPageAtom);

  return (
    <ProgressDots totalCount={3} activeCount={activePage} displayType="step" />
  );
};
