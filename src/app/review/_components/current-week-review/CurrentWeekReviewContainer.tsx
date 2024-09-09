'use client';

import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { DropdownItem } from '@/components/dropdown/Dropdown';

import { highLightListAtom, lowLightListAtom } from '../../stores';
import { ReviewType } from '../../types';
import { CurrentWeekReviewItem } from './CurrentWeekReviewItem';

export const CurrentWeekReviewContainer = ({
  category,
}: {
  category: ReviewType;
}) => {
  const [highLightList, setHighLightList] = useAtom(highLightListAtom);
  const [lowLightList, setLowLightList] = useAtom(lowLightListAtom);

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

  const selectProject = (item: DropdownItem, reviewId: string | number) => {
    const selectedItem = {
      id: item.id,
      content: item.name,
      progressRate: 0,
    };
    const setter =
      category === 'highLight' ? setHighLightList : setLowLightList;

    setter((prev) =>
      prev.map((review) =>
        String(review.id) === String(reviewId)
          ? {
              ...review,
              project: selectedItem,
            }
          : review,
      ),
    );
  };

  return (
    <div className="w-full p-5 bg-surface-foreground rounded-xl flex flex-col gap-6 mb-3">
      {reviewList.map((el, index) => (
        <CurrentWeekReviewItem
          key={String(el.id)}
          category={category}
          index={index}
          onSelect={(item) => selectProject(item, el.id)}
          {...el}
        />
      ))}
    </div>
  );
};
