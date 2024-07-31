import AddButton from './AddButton';
import MemoList from './MemoList';

const CurrentWeekMemo = () => {
  return (
    <section className="shrink-0 min-w-[252px]">
      <div className="flex items-center justify-between w-full">
        <p className="font-title-16 text-text-strong">이번 주 메모</p>
        <AddButton />
      </div>

      <MemoList />
    </section>
  );
};

export default CurrentWeekMemo;
