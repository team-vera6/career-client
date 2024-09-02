import { typedDelete } from '..';

export const addTodo = async (id: string) => {
  const response = await typedDelete(`/reviews/${id}`);
  return response;
};
