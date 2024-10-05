import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { CurrentWeek } from '@/types/currentWeek';

import { Score } from '../../../_components/review/Score';

interface Props {
  weekNumber: CurrentWeek;
  content: string;
  activeCount: number;
  id: number;
  onClickReview: (id: number, week: CurrentWeek) => void;
}

const ReviewItem = ({
  weekNumber,
  content,
  activeCount,
  id,
  onClickReview,
}: Props) => {
  const searchParams = useSearchParams();
  const year = searchParams.get('year');
  const month = searchParams.get('month');
  const week = searchParams.get('week');

  useEffect(() => {
    if (
      Number(year) === weekNumber.year &&
      Number(month) === weekNumber.month &&
      Number(week) === weekNumber.week
    ) {
      onClickReview(id, weekNumber);
    }
  }, [year, month, week]);

  return (
    <li
      className="w-full h-14 flex items-center pl-6 pr-5 bg-surface-foregroundOn rounded-2xl cursor-pointer"
      onClick={() => onClickReview(id, weekNumber)}
    >
      <p className="w-12 mr-3 font-body-16 text-text-normal text-left">
        {weekNumber.week}주차
      </p>
      <p className="flex-1 font-title-16 text-text-strong truncate mr-4">
        {content}
      </p>
      <Score activeCount={activeCount} />
    </li>
  );
};

export default ReviewItem;
