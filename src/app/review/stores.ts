import { atom } from 'jotai';

import { MemoItem, ReviewListItem, TodoListItem } from './types';

export const reviewStepsAtom = atom({
  direction: '',
  activePage: 1,
});

// 페이지 이동 버튼 활성홭 여부
export const pageButtonStatesAtom = atom({
  step1: false,
  step2: false,
  step3: false,
});

// get한 todo list
export const initialCurrentTodoListAtom = atom<TodoListItem[]>([]);
export const initialNextTodoListAtom = atom<TodoListItem[]>([]);

// 수정된 todo list
export const currentTodoListAtom = atom<TodoListItem[]>([]);
export const nextTodoListAtom = atom<TodoListItem[]>([]);

// get한 하이라이트 / 로우라이트 list
export const initialHighLightListAtom = atom<ReviewListItem[]>([]);
export const initialLowLightListAtom = atom<ReviewListItem[]>([]);

// 수정된 하이라이트 / 로우라이트 list
export const highLightListAtom = atom<ReviewListItem[]>([]);
export const lowLightListAtom = atom<ReviewListItem[]>([]);

export const lastHighLightListAtom = atom<ReviewListItem[]>([]);
export const lastLowLightListAtom = atom<ReviewListItem[]>([]);

export const memoListAtom = atom<MemoItem[]>([]);

export const scoreAtom = atom<number>(0);

export const reviewIdAtom = atom<number>(0);
