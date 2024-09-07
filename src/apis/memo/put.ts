import { typedPut } from '..';

export const bookmarkMemo = async (id: number) => {
  const response = await typedPut('/memos/bookmark', { id });
  return response;
};
