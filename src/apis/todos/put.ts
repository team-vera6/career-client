import { Todo } from '@/types/todo';

import { typedPut } from '..';

export const modifyTodoList = async (body: Todo[]) => {
  const response = await typedPut('/todos', body);
  return response;
};
