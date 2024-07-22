'use client';

import { HTMLAttributes, useMemo } from 'react';

import { cn } from '@/utils/tailwind';

interface Props {
  dotCount: number; // 점 개수
  displayType: 'step' | 'progress';
  activeLevel: number;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

const ProgressDots = ({ dotCount, displayType, activeLevel, className }: Props) => {
  const dots = useMemo(() => {
    return Array.from({ length: dotCount }, (_, index) => {
      if (displayType === 'step') {
        return index === activeLevel - 1;
      } else if (displayType === 'progress') {
        return index < activeLevel;
      }
      return false;
    });
  }, [dotCount, displayType, activeLevel]);

  return (
    <div className={cn('flex gap-2.5', className)}>
      {dots.map((isActive, index) => (
        <div
          key={index}
          className={cn('w-3 h-3 rounded-full bg-surface-base', isActive && 'bg-surface-normal')}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
