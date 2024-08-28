import { Review } from '@/apis/reports/get';
import { CurrentWeek } from '@/types/currentWeek';

import ReviewItem from './ReviewItem';

interface Props {
  weekNumber: CurrentWeek;
  reviews: Omit<Review, 'weekNumber'>[];
  onClickReview: (reviewId: number, week: CurrentWeek) => void;
}
const ReviewWeekGroup = ({ weekNumber, reviews, onClickReview }: Props) => {
  return (
    <div
      className="flex flex-col gap-3"
      key={`${weekNumber.year}-${weekNumber.month}-${weekNumber.week}`}
    >
      <p className="font-title-16 text-text-normal">
        {weekNumber.year}년 {weekNumber.month}월
      </p>

      {/* review Container */}
      <div className="flex flex-col gap-2">
        {reviews.map((item) => (
          <ReviewItem
            key={item.id}
            id={item.id}
            weekNumber={weekNumber}
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
