import LinkIcon from '@/components/icons/LinkIcon';
import ProgressChip from '@/components/progress-chip/ProgressChip';

import { LastReviewListItem } from '../../types';

export const LastReviewItem = ({
  text,
  project,
  progressCount,
}: LastReviewListItem) => {
  return (
    <div>
      <div
        className="relative w-full p-3 border border-line-assistive rounded-lg bg-surface-foreground
     font-body-14 text-text-strong"
      >
        {text}
      </div>
      <div className="flex">
        <LinkIcon size={36} />
        <div className="flex items-center gap-2 py-1.5 pl-3 pr-2 mt-2 border border-line-normal rounded-lg bg-surface-foregroundOn">
          <p>{project}</p>
          <ProgressChip percentage={progressCount} />
        </div>
      </div>
    </div>
  );
};
