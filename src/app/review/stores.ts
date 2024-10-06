import { atom } from 'jotai';

import { DropdownItem } from '@/components/dropdown/Dropdown';
import { getRandomNumber } from '@/utils/number';

import { MemoItem, ReviewListItem, TodoListItem } from './types';

export const scoreAtom = atom(0);

export const reviewIdAtom = atom(0);

export const reviewStepAtom = atom(1);

// 페이지 이동 버튼 활성홭 여부
export const initialStepStatus = {
  step1: false,
  step2: false,
  step3: false,
};

export const pageButtonStatesAtom = atom(initialStepStatus);

export const disabledClickAttemptAtom = atom(initialStepStatus);

// get한 todo list
export const initialCurrentTodoListAtom = atom<TodoListItem[]>([]);
export const initialNextTodoListAtom = atom<TodoListItem[]>([]);

// 수정된 todo list
export const currentTodoListAtom = atom<TodoListItem[]>([]);
export const nextTodoListAtom = atom<TodoListItem[]>([]);

export const initialReviewItem = {
  id: getRandomNumber(),
  content: '',
};

// get한 하이라이트 / 로우라이트 list
export const initialHighLightListAtom = atom<ReviewListItem[]>([]);
export const initialLowLightListAtom = atom<ReviewListItem[]>([]);

// 수정된 하이라이트 / 로우라이트 list
export const highLightListAtom = atom<ReviewListItem[]>([initialReviewItem]);
export const lowLightListAtom = atom<ReviewListItem[]>([initialReviewItem]);

export const lastHighLightListAtom = atom<ReviewListItem[]>([]);
export const lastLowLightListAtom = atom<ReviewListItem[]>([]);

export const memoListAtom = atom<MemoItem[]>([]);

export const projectListAtom = atom<DropdownItem[]>([]);
