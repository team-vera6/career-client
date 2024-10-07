import { Review } from '@/apis/reports/get';
import { CurrentWeek } from '@/types/currentWeek';

import ReviewItem from './ReviewItem';

interface Props {
  reviews: Review[];
  onClickReview: (reviewId: number, week: CurrentWeek) => void;
}
const ReviewWeekGroup = ({ reviews, onClickReview }: Props) => {
  return (
    <div
      className="flex flex-col gap-3"
      key={`${reviews[0].weekNumber.year}-${reviews[0].weekNumber.month}`}
    >
      <p className="font-title-16 text-text-normal">
        {reviews[0].weekNumber.year}년 {reviews[0].weekNumber.month}월
      </p>

      {/* review Container */}
      <div className="flex flex-col gap-2">
        {reviews.map((item) => (
          <ReviewItem
            key={item.id}
            id={item.id}
            weekNumber={item.weekNumber}
            content={item.highlightSummary}
            activeCount={item.like}
            onClickReview={onClickReview}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewWeekGroup;
