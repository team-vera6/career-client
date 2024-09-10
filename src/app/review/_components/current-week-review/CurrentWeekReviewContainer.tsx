'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { getHighlightList, getLowlightList } from '@/apis/review/get';
import { getCurrentWeek } from '@/utils/date';

import { highLightListAtom, lowLightListAtom } from '../../stores';
import { ReviewType } from '../../types';
import { CurrentWeekReviewItem } from './CurrentWeekReviewItem';

const { year, month, week } = getCurrentWeek();

const currentWeekInfo = {
  year,
  month,
  week,
};

export const CurrentWeekReviewContainer = ({
  category,
}: {
  category: ReviewType;
}) => {
  const [highLightList, setHighLightList] = useAtom(highLightListAtom);
  const [lowLightList, setLowLightList] = useAtom(lowLightListAtom);

  useEffect(() => {
    if (category === 'highLight') {
      async () => {
        const response = await getHighlightList(currentWeekInfo);
        setHighLightList(response.highlights);
      };
    } else {
      async () => {
        const response = await getLowlightList(currentWeekInfo);
        setLowLightList(response.lowlights);
      };
    }
  }, [
    highLightList,
    lowLightList,
    category,
    setHighLightList,
    setLowLightList,
  ]);

  return (
    <div className="w-full p-5 bg-surface-foreground rounded-xl flex flex-col gap-6 mb-3">
      {category === 'highLight'
        ? highLightList.map((el, index) => (
            <CurrentWeekReviewItem
              key={String(el.id)}
              category={category}
              index={index}
              {...el}
            />
          ))
        : lowLightList.map((el, index) => (
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
