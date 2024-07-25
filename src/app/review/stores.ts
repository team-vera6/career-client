import { atom } from 'jotai';

import { CURRENT_TODO, NEXT_TODO } from './dummy';
import { TodoListItem } from './types';

// progressDots activeCount
export const reviewPageAtom = atom(1);

// 페이지 이동 버튼 활성홭 여부
export const pageButtonStatesAtom = atom({
  step1: false,
  step2: false,
  step3: false,
});

// FIXME: api 연동 후 더미 제거
export const currentTodoListAtom = atom<TodoListItem[]>(CURRENT_TODO);
export const nextTodoListAtom = atom<TodoListItem[]>(NEXT_TODO);