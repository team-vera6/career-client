import { CurrentWeek } from '@/types/currentWeek';

import { typedGet } from '..';

export interface TodoType {
  id: number;
  content: string;
  status: string;
}

type TodoResponse = {
  todos: TodoType[];
};

export const getTodos = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<TodoResponse>('/todos', {
    params: { year, month, week },
  });
  return response;
};
