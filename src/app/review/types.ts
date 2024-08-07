import { ClassName } from '@/types/attributes';

export type WeekType = 'current' | 'next';
export type ReviewType = 'highLight' | 'lowLight';
export interface PagingButtonProps {
  path: string;
  activePage: number;
}
export interface TodoListItem {
  week: WeekType;
  isChecked: boolean;
  todo: string;
  id: string;
  isMoved?: boolean;
}

export interface ReviewListItem {
  id: string;
  text: string;
  project: string;
}

export interface LastWeekReviewListItem extends ReviewListItem {
  progressCount: number;
}

export interface MemoItem {
  id: string;
  isBookmark?: boolean;
  title?: string;
  memo?: string; // TODO: 마크다운 적용 후 수정 필요
  date: string; // FIXME: date 형식 조정 필요
  className?: ClassName;
}
