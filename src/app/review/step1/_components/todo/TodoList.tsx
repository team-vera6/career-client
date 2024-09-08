'use client';

import { useAtom } from 'jotai';
import { useEffect, useMemo } from 'react';

import { getTodos } from '@/apis/review/get';
import { currentTodoListAtom, nextTodoListAtom } from '@/app/review/stores';
import { TodoListItem } from '@/app/review/types';
import { getCurrentWeek, getNextWeek } from '@/utils/date';

import { ListItem } from './ListItem';

const { year, month, week: weekNumber } = getCurrentWeek();
const { nextYear, nextMonth, nextWeek } = getNextWeek();

export const TodoList = ({ week }: Pick<TodoListItem, 'week'>) => {
  const [currentTodoList, setCurrentTodoList] = useAtom(currentTodoListAtom);
  const [nextTodoList, setNextTodoList] = useAtom(nextTodoListAtom);

  useEffect(() => {
    if (week === 'current') {
      (async () => {
        const response = await getTodos({
          year,
          month,
          week: weekNumber,
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
    } else {
      (async () => {
        const response = await getTodos({
          year: nextYear,
          month: nextMonth,
          week: nextWeek,
        });

        setNextTodoList(
          response.todos.map((el) => ({
            week: 'next',
            isChecked: el.status === 'DONE',
            todo: el.content,
            id: String(el.id),
          })),
        );
      })();
    }
  }, [setCurrentTodoList, setNextTodoList]);

  const todoList = useMemo(() => {
    return week === 'current' ? currentTodoList : nextTodoList;
  }, [currentTodoList, nextTodoList, week]);

  return (
    <div className="flex flex-col">
      {todoList.map((el, index) => (
        <ListItem key={index} {...el} />
      ))}
    </div>
  );
};
