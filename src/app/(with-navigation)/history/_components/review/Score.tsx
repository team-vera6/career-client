import { HTMLAttributes } from 'react';

import ProgressDots from '@/components/progress-dots/ProgressDots';

import { cn } from './../../../../../utils/tailwind';

interface Props {
  activeCount: number;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

export const Score = ({ activeCount, className }: Props) => {
  return (
    <div
      className={cn(
        'px-3 py-2 rounded-[0.875rem] bg-surface-foreground',
        className,
      )}
    >
      <ProgressDots
        totalCount={7}
        activeCount={activeCount}
        displayType="progress"
        className="gap-2"
      />
    </div>
  );
};

export default Score;
