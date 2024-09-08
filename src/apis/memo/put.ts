import { typedPut } from '..';

export const bookmarkMemo = async (id: number) => {
  const response = await typedPut('/memos/bookmark', { id });
  return response;
};

interface EditMemoRequest {
  id: number;
  content: string;
  isMarked: boolean;
}

export const editMemo = async ({ id, content, isMarked }: EditMemoRequest) => {
  const response = await typedPut(`/memos/${id}`, { content, isMarked });
  return response;
};
