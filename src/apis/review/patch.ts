import { typedPatch } from '..';

export interface modifyScoreRequest {
  id: number;
  like: number;
}

export const modifyScore = async (body: modifyScoreRequest) => {
  const response = await typedPatch('/reviews', body);
  return response;
};
