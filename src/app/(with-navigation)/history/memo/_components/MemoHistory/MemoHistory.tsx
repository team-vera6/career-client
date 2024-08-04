import { MemoItem } from '@/app/review/types';
import Memo from '@/components/memo/Memo';

import { dummy } from './dummy';
import EmptyMemoHistory from './EmptyMemoHistory';

const MemoHistory = () => {
  if (dummy.length < 1) return <EmptyMemoHistory />;

  return (
    <>
      {dummy.map(({ month, week, items }) => (
        <div className="w-full flex flex-col gap-3" key={`${month}-${week}`}>
          <p className="font-title-16 text-text-normal">
            {month}월 {week}주
          </p>

          <div className="grid gap-[15px] grid-cols-4">
            {items.map((item: MemoItem) => (
              <Memo key={item.id} {...item} className="w-[229px] h-[10rem]" />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MemoHistory;
