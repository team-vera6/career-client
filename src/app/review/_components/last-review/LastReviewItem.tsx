import LinkIcon from '@/components/icons/LinkIcon';
import ProgressChip from '@/components/progress-chip/ProgressChip';

import { LastReviewListItem } from '../../types';

export const LastReviewItem = ({
  text,
  project,
  progressCount,
}: LastReviewListItem) => {
  return (
    <div className="w-full">
      <div
        className="p-3 border border-line-assistive rounded-lg bg-surface-foreground
     font-body-14 text-text-strong"
      >
        {text}
      </div>
      <div className="flex">
        <LinkIcon size={36} />
        <div className="w-[calc(100%-2.2rem)] flex items-center justify-between gap-2 py-1.5 pl-3 pr-2 mt-2 border border-line-normal rounded-lg bg-surface-foregroundOn">
          <p className="truncate font-body-14 text-text-strong">{project}</p>
          <ProgressChip percentage={progressCount} />
        </div>
      </div>
    </div>
  );
};
