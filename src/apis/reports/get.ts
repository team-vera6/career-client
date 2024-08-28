import { CurrentWeek } from '@/types/currentWeek';
import { Highlight } from '@/types/highlight';

import { typedGet } from '..';

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

export const getReviewList = async () => {
  const response = await typedGet<ReviewList>('/review');
  return response;
};

type HighlightResponse = {
  highlights: Omit<Highlight, 'currentWeek'>[];
};

export const getHighlights = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<HighlightResponse>('/highlight', {
    params: { year, month, week },
  });
  return response;
};

type LowResponse = {
  lowlights: Omit<Highlight, 'currentWeek'>[];
};

export const getLowlights = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<LowResponse>('/lowlights', {
    params: { year, month, week },
  });
  return response;
};
