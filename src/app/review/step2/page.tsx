import { CurrentReview } from '../_components/current-review/CurrentReview';
import { LastReview } from '../_components/last-review/LastReview';
import { Tip } from '../_components/tip/Tip';
import { PagingButton } from './_components/paging-button/PagingButton';

export default function Step2Page() {
  return (
    <>
      <LastReview category="highLight" />
      <CurrentReview category="highLight" />
      <Tip category="highLight" />

      <PagingButton />
    </>
  );
}
