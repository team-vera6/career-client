'use client';

import { HTMLAttributes, useMemo } from 'react';

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
  const dots = useMemo(() => {
    return Array.from({ length: totalCount }, (_, index) => {
      if (displayType === 'step') {
        return index === activeCount - 1;
      } else if (displayType === 'progress') {
        return index < activeCount;
      }
      return false;
    });
  }, [totalCount, displayType, activeCount]);

  return (
    <div className={cn('flex gap-2.5 bg-transparent', className)}>
      {dots.map((isActive, index) => (
        <div
          key={index}
          className={cn(
            'w-3 h-3 rounded-full bg-surface-base',
            isActive && 'bg-surface-normal',
          )}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
