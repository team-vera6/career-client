import { typedPost } from '..';

interface MemoRequest {
  content: string;
  isMarked: boolean;
}

export const addNewMemo = async ({ content, isMarked }: MemoRequest) => {
  const response = await typedPost('/memos', { content, isMarked });
  return response;
};
