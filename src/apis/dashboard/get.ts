import { CurrentWeek } from '@/types/currentWeek';

import { typedGet } from '..';

export interface DashboardData {
  laps: number;
  daysLeft: number;
  projectCount: number;
  reviewCount: number;
  todos: {
    id: number;
    content: string;
  }[];
}

export const getDashboardData = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<DashboardData>('/dashboard', {
    params: { year, month, week },
  });
  return response;
};
