'use client';

import { memo, ReactNode, useState } from 'react';

import RectangleCheckIcon from '@/components/icons/RectangleCheckIcon';
import colors from '@/styles/colors';
import { cn } from '@/utils/tailwind';

interface Props {
  value: string;
  onChange?: (value: string) => void;
  checked: boolean;
  onClickCheckbox?: () => void;
  width?: string;
  buttons?: ReactNode;
  category?: 'dashboard' | 'review';
}

const CheckboxInput = ({
  value,
  onChange,
  checked,
  onClickCheckbox,
  width,
  buttons,
  category = 'dashboard',
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
      <div className="flex items-center gap-2">
        <button type="button" onClick={onClickCheckbox}>
          {checked ? <RectangleCheckIcon size={20} /> : <UnCheckedIcon />}
        </button>
        <input
          type="text"
          className="w-full font-body-16 outline-none bg-transparent"
          value={value}
          onChange={(e) => onChange?.(e.currentTarget.value)}
          style={{
            color: checked ? colors.text.normal : colors.text.strong,
          }}
          onFocus={() => setIsEditing(true)}
          onBlur={() => setIsEditing(false)}
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
