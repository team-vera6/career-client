import MemoBottom from './MemoBottom';

interface Props {
  isBookmark?: boolean;
  memo: string; // 마크다운 적용 후 수정 필요
  date: string; // date 형식 조정 필요
}

const Memo = ({ isBookmark = false, memo, date }: Props) => {
  return (
    <div
      className="w-[15.75rem] h-[8.75rem] rounded-lg pt-5 pr-4 pb-2.5 pl-5
      flex flex-col gap-2.5"
      style={{
        boxShadow: '0px 8px 20px 0px #00000014, 0px 0px 2px 0px #0000000D',
      }}
    >
      <div
        className="w-full h-full pr-1 break-keep font-body-14 overflow-hidden whitespace-pre-wrap"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {memo}
      </div>
      <MemoBottom isBookmark={isBookmark} date={date} />
    </div>
  );
};

export default Memo;
