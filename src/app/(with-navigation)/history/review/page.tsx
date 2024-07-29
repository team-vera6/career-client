import Category from '../_components/Category';
import HistoryReviewContainer from './_components/HistoryReviewContainer';

export default function HistoryReviewPage() {
  return (
    <div className="w-full flex flex-col gap-7">
      <Category />
      <section className="flex flex-col gap-8">
        <HistoryReviewContainer />
      </section>
    </div>
  );
}
