import { typedPut } from '..';

export interface modifyScoreRequest {
  id: number;
  like: number;
}

export const modifyScore = async (body: modifyScoreRequest) => {
  const response = await typedPut('/reviews', body);
  return response;
};
