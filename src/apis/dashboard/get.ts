import { CurrentWeek } from '@/types/currentWeek';

import { typedGet } from '..';

export interface DashboardDataResponse {
  laps: number;
  daysLeft: number;
  projectCount: number;
  reviewCount: number;
  todos: {
    id: number;
    content: string;
  }[];
  isReviewed: boolean;
}

export const getDashboardData = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<DashboardDataResponse>('/dashboard', {
    params: { year, month, week },
  });
  return response;
};
