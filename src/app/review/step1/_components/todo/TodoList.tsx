'use client';

import { useAtomValue } from 'jotai';

import { currentTodoListAtom, nextTodoListAtom } from '@/app/review/stores';
import { TodoListItem } from '@/app/review/types';

import { ListItem } from './ListItem';

export const TodoList = ({ week }: Pick<TodoListItem, 'week'>) => {
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
