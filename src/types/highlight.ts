import { CurrentWeek } from './currentWeek';

export interface Highlight {
  id: number;
  content: string;
  project: {
    id: number;
    content: string;
    progressRate: number;
  };
  weekNumber: CurrentWeek;
}
