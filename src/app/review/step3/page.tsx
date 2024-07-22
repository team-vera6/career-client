import { CurrentReview } from '../_components/current-review/CurrentReview';
import { LastReview } from '../_components/last-review/LastReview';
import { Tip } from '../_components/tip/Tip';

export default function Step3Page() {
  return (
    <>
      <LastReview category="lowLight" />
      <CurrentReview category="lowLight" />
      <Tip category="lowLight" />
    </>
  );
}
