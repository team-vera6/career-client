import { AddButton } from '@/app/review/_components/add-button/AddButton';
import HighlightCircleIcon from '@/components/icons/HighlightCircleIcon';
import LowlightCircleIcon from '@/components/icons/LowlightCircleIcon';

import { ReviewContainer } from './ReviewContainer';

interface Props {
  category: 'highLight' | 'lowLight';
}
export const CurrentReview = ({ category }: Props) => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 items-center">
          {ITEMS[category].icon}
          <p className="font-head-20 text-text-strong">{ITEMS[category].title}</p>
        </div>
        <AddButton category={category} />
      </div>
      <ReviewContainer />
    </section>
  );
};

const ITEMS = {
  highLight: {
    icon: <HighlightCircleIcon size={24} />,
    title: '하이라이트',
  },
  lowLight: {
    icon: <LowlightCircleIcon size={24} />,
    title: '로우라이트',
  },
};
