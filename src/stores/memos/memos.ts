import { atom } from 'jotai';

import { CurrentWeek } from '@/types/currentWeek';
import { Memo } from '@/types/memo';

export interface MemoList {
  weekNumber: CurrentWeek;
  memos: Memo[];
}

export const historyMemoListAtom = atom<MemoList[]>([]);
