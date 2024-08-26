import { CurrentWeek } from '@/types/currentWeek';

import { typedGet } from '..';

export const getReviewList = async () => {
  const response = await typedGet<ReviewList>('/review');
  return response;
};

export interface Review {
  weekNumber: CurrentWeek;
  id: number;
  like: number;
  highlightSummary: string;
}

interface ReviewList {
  reviews: Review[];
  nextCursor: number;
}
