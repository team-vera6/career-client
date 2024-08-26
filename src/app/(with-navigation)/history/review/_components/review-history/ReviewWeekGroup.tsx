import { Review } from '@/apis/reports/get';
import { CurrentWeek } from '@/types/currentWeek';

import ReviewItem from './ReviewItem';

interface Props {
  weekNumber: CurrentWeek;
  reviews: Omit<Review, 'weekNumber'>[];
  onClickReview: (reviewId: number) => void;
}
const ReviewWeekGroup = ({
  weekNumber: { year, month, week },
  reviews,
  onClickReview,
}: Props) => {
  return (
    <div className="flex flex-col gap-3" key={`${year}-${month}-${week}`}>
      <p className="font-title-16 text-text-normal">
        {year}년 {month}월
      </p>

      {/* review Container */}
      <div className="flex flex-col gap-2">
        {reviews.map((item) => (
          <ReviewItem
            key={item.id}
            id={item.id}
            week={week}
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
