import Category from '../_components/Category';
import MemoHistory from './_components/MemoHistory/MemoHistory';

export default function HistoryMemoPage() {
  return (
    <div className="w-[60rem] flex flex-col gap-7">
      <Category />

      <section className="flex flex-col gap-7">
        <MemoHistory />
      </section>
    </div>
  );
}
