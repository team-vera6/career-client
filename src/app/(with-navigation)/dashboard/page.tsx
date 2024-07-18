import ChevronLeft20Icon from '@/components/icons/ChevronLeft20Icon';
import ChevronRight20Icon from '@/components/icons/ChevronRight20Icon';
import FireIcon from '@/components/icons/FireIcon';
import FlagIcon from '@/components/icons/FlagIcon';
import YellowFolderIcon from '@/components/icons/YellowFolderIcon';

import MemoList from './components/MemoList';
import TodoList from './components/TodoList';

export default function DashboardPage() {
  return (
    <div>
      <section className="flex gap-3 w-full mb-7">
        <div className="w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4">
          <FireIcon size={32} />
          <p className="font-body-16 text-text-strong">
            <span className="font-chakra font-semibold italic mr-1">01</span>주 연속 회고
          </p>
        </div>
        <div className="w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4">
          <FlagIcon size={32} />
          <p className="font-body-16 text-text-strong">
            <span className="font-chakra font-semibold italic mr-1">04</span>개 회고 기록
          </p>
        </div>
        <div className="w-[19.5rem] pl-10 h-20 rounded-xl bg-surface-foregroundOn flex items-center gap-4">
          <YellowFolderIcon size={32} />
          <p className="font-body-16 text-text-strong">
            <span className="font-chakra font-semibold italic mr-1">29</span>개 프로젝트
          </p>
        </div>
      </section>

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
