import { typedPut } from '@/apis';
import { Todo } from '@/types/todo';

export const changeTodos = async (todos: Todo[]) => {
  const response = await typedPut('/todos', todos);
  return response;
};
