import WeekInfo from './(components)/WeekInfo';
import WeeklyMemo from './(components)/WeeklyMemo';

export default function ReviewPage() {
  return (
    <div className="w-full h-full pt-[3.75rem] flex">
      <aside className="flex flex-col gap-[2.125rem]">
        <p className="font-title-16">이번주 작성한 메모</p>
        <WeeklyMemo />
      </aside>

      <div className="h-full w-[44.25rem] flex flex-col mx-auto">
        <WeekInfo />
      </div>
    </div>
  );
}
