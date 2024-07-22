import { CurrentReviewItem } from './CurrentReviewItem';

export const CurrentReviewContainer = () => {
  return (
    <div className="w-full p-5 bg-surface-foreground rounded-xl flex flex-col gap-6">
      <CurrentReviewItem />
      <CurrentReviewItem />
      <CurrentReviewItem />
    </div>
  );
};
