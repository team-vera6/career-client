import { CurrentReview } from '../_components/CurrentReview/CurrentReview';
import { LastReview } from '../_components/LastReview/LastReview';

export default function Step2Page() {
  return (
    <>
      <LastReview category="highLight" />
      <CurrentReview category="highLight" />
    </>
  );
}
