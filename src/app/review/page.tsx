import { AddTodo, CurrentWeek, CurrentWeekScore } from './(components)/WeekInfo';
import WeeklyMemo from './(components)/WeeklyMemo';

export default function ReviewPage() {
  return (
    <div className="w-full h-full pt-[3.75rem] flex">
      <aside className="flex flex-col gap-[2.125rem]">
        <p className="font-title-16">이번주 작성한 메모</p>
        <WeeklyMemo />
      </aside>

      <section className="h-full w-[44.25rem] flex flex-col mx-auto gap-10">
        <div className="w-full flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <CurrentWeek />
          </div>
          <div className="flex flex-col gap-4">
            <CurrentWeekScore />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-head-20">이번 주 한 일을 체크하고 다음 주를 계획해 보세요.</p>

          <div className="rounded-2xl bg-surface-foreground p-9 flex flex-col gap-7">
            <div>
              <div className="flex items-center justify-between">
                <p className="font-title-16">이번주 할 일</p>
                <AddTodo week="current" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
