'use client';

import { useState } from 'react';

import PlusIcon from '@/components/icons/PlusIcon';
import colors from '@/styles/colors';
import { cn } from '@/utils/tailwind';

interface Props {
  category: 'currentTodo' | 'nextTodo' | 'highLight' | 'lowLight';
}

export const AddButton = ({ category }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const isTodo = category === 'currentTodo' || category === 'nextTodo';

  return (
    <button
      className={cn(
        'button-small',
        isTodo
          ? 'button-text text-center'
          : 'button-line hover:bg-surface-blank hover:opacity-100',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isTodo ? (
        <PlusIcon size={20} stroke={colors.text.normal} />
      ) : (
        <div className="h-5 w-5 flex items-center justify-center">
          <PlusIcon
            size={15}
            stroke={isHovered ? colors.text.neutral : colors.text.strong}
          />
        </div>
      )}
      <p className={cn(isHovered ? 'text-text-neutral' : 'text-text-strong')}>
        추가
      </p>
    </button>
  );
};
