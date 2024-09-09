import { ReviewListItem } from '@/app/review/types';
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

export const getHighlightList = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<{ highlights: ReviewListItem[] }>(
    '/highlights',
    {
      params: { year, month, week },
    },
  );
  return response;
};

export const getLowlightList = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<{ lowlights: ReviewListItem[] }>(
    '/lowlights',
    {
      params: { year, month, week },
    },
  );
  return response;
};

export interface ReviewIdResponse {
  id?: number;
  like?: number;
}

export const getReviewId = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<ReviewIdResponse>('/reviews', {
    params: { year, month, week },
  });
  return response;
};
