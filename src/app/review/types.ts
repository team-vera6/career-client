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
