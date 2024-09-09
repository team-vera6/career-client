'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { getHighlightList, getLowlightList } from '@/apis/review/get';
import { getPrevWeek } from '@/utils/date';

import { lastHighLightListAtom, lastLowLightListAtom } from '../../stores';
import { ReviewType } from '../../types';
import { LastWeekReviewItem } from './LastWeekReviewItem';

const { prevYear, prevMonth, prevWeek } = getPrevWeek();

export const LastWeekReviewContainer = ({
  category,
}: {
  category: ReviewType;
}) => {
  const [lastHighLightList, setLastHighLightList] = useAtom(
    lastHighLightListAtom,
  );
  const [lastLowLightList, setLastLowLightList] = useAtom(lastLowLightListAtom);

  const list = category === 'highLight' ? lastHighLightList : lastLowLightList;

  useEffect(() => {
    if (category === 'highLight') {
      (async () => {
        const response = await getHighlightList({
          year: prevYear,
          month: prevMonth,
          week: prevWeek,
        });

        setLastHighLightList(response.highlights);
      })();
    } else if (category === 'lowLight') {
      (async () => {
        const response = await getLowlightList({
          year: prevYear,
          month: prevMonth,
          week: prevWeek,
        });

        setLastLowLightList(response.lowlights);
      })();
    }
  }, [category, setLastHighLightList, setLastLowLightList]);

  return (
    <div className="flex flex-col gap-3">
      {list.map((el, index) => (
        <LastWeekReviewItem key={index} text="" progressCount={0} project="" />
      ))}
    </div>
  );
};
