'use client';

import { memo, useState } from 'react';

import DeleteIcon from '@/components/icons/DeleteIcon';
import { cn } from '@/utils/tailwind';

interface Props {
  value: string;
  onChange?: (value: string) => void;
  onClickDelete?: () => void;
}

const DeletableInput = ({ value, onChange, onClickDelete }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div
      className={cn(
        CONTAINER_STYLE.default,
        isEditing && CONTAINER_STYLE.Editing,
      )}
      style={{
        boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 w-full">
        <input
          type="text"
          className="w-[calc(100%-0.5rem)] font-body-16 outline-none bg-transparent text-text-strong"
          value={value}
          onChange={(e) => onChange?.(e.currentTarget.value)}
          onFocus={() => setIsEditing(true)}
          onBlur={() => setIsEditing(false)}
        />
      </div>

      {isHovered && !isEditing && (
        <button type="button" onClick={onClickDelete}>
          <DeleteIcon size={24} />
        </button>
      )}
    </div>
  );
};

export default memo(DeletableInput);

const CONTAINER_STYLE = {
  default:
    'w-full h-12 px-3 py-3.5 flex items-center justify-between cursor-pointer rounded-lg bg-surface-foreground border border-transparent focus-within:outline-none hover:bg-surface-assistive',
  Editing: 'border border-text-primary hover:bg-surface-foreground',
};
