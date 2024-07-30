import { HTMLAttributes } from 'react';

import { cn } from '@/utils/tailwind';

interface Props {
  className?: HTMLAttributes<HTMLSpanElement>['className'];
}

const Connector = ({ className }: Props) => {
  return (
    <span
      className={cn(
        'w-0 h-[3.75rem] border-l border-line-normalHover',
        className,
      )}
    />
  );
};

export default Connector;
