import ChevronRight16Icon from '@/components/icons/ChevronRight16Icon';
import HighlightCircleIcon from '@/components/icons/HighlightCircleIcon';
import LowlightCircleIcon from '@/components/icons/LowlightCircleIcon';

import Connector from './Connector';

interface Props {
  type: 'highlight' | 'lowlight';
  review: string;
  week: string;
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

        <div className="flex items-center gap-0.5 justify-end">
          <p className="font-body-13 text-text-strong">{week}</p>
          <ChevronRight16Icon size={16} />
        </div>
      </div>
    </div>
  );
};

export default RelatedReview;
