import { AddButton } from '@/app/review/_components/add-button/AddButton';

import { TodoList } from './TodoList';

export const Todo = () => {
  return (
    <div className="rounded-2xl bg-surface-foreground p-9 flex flex-col gap-7">
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="font-title-16">이번주 할 일</p>
          <AddButton category="currentTodo" />
        </div>
        <TodoList week="current" />
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="font-title-16">다음주 할 일</p>
          <AddButton category="nextTodo" />
        </div>
        <TodoList week="next" />
      </div>
    </div>
  );
};
