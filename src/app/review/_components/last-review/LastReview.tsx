import { ReviewType } from '../../types';
import { LastReviewContainer } from './LastReviewContainer';

export const LastReview = ({ category }: { category: ReviewType }) => {
  return (
    <section className="flex flex-col gap-3 mb-8">
      <p className="font-head-20 text-text-strong">
        지난주 {category === 'highLight' ? '하이라이트' : '로우라이트'}
      </p>

      <LastReviewContainer category={category} />
    </section>
  );
};
