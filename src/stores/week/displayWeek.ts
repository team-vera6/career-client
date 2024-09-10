import { atom } from 'jotai';

import { getCurrentWeek } from '@/utils/date';

const { year, month, week } = getCurrentWeek();
const now = new Date();

export const displayWeekAtom = atom({
  year,
  month,
  week,
  date: now.getDate(),
  day: now.getDay() === 0 ? now.getDay() : 4,
});
