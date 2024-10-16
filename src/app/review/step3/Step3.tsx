import { CurrentWeekReview } from '../_components/current-week-review/CurrentWeekReview';
import { LastWeekReview } from '../_components/last-week-review/LastWeekReview';
import { PagingButton } from './_components/paging-button/PagingButton';

export const Step3 = () => {
  return (
    <>
      <LastWeekReview category="lowLight" />
      <CurrentWeekReview category="lowLight" />

      <PagingButton />
    </>
  );
};
