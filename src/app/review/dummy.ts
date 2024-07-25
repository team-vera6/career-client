import { DropdownProps } from '@/components/dropdown/Dropdown';

import { TodoListItem } from './types';

export const CURRENT_TODO: TodoListItem[] = [
  {
    id: 'current-1',
    week: 'current',
    isChecked: true,
    todo: '프로젝트 진행 상황 팔로업',
  },
  {
    id: 'current-2',

    week: 'current',
    isChecked: false,
    todo: 'v1.2 기획분 요구사항 파악',
  },
  {
    id: 'current-3',

    week: 'current',
    isChecked: false,
    todo: '디자인시스템 개발 일정 산정 및 공수 파악',
  },
];

export const NEXT_TODO: TodoListItem[] = [
  {
    id: 'next-1',
    week: 'next',
    isChecked: true,
    todo: '디자인시스템 input 관련 개발',
  },
];

export const REVIEW_DEFAULT = {
  text: '',
  project: '',
};

export const PROJECT_DROPDOWN: DropdownProps = {
  id: 'test-1',
  items: [
    {
      name: '관련 프로젝트 선택',
      value: '',
    },
    {
      name: '피트스탑 웹 서비스',
      value: '피트스탑 웹 서비스',
    },
    {
      name: '팀베라 개발환경 구축 프로젝트',
      value: '팀베라 개발환경 구축 프로젝트',
    },
  ],
};
