import { atom } from 'jotai';

import { DropdownProps } from '@/components/dropdown/Dropdown';

import { PROJECT_DROPDOWN } from './dummy';
import {
  LastWeekReviewListItem,
  MemoItem,
  ReviewListItem,
  TodoListItem,
} from './types';

// progressDots activeCount
export const reviewPageAtom = atom(1);

// 페이지 이동 버튼 활성홭 여부
export const pageButtonStatesAtom = atom({
  step1: false,
  step2: false,
  step3: false,
});

// FIXME: api 연동 후 더미 제거
export const currentTodoListAtom = atom<TodoListItem[]>([]);
export const nextTodoListAtom = atom<TodoListItem[]>([]);

export const highLightListAtom = atom<ReviewListItem[]>([]);
export const lowLightListAtom = atom<ReviewListItem[]>([]);
export const lastHighLightListAtom = atom<LastWeekReviewListItem[]>([]);
export const lastLowLightListAtom = atom<LastWeekReviewListItem[]>([]);

export const projectListAtom = atom<DropdownProps>(PROJECT_DROPDOWN);
export const memoListAtom = atom<MemoItem[]>([]);

export const scoreAtom = atom(0);

export const reviewIdAtom = atom(0);
