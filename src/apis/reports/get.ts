import { CurrentWeek } from '@/types/currentWeek';
import { Highlight } from '@/types/highlight';
import { Todo } from '@/types/todo';

import { typedGet } from '..';

export interface Review {
  weekNumber: CurrentWeek;
  id: number;
  like: number;
  highlightSummary: string;
}

interface ReviewListResponse {
  reviews: Review[];
  nextCursor: number;
}

export const getReviewList = async () => {
  const response = await typedGet<ReviewListResponse>('/review');
  return response;
};

type HighlightResponse = {
  highlights: Omit<Highlight, 'currentWeek'>[];
};

export const getHighlights = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<HighlightResponse>('/highlights', {
    params: { year, month, week },
  });
  return response;
};

type LowlightResponse = {
  lowlights: Omit<Highlight, 'currentWeek'>[];
};

export const getLowlights = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<LowlightResponse>('/lowlights', {
    params: { year, month, week },
  });
  return response;
};

type TodoResponse = {
  todos: Todo[];
};

export const getTodos = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<TodoResponse>('/todo', {
    params: { year, month, week },
  });
  return response;
};
