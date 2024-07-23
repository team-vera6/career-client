'use client';

import { HTMLAttributes } from 'react';

import { cn } from '@/utils/tailwind';

interface Props {
  totalCount: number; // 점 총 개수
  activeCount: number;
  displayType: 'step' | 'progress';
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

const ProgressDots = ({
  totalCount,
  displayType,
  activeCount,
  className,
}: Props) => {
  return (
    <div className={cn('flex gap-2.5 bg-transparent', className)}>
      {Array.from({ length: totalCount }, (_, index) => (
        <div
          key={`dot-${index}`}
          className={cn(
            'w-3 h-3 rounded-full',
            (displayType === 'step' && index === activeCount - 1) ||
              (displayType === 'progress' && index < activeCount)
              ? 'bg-surface-normal'
              : 'bg-surface-base',
          )}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
