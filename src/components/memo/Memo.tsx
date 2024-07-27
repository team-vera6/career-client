import { MemoItem } from '@/app/review/types';

import MemoBottom from './MemoBottom';

const Memo = ({ isBookmark = false, title, memo, date, id }: MemoItem) => {
  return (
    <div
      className="w-[15.75rem] h-[8.75rem] rounded-lg pt-5 pr-4 pb-2.5 pl-5
      flex flex-col gap-2.5 bg-surface-foreground"
      style={{
        boxShadow: '0px 8px 20px 0px #00000014, 0px 0px 2px 0px #0000000D',
      }}
    >
      <div
        className="w-full h-full pr-1 break-keep overflow-hidden whitespace-pre-wrap"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {!!title && <p className="font-title-14 text-text-strong">{title}</p>}
        {!!memo && <p className="font-body-14 text-text-strong">{memo}</p>}
      </div>

      <MemoBottom id={id} isBookmark={isBookmark} date={date} />
    </div>
  );
};

export default Memo;
