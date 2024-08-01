import { ReviewType } from '../../types';
import { LastWeekReviewContainer } from './LastWeekReviewContainer';

export const LastWeekReview = ({ category }: { category: ReviewType }) => {
  return (
    <section className="flex flex-col gap-3 mb-8">
      <p className="font-head-20 text-text-strong">
        지난주 {category === 'highLight' ? '하이라이트' : '로우라이트'}
      </p>

      <LastWeekReviewContainer category={category} />
    </section>
  );
};
