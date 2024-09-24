import { atom } from 'jotai';

import { DropdownItem } from '@/components/dropdown/Dropdown';

import { MemoItem, ReviewListItem, TodoListItem } from './types';

export const scoreAtom = atom(0);

export const reviewIdAtom = atom(0);

export const reviewStepAtom = atom(1);

// 페이지 이동 버튼 활성홭 여부
export const pageButtonStatesAtom = atom({
  step1: false,
  step2: false,
  step3: false,
});

export const disabledClickAttemptAtom = atom({
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

const InitialReviewItem = {
  id: 0,
  content: '',
};

// get한 하이라이트 / 로우라이트 list
export const initialHighLightListAtom = atom<ReviewListItem[]>([
  InitialReviewItem,
]);
export const initialLowLightListAtom = atom<ReviewListItem[]>([
  InitialReviewItem,
]);

// 수정된 하이라이트 / 로우라이트 list
export const highLightListAtom = atom<ReviewListItem[]>([InitialReviewItem]);
export const lowLightListAtom = atom<ReviewListItem[]>([InitialReviewItem]);

export const lastHighLightListAtom = atom<ReviewListItem[]>([]);
export const lastLowLightListAtom = atom<ReviewListItem[]>([]);

export const memoListAtom = atom<MemoItem[]>([]);

export const projectListAtom = atom<DropdownItem[]>([]);
