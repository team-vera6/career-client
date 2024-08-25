import { CurrentWeek } from '@/types/currentWeek';

import { typedGet } from '..';

export const getDashboardData = async ({ year, month, week }: CurrentWeek) => {
  const response = await typedGet<DashboardData>('/dashboard', {
    params: { year, month, week },
  });
  return response;
};

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
