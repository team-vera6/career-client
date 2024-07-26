import ChevronLeft20Icon from '@/components/icons/ChevronLeft20Icon';
import ChevronRight20Icon from '@/components/icons/ChevronRight20Icon';

import MemoList from './_components/MemoList';
import Metrics from './_components/Metrics';
import TodoList from './_components/TodoList';

export default function DashboardPage() {
  return (
    <div>
      <Metrics weekStreak={1} reviewCount={4} projectCount={26} />

      <div className="w-full">
        <section className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <p className="font-head-20 text-text-strong">6월 4주차</p>
            <div className="flex gap-1.5">
              <button className="bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center">
                <ChevronLeft20Icon size={20} />
              </button>
              <button className="bg-surface-foreground w-7 h-7 rounded-md flex items-center justify-center">
                <ChevronRight20Icon size={20} />
              </button>
            </div>
          </div>

          <button className="button-primary button-large">회고하기</button>
        </section>

        <div className="flex gap-9">
          <TodoList />
          <MemoList />
        </div>
      </div>
    </div>
  );
}
