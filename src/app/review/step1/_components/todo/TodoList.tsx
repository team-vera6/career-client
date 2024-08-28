'use client';

import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';

import { getTodos } from '@/apis/review/get';
import { currentTodoListAtom, nextTodoListAtom } from '@/app/review/stores';
import { TodoListItem } from '@/app/review/types';
import { getCurrentWeek } from '@/utils/date';

import { ListItem } from './ListItem';

export const TodoList = ({ week }: Pick<TodoListItem, 'week'>) => {
  const [currentTodoList, setCurrentTodoList] = useAtom(currentTodoListAtom);
  const nextTodoList = useAtomValue(nextTodoListAtom);
  const { year, month, week: weekNumber } = getCurrentWeek();

  useEffect(() => {
    if (week !== 'current') return;

    (async () => {
      const response = await getTodos({
        year,
        week: weekNumber,
        month,
      });

      setCurrentTodoList(
        response.todos.map((el) => ({
          week: 'current',
          isChecked: el.status === 'DONE',
          todo: el.content,
          id: String(el.id),
        })),
      );
    })();
  }, []);

  const todoList = week === 'current' ? currentTodoList : nextTodoList;

  return (
    <div className="flex flex-col">
      {todoList.map((el, index) => (
        <ListItem key={index} {...el} />
      ))}
    </div>
  );
};
