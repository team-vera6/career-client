import { CurrentWeek } from '@/types/currentWeek';

import { typedPost } from '..';

export interface Score {
  weekNumber: CurrentWeek;
  like: number;
}

export interface ScoreResponse {
  id: number;
}

export const addScore = async (body: Score) => {
  const response = await typedPost<ScoreResponse>('/reviews', body);
  return response;
};
