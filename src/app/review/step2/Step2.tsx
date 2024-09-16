import { CurrentWeekReview } from '../_components/current-week-review/CurrentWeekReview';
import { LastWeekReview } from '../_components/last-week-review/LastWeekReview';
import { PagingButton } from './_components/paging-button/PagingButton';

export const Step2 = () => {
  return (
    <>
      <LastWeekReview category="highLight" />
      <CurrentWeekReview category="highLight" />
      {/* <Tip category="highLight" /> */}

      <PagingButton />
    </>
  );
};
