import { AddButton } from '@/app/review/_components/add-button/AddButton';

import { TodoList } from './TodoList';

export const Todo = () => {
  return (
    <div>
      <div className="flex flex-col rounded-2xl bg-surface-foreground py-5 px-9 mb-0.5">
        <div className="flex items-center justify-between mb-3">
          <p className="font-title-16 text-text-strong">이번주 할 일</p>
          <AddButton category="currentTodo" />
        </div>
        <TodoList week="current" />
      </div>

      <div className="flex flex-col rounded-2xl bg-surface-foreground py-5 px-9">
        <div className="flex items-center justify-between mb-3">
          <p className="font-title-16 text-text-strong">다음주 할 일</p>
          <AddButton category="nextTodo" />
        </div>
        <TodoList week="next" />
      </div>
    </div>
  );
};
