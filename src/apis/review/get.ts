import { CurrentWeek } from '@/types/currentWeek';
import { Todo } from '@/types/todo';

import { typedGet } from '..';

type TodoResponse = {
  todos: Todo[];
};

export const getTodos = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<TodoResponse>('/todos', {
    params: { year, month, week },
  });
  return response;
};

export interface Review {
  id: number;
  content: string;
  project: {
    id: number;
    content: string;
    progressRate: number;
  };
}

export const getHighlightList = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<{ highlights: Review[] }>('/highlights', {
    params: { year, month, week },
  });
  return response;
};

export const getLowlightList = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<{ lowlights: Review[] }>('/lowlights', {
    params: { year, month, week },
  });
  return response;
};
