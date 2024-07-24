import { TodoListItem } from './types';

export const CURRENT_TODO: TodoListItem[] = [
  {
    week: 'current',
    isChecked: true,
    todo: '프로젝트 진행 상황 팔로업',
  },
  {
    week: 'current',
    isChecked: false,
    todo: 'v1.2 기획분 요구사항 파악',
  },
  {
    week: 'current',
    isChecked: false,
    todo: '디자인시스템 개발 일정 산정 및 공수 파악',
  },
];

export const NEXT_TODO: TodoListItem[] = [
  {
    week: 'next',
    isChecked: true,
    todo: '디자인시스템 input 관련 개발',
  },
];
