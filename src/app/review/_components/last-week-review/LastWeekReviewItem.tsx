import { ReviewListItem } from '@/app/review/types';
import CloseCircleIcon from '@/components/icons/CloseCircleIcon';
import LinkIcon from '@/components/icons/LinkIcon';
import ProgressChip from '@/components/progress-chip/ProgressChip';

interface Props extends ReviewListItem {
  editable?: boolean;
}

export const LastWeekReviewItem = ({
  content,
  project,
  editable = false,
}: Props) => {
  return (
    <div className="w-full">
      <div
        className="p-3 border border-line-assistive rounded-lg bg-surface-foreground
     font-body-14 text-text-strong"
      >
        {content}
      </div>

      <div className="flex">
        <LinkIcon size={36} />
        <div className="w-[calc(100%-2.2rem)] flex items-center justify-between gap-2 py-1.5 pl-3 pr-2 mt-2 border border-line-normal rounded-lg bg-surface-foregroundOn relative">
          <p className="truncate font-body-14 text-text-strong">
            {project?.content}
          </p>
          <ProgressChip percentage={project?.progressRate ?? 0} />

          {editable && (
            <button className="absolute -right-2.5">
              <CloseCircleIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
