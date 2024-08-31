import Memo from '@/components/memo/Memo';
import { CurrentWeek } from '@/types/currentWeek';
import { Memo as MemoType } from '@/types/memo';

interface Props {
  currentWeek: CurrentWeek;
  memos: MemoType[];
}

const MemoWeekGroup = ({ currentWeek, memos }: Props) => {
  return (
    <div
      className="w-full flex flex-col gap-3"
      key={`${currentWeek.year}-${currentWeek.month}-${currentWeek.week}`}
    >
      <p className="font-title-16 text-text-normal">
        {currentWeek.month}월 {currentWeek.week}주
      </p>

      <div className="grid gap-[15px] grid-cols-4">
        {memos.map((item) => (
          <Memo
            key={item.id}
            id={String(item.id)}
            title={item.content}
            date="7.22"
            isBookmark={item.isMarked}
            className="w-[229px] h-[10rem]"
          />
        ))}
      </div>
    </div>
  );
};

export default MemoWeekGroup;
