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

export interface ReviewProject {
  content: string;
  projectId: number;
}

export interface HighlightsRequest {
  reviewId: number;
  highlights: ReviewProject[];
}

export const addHighlights = async (body: HighlightsRequest) => {
  const response = await typedPost<{ id: number[] }>('/highlights', body);
  return response;
};

export interface LowlightsRequest {
  reviewId: number;
  lowlights: ReviewProject[];
}

export const addLowlights = async (body: LowlightsRequest) => {
  const response = await typedPost<{ id: number[] }>('/lowlights', body);
  return response;
};
