import Memo from '@/components/memo/Memo';

const WeeklyMemo = () => {
  return (
    <div className="flex flex-col gap-[2.125rem]">
      <p className="font-title-16">이번주 작성한 메모</p>
      <div className="flex flex-col gap-3">
        <Memo isBookmark memo="로열티 기획" date="7.12" />
        <Memo isBookmark memo="로열티 기획" date="7.12" />
        <Memo memo="로열티 기획" date="7.12" />
        <Memo isBookmark memo="로열티 기획" date="7.12" />
        <Memo memo="로열티 기획" date="7.12" />
      </div>
    </div>
  );
};

export default WeeklyMemo;
