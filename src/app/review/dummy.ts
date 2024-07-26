import { DropdownProps } from '@/components/dropdown/Dropdown';

import { MemoItem, TodoListItem } from './types';

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

export const HIGHLIGHT_REVIEW = {
  id: 'highLight-1',
  text: '',
  project: '',
};

export const LOW_LIGHT_REVIEW = {
  id: 'lowLight-1',
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

export const MEMO_LIST: MemoItem[] = [
  {
    id: 'memo-1',
    isBookmark: false,
    title: '로열티 기획',
    memo: '회원 등급, 포인트 시스템',
    date: '7.12',
  },
  {
    id: 'memo-2',
    isBookmark: false,
    title: '제휴 브랜드 전용 새로운 테마, 템플릿 레퍼런스 찾기',
    date: '7.12',
  },
  {
    id: 'memo-3',
    isBookmark: false,
    title: '주간회의',
    memo: `• 신규입사자 안내\n• a진행건 요약정리\n• 마케팅 팀 신규 캠페인 관련 공유`,
    date: '7.12',
  },
  {
    id: 'memo-4',
    isBookmark: false,
    memo: '개발팀에 서버 로그 재분석 요청 -> 롤백 계획 준비',
    date: '7.12',
  },
];
