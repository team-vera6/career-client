export interface PagingButtonProps {
  path: string;
  activePage: number;
}

export type WeekType = 'current' | 'next';
export interface TodoListItem {
  week: WeekType;
  isChecked: boolean;
  todo: string;
  id: string;
  isMoved?: boolean;
}
