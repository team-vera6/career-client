import { CurrentReview } from '../_components/current-review/CurrentReview';
import { LastWeekReview } from '../_components/last-week-review/LastWeekReview';
import { Tip } from '../_components/tip/Tip';
import { PagingButton } from './_components/paging-button/PagingButton';

export default function Step2Page() {
  return (
    <>
      <LastWeekReview category="highLight" />
      <CurrentReview category="highLight" />
      <Tip category="highLight" />

      <PagingButton />
    </>
  );
}
