/* eslint-disable @typescript-eslint/no-explicit-any */
export const sortByWeek = (a: any, b: any) => {
  const compareYear = b.weekNumber.year - a.weekNumber.year;
  const compareMonth = b.weekNumber.month - a.weekNumber.month;
  const compareWeek = b.weekNumber.week - a.weekNumber.week;

  return compareYear || compareMonth || compareWeek;
};
