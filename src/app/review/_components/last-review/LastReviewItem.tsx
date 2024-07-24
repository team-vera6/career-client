import LinkIcon from '@/components/icons/LinkIcon';
import ProgressChip from '@/components/progress-chip/ProgressChip';

export const LastReviewItem = () => {
  return (
    <div>
      <div
        className="relative w-full p-3 border border-line-assistive rounded-lg bg-surface-foreground
     font-body-14 text-text-strong"
      >
        CurrentHighlight
      </div>
      <div className="flex">
        <LinkIcon size={36} />
        <div className="flex items-center gap-2 py-1.5 pl-3 pr-2 mt-2 border border-line-normal rounded-lg bg-surface-foregroundOn">
          <p>차종, 시간대 등을 기반으로 예약 추천 기능 추가</p>
          <ProgressChip percentage={50} />
        </div>
      </div>
    </div>
  );
};
