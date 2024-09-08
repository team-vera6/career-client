import { typedDelete } from '..';

export const deleteTodo = async (id: string[]) => {
  const response = await typedDelete('/todos', {
    params: { ids: id.join(',') },
  });
  return response;
};
