import { typedDelete } from '..';

export const deleteMemo = async (id: number) => {
  const response = await typedDelete(`/memos/${id}`);
  return response;
};
