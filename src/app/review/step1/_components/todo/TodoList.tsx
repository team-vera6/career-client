'use client';

import { useAtomValue } from 'jotai';

import { currentTodoListAtom, nextTodoListAtom } from '@/app/review/stores';
import { WeekType } from '@/app/review/types';

import { ListItem } from './ListItem';

interface Props {
  week: WeekType;
}

export const TodoList = ({ week }: Props) => {
  const currentTodoList = useAtomValue(currentTodoListAtom);
  const nextTodoList = useAtomValue(nextTodoListAtom);

  const todoList = week === 'current' ? currentTodoList : nextTodoList;

  return (
    <div className="flex flex-col">
      {todoList.map((el, index) => (
        <ListItem key={index} {...el} />
      ))}
    </div>
  );
};
