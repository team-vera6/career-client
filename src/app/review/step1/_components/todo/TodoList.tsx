'use client';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useMemo } from 'react';

import { getTodos } from '@/apis/review/get';
import {
  currentTodoListAtom,
  initialCurrentTodoListAtom,
  initialNextTodoListAtom,
  nextTodoListAtom,
  pageButtonStatesAtom,
} from '@/app/review/stores';
import { TodoListItem } from '@/app/review/types';
import { getCurrentWeek, getNextWeek } from '@/utils/date';

import { ListItem } from './ListItem';

const { year, month, week: weekNumber } = getCurrentWeek();
const { nextYear, nextMonth, nextWeek } = getNextWeek();

const currentWeekInfo = {
  year,
  month,
  week: weekNumber,
};

const nextWeekInfo = {
  year: nextYear,
  month: nextMonth,
  week: nextWeek,
};

export const TodoList = ({ week }: Pick<TodoListItem, 'week'>) => {
  const setInitialCurrentTodoList = useSetAtom(initialCurrentTodoListAtom);
  const setInitialNextTodoList = useSetAtom(initialNextTodoListAtom);

  const [currentTodoList, setCurrentTodoList] = useAtom(currentTodoListAtom);
  const [nextTodoList, setNextTodoList] = useAtom(nextTodoListAtom);
  const pageButtonStates = useAtomValue(pageButtonStatesAtom);

  useEffect(() => {
    if (week === 'current') {
      (async () => {
        const response = await getTodos(currentWeekInfo);

        const newList: TodoListItem[] = response.todos.map((el) => ({
          week: 'current',
          isChecked: el.status === 'DONE',
          todo: el.content,
          id: el.id,
        }));

        setCurrentTodoList(newList);
        setInitialCurrentTodoList(newList);
      })();
    } else if (week === 'next') {
      (async () => {
        const response = await getTodos(nextWeekInfo);

        const newList: TodoListItem[] = response.todos.map((el) => ({
          week: 'next',
          isChecked: el.status === 'DONE',
          todo: el.content,
          id: el.id,
        }));

        setNextTodoList(newList);
        setInitialNextTodoList(newList);
      })();
    }
  }, [
    pageButtonStates.step1,
    setCurrentTodoList,
    setInitialCurrentTodoList,
    setInitialNextTodoList,
    setNextTodoList,
    week,
  ]);

  const onChangeText = (id: number, val: string) => {
    if (week === 'current') {
      setCurrentTodoList((prev) =>
        prev.map((item) => (item.id === id ? { ...item, todo: val } : item)),
      );
    } else {
      setNextTodoList((prev) =>
        prev.map((item) => (item.id === id ? { ...item, todo: val } : item)),
      );
    }
  };

  const onToggleChecked = (id: number) => {
    if (week === 'current') {
      setCurrentTodoList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isChecked: !item.isChecked } : item,
        ),
      );
    } else {
      setNextTodoList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, isChecked: !item.isChecked } : item,
        ),
      );
    }
  };

  const todoList = useMemo(() => {
    return week === 'current' ? currentTodoList : nextTodoList;
  }, [currentTodoList, nextTodoList, week]);

  return (
    <div className="flex flex-col">
      {todoList.map((el, index) => (
        <ListItem
          key={index}
          setTodo={(val) => onChangeText(el.id, val)}
          setIsChecked={() => onToggleChecked(el.id)}
          {...el}
        />
      ))}
    </div>
  );
};
