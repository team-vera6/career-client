import { getCurrentWeek } from '@/utils/date';

import { ActivePage } from './ActivePage';

export const WeekInfo = () => {
  const { month, week } = getCurrentWeek();

  return (
    <section className="flex justify-between items-center mb-6">
      <p className="font-head-24 text-text-strong">
        {month}월 {week}주차<sup className="font-body-14 ml-2">7/22 ~ 7/26</sup>
      </p>
      <ActivePage />
    </section>
  );
};
