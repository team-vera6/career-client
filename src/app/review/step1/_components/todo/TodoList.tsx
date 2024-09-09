'use client';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useMemo } from 'react';

import { getTodos } from '@/apis/review/get';
import {
  currentTodoListAtom,
  initialCurrentTodoListAtom,
  nextTodoListAtom,
  pageButtonStatesAtom,
} from '@/app/review/stores';
import { TodoListItem } from '@/app/review/types';
import { getCurrentWeek } from '@/utils/date';

import { ListItem } from './ListItem';

const { year, month, week: weekNumber } = getCurrentWeek();

export const TodoList = ({ week }: Pick<TodoListItem, 'week'>) => {
  const setInitialCurrentTodoList = useSetAtom(initialCurrentTodoListAtom);

  const [currentTodoList, setCurrentTodoList] = useAtom(currentTodoListAtom);
  const [nextTodoList, setNextTodoList] = useAtom(nextTodoListAtom);
  const pageButtonStates = useAtomValue(pageButtonStatesAtom);

  useEffect(() => {
    if (week === 'current' && !pageButtonStates.step1) {
      (async () => {
        const response = await getTodos({
          year,
          month,
          week: weekNumber,
        });

        const newList: TodoListItem[] = response.todos.map((el) => ({
          week: 'current',
          isChecked: el.status === 'DONE',
          todo: el.content,
          id: String(el.id),
        }));

        setCurrentTodoList(newList);
        setInitialCurrentTodoList(newList);
      })();
    }
  }, [
    pageButtonStates.step1,
    setCurrentTodoList,
    setInitialCurrentTodoList,
    week,
  ]);

  const onChangeText = (id: string, val: string) => {
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

  const onToggleChecked = (id: string) => {
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
