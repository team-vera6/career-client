import { typedDelete } from '..';

export const deleteTodo = async (id: string) => {
  const response = await typedDelete(`/todos/${id}`);
  return response;
};
