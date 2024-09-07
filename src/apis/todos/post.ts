import { CurrentWeek } from '@/types/currentWeek';

import { typedPost } from '..';

export interface TodoRequest {
  weekNumber: CurrentWeek;
  content: number;
}

export const addTodo = async (body: TodoRequest) => {
  const response = await typedPost('/todos', body);
  return response;
};
