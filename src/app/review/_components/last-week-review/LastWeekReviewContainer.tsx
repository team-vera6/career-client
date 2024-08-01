'use client';

import { useAtomValue } from 'jotai';

import { lastHighLightListAtom, lastLowLightListAtom } from '../../stores';
import { ReviewType } from '../../types';
import { LastWeekReviewItem } from './LastWeekReviewItem';

export const LastWeekReviewContainer = ({
  category,
}: {
  category: ReviewType;
}) => {
  const lastHighLightList = useAtomValue(lastHighLightListAtom);
  const lastLowLightList = useAtomValue(lastLowLightListAtom);

  const list = category === 'highLight' ? lastHighLightList : lastLowLightList;

  return (
    <div className="flex flex-col gap-3">
      {list.map((el, index) => (
        <LastWeekReviewItem key={index} {...el} />
      ))}
    </div>
  );
};
