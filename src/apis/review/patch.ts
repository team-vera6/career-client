import { typedPatch } from '..';

export interface ModifyScoreRequest {
  id: number;
  like: number;
}

export const modifyScore = async (body: ModifyScoreRequest) => {
  const response = await typedPatch('/reviews', body);
  return response;
};
