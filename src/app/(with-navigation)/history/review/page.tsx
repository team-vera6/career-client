import Category from '../_components/Category';
import ReviewHistory from './_components/review-history/ReviewHistory';

export default function ReviewHistoryPage() {
  return (
    <div className="w-[60rem]">
      <Category />

      <section className="flex flex-col gap-8">
        <ReviewHistory />
      </section>
    </div>
  );
}
