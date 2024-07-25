'use client';

import { useAtomValue } from 'jotai';

import { highLightListAtom, lowLightListAtom } from '../../stores';
import { ReviewType } from '../../types';
import { CurrentReviewItem } from './CurrentReviewItem';

export const CurrentReviewContainer = ({
  category,
}: {
  category: ReviewType;
}) => {
  const highLightList = useAtomValue(highLightListAtom);
  const lowLightList = useAtomValue(lowLightListAtom);

  const reviewList = category === 'highLight' ? highLightList : lowLightList;

  return (
    <div className="w-full p-5 bg-surface-foreground rounded-xl flex flex-col gap-6 mb-3">
      {reviewList.map((el, index) => (
        <CurrentReviewItem key={index} category={category} {...el} />
      ))}
    </div>
  );
};
