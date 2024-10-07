import { useSearchParams } from 'next/navigation';

const useWeekParams = () => {
  const params = useSearchParams();

  const year = params.get('year');
  const month = params.get('month');
  const week = params.get('week');

  return { year: Number(year), month: Number(month), week: Number(week) };
};

export default useWeekParams;
