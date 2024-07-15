import WeekInfo from './(components)/WeekInfo';
import WeeklyMemo from './(components)/WeeklyMemo';

export default function ReviewPage() {
  return (
    <div className="w-100 h-full pt-[3.75rem] flex gap-[13.5rem]">
      <WeeklyMemo />

      <div className="flex flex-col">
        <WeekInfo />
      </div>
    </div>
  );
}
