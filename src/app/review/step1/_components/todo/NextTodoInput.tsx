'use client';

import { useState } from 'react';

import { cn } from '@/utils/tailwind';

interface Props {
  value: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  width?: string;
}

export const NextTodoInput = ({ value, onChange }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className={cn(
        CONTAINER_STYLE.default,
        CONTAINER_STYLE.review,
        isEditing && CONTAINER_STYLE.reviewEditing,
      )}
    >
      <input
        type="text"
        className="w-full font-body-16 outline-none bg-transparent"
        value={value}
        onChange={(e) => onChange?.(e.currentTarget.value)}
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
      />
    </div>
  );
};

const CONTAINER_STYLE = {
  default:
    'w-full pr-3 py-3.5 flex items-center justify-between h-12 focus-within:outline-none cursor-pointer',
  review: 'bg-transparent box-border border-b border-transparent',
  reviewEditing: 'border-b border-text-primary',
};
