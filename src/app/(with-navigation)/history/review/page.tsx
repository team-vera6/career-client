import Category from '../_components/Category';
import HistoryReview from './_components/HistoryReview/HistoryReview';

export default function HistoryReviewPage() {
  return (
    <div className="w-full flex flex-col gap-7">
      <Category />

      <section className="flex flex-col gap-8">
        <HistoryReview />
      </section>
    </div>
  );
}
