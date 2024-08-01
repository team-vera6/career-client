import { CurrentWeekReview } from '../_components/current-week-review/CurrentWeekReview';
import { LastWeekReview } from '../_components/last-week-review/LastWeekReview';
import { Tip } from '../_components/tip/Tip';
import { PagingButton } from './_components/paging-button/PagingButton';

export default function Step2Page() {
  return (
    <>
      <LastWeekReview category="highLight" />
      <CurrentWeekReview category="highLight" />
      <Tip category="highLight" />

      <PagingButton />
    </>
  );
}
