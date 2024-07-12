import MemoBottom from './MemoBottom';

interface Props {
  isBookmark?: boolean;
  title?: string;
  memo: string; // TODO: 마크다운 적용 후 수정 필요
  date: string; // FIXME: date 형식 조정 필요
}

const Memo = ({ isBookmark = false, title, memo, date }: Props) => {
  return (
    <div
      className="w-[15.75rem] h-[8.75rem] rounded-lg p-5 pb-2.5
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
        {title && <p className="font-title-14 text-text-strong">{title}</p>}
        <p className="font-body-14 text-text-strong">{memo}</p>
      </div>

      <MemoBottom isBookmark={isBookmark} date={date} />
    </div>
  );
};

export default Memo;
