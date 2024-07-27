import { DropdownProps } from '@/components/dropdown/Dropdown';

import { MemoItem, TodoListItem } from './types';

export const CURRENT_TODO: TodoListItem[] = [
  {
    id: 'current-1',
    week: 'current',
    isChecked: true,
    todo: '신규 서비스 기획서 작성 마무리',
  },
  {
    id: 'current-2',

    week: 'current',
    isChecked: false,
    todo: '경영진 보고 준비',
  },
  {
    id: 'current-3',

    week: 'current',
    isChecked: false,
    todo: '동기들과 점심 식사',
  },
];

export const NEXT_TODO: TodoListItem[] = [];

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
    title: '신규 서비스 개요',
    memo: `목표: 서비스 사용자 만족도 향상 및 체류 시간 증가\n주요 기능: 사용자 맞춤 추천, 실시간 알림 시스템, 사용자 피드백 통합`,
    date: '7.22',
  },
  {
    id: 'memo-2',
    isBookmark: true,
    title: '리더님 피드백',
    memo: `유관 부서에 지표 리포트할 때 항상 엑셀 파일 첨부하기\n엑셀 제목은 데이터 날짜 항상 표기하기!`,
    date: '7.24',
  },
  {
    id: 'memo-3',
    isBookmark: false,
    title: '8/6 동기들이랑 점심 식사',
    memo: '참여자: 봉주, 지선, 해람, 호, 유림',
    date: '7.25',
  },
];
