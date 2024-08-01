import { atom } from 'jotai';

import { DropdownProps } from '@/components/dropdown/Dropdown';

import {
  CURRENT_TODO,
  HIGHLIGHT_REVIEW,
  LAST_HIGHLIGHT,
  LAST_LOWLIGHT,
  LOW_LIGHT_REVIEW,
  MEMO_LIST,
  NEXT_TODO,
  PROJECT_DROPDOWN,
} from './dummy';
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
export const currentTodoListAtom = atom<TodoListItem[]>(CURRENT_TODO);
export const nextTodoListAtom = atom<TodoListItem[]>(NEXT_TODO);

export const highLightListAtom = atom<ReviewListItem[]>([HIGHLIGHT_REVIEW]);
export const lowLightListAtom = atom<ReviewListItem[]>([LOW_LIGHT_REVIEW]);
export const lastHighLightListAtom =
  atom<LastWeekReviewListItem[]>(LAST_HIGHLIGHT);
export const lastLowLightListAtom =
  atom<LastWeekReviewListItem[]>(LAST_LOWLIGHT);

export const projectListAtom = atom<DropdownProps>(PROJECT_DROPDOWN);
export const memoListAtom = atom<MemoItem[]>(MEMO_LIST);

export const scoreAtom = atom(0);
