import Link from 'next/link';

import ChevronRight16Icon from '@/components/icons/ChevronRight16Icon';
import HighlightCircleIcon from '@/components/icons/HighlightCircleIcon';
import LowlightCircleIcon from '@/components/icons/LowlightCircleIcon';
import { CurrentWeek } from '@/types/currentWeek';

import Connector from './Connector';

interface Props {
  type: 'highlight' | 'lowlight';
  review: string;
  week: CurrentWeek;
  last?: boolean;
}

const RelatedReview = ({ type, review, week, last }: Props) => {
  return (
    <div className="flex gap-4 h-[5.375rem] relative">
      {type === 'highlight' ? (
        <HighlightCircleIcon size={24} className="mt-2" />
      ) : (
        <LowlightCircleIcon size={24} className="mt-2" />
      )}

      {!last && <Connector className="absolute left-2.5 top-10" />}

      <div className="w-full">
        <div className="mb-1 border border-line-assistive bg-surface-foreground rounded-lg p-3">
          <p className="font-body-14 text-text-strong line-clamp-2">{review}</p>
        </div>

        <div className="w-full flex justify-end">
          <Link
            href={`/dashboards?year=${week.year}&month=${week.month}&week=${week.week}`}
            target="_blank"
          >
            <div className="flex items-center gap-0.5 w-fit">
              <p className="font-body-13 text-text-strong">{`${week.month}월 ${week.week}주차`}</p>
              <ChevronRight16Icon size={16} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedReview;
