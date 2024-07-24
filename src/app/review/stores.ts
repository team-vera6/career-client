import { atom } from 'jotai';

import { CURRENT_TODO, NEXT_TODO } from './dummy';
import { TodoListItem } from './types';

export const reviewPageAtom = atom<number>(1);

// FIXME: api 연동 후 더미 제거
export const currentTodoListAtom = atom<TodoListItem[]>(CURRENT_TODO);
export const nextTodoListAtom = atom<TodoListItem[]>(NEXT_TODO);
