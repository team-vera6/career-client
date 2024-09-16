'use client';

import { KeyboardEvent, memo, ReactNode, useRef, useState } from 'react';

import RectangleCheckIcon from '@/components/icons/RectangleCheckIcon';
import colors from '@/styles/colors';
import { cn } from '@/utils/tailwind';

interface Props {
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  checked: boolean;
  onClickCheckbox?: () => void;
  onBlur?: () => void;
  width?: string;
  buttons?: ReactNode;
  category?: 'dashboard' | 'review';
}

const CheckboxInput = ({
  value,
  placeholder,
  onChange,
  checked,
  onClickCheckbox,
  onBlur,
  width,
  buttons,
  category = 'dashboard',
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleBlur = () => {
    setIsEditing(false);
    onBlur?.();
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter') {
      inputRef.current?.blur();
    }

    if (e.key === 'Escape') {
      inputRef.current?.blur();
    }
  };

  const showRightButtons =
    (category === 'dashboard' && isHovered && !isEditing) ||
    (category === 'review' && !isEditing);

  return (
    <div
      className={cn(
        CONTAINER_STYLE.default,
        category === 'dashboard' && CONTAINER_STYLE.dashboard,
        category === 'dashboard' &&
          isEditing &&
          CONTAINER_STYLE.dashboardEditing,
        category === 'review' && CONTAINER_STYLE.review,
        category === 'review' && isEditing && CONTAINER_STYLE.reviewEditing,
      )}
      style={{
        width: width ?? '100%',
        boxShadow:
          category === 'dashboard'
            ? '0px 4px 12px 0px rgba(0, 0, 0, 0.08)'
            : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 w-full">
        <button type="button" onClick={onClickCheckbox}>
          {checked ? <RectangleCheckIcon size={20} /> : <UnCheckedIcon />}
        </button>
        <input
          ref={inputRef}
          type="text"
          className="w-full font-body-16 outline-none bg-transparent"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.currentTarget.value)}
          style={{
            color: checked ? colors.text.normal : colors.text.strong,
          }}
          onFocus={() => setIsEditing(true)}
          onBlur={handleBlur}
          onKeyDown={handleKeydown}
        />
      </div>

      {showRightButtons && buttons}
    </div>
  );
};

export default memo(CheckboxInput);

const UnCheckedIcon = () => (
  <div className="w-5 h-5 rounded border-[1.5px] border-text-assistive bg-surface-foreground" />
);

const CONTAINER_STYLE = {
  default:
    'px-3 py-3.5 flex items-center justify-between h-12 focus-within:outline-none cursor-pointer',
  dashboard: 'rounded-lg bg-surface-foreground hover:bg-surface-assistive',
  dashboardEditing: 'border border-text-primary hover:bg-surface-foreground',
  review: 'bg-transparent box-border border-b border-transparent',
  reviewEditing: 'border-b border-text-primary',
};
