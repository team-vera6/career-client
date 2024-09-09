'use client';

import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { highLightListAtom, lowLightListAtom } from '../../stores';
import { ReviewType } from '../../types';
import { CurrentWeekReviewItem } from './CurrentWeekReviewItem';

export const CurrentWeekReviewContainer = ({
  category,
}: {
  category: ReviewType;
}) => {
  const highLightList = useAtomValue(highLightListAtom);
  const lowLightList = useAtomValue(lowLightListAtom);

  const [reviewList, setReviewList] = useState(
    category === 'highLight' ? highLightList : lowLightList,
  );

  useEffect(() => {
    if (category === 'highLight') {
      setReviewList(highLightList);
    } else {
      setReviewList(lowLightList);
    }
  }, [highLightList, lowLightList, category]);

  return (
    <div className="w-full p-5 bg-surface-foreground rounded-xl flex flex-col gap-6 mb-3">
      {reviewList.map((el, index) => (
        <CurrentWeekReviewItem
          key={String(el.id)}
          category={category}
          index={index}
          {...el}
        />
      ))}
    </div>
  );
};
