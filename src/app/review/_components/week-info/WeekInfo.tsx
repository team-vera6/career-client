import { ActivePage } from './ActivePage';

export const WeekInfo = () => {
  return (
    <section className="flex justify-between items-center mb-6">
      <p className="font-head-24 text-text-strong">
        7월 4주차<sup className="font-body-14 ml-2">7/22 ~ 7/29</sup>
      </p>
      <ActivePage />
    </section>
  );
};
