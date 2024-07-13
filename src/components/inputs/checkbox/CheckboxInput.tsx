'use client';

import { memo, ReactNode, useState } from 'react';

import RectangleCheckIcon from '@/components/icons/RectangleCheckIcon';
import colors from '@/styles/colors';

interface Props {
  value?: string;
  onChange: (value: string) => void;
  checked: boolean;
  onChange?: (value: string) => void;
  onClickCheckbox?: () => void;
  width?: string;
  buttons?: ReactNode;
  disabled?: boolean;
  showButtonsOnHover?: boolean;
}

const CheckboxInput = ({
  value,
  checked,
  onChange,
  onClickCheckbox,
  width,
  buttons,
  disabled,
  showButtonsOnHover = false,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const showRightButtons = !showButtonsOnHover || (showButtonsOnHover && isHovered);

  return (
    <div
      className="px-3 py-3.5 flex items-center justify-between rounded-lg h-12 focus-within:outline focus-within:outline-1 focus-within:outline-text-primary bg-surface-foreground"
      style={{
        width: width ?? '100%',
        boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
        backgroundColor: disabled ? colors.surface.assistive : '',
        opacity: disabled ? 0.8 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2">
        <div onClick={onClickCheckbox}>
          {checked ? <RectangleCheckIcon size={20} /> : <UnCheckedIcon />}
        </div>
        <input
          type="text"
          className="w-full font-body-16 text-text-strong outline-none bg-transparent"
          disabled={disabled}
          value={value}
          onChange={(e) => onChange?.(e.currentTarget.value)}
        />
      </div>

      <div
        className="transition-all duration-200 flex items-center"
        style={isHovered ? { opacity: 1 } : { opacity: 0 }}
      >
        {showRightButtons && buttons}
      </div>
    </div>
  );
};

export default memo(CheckboxInput);

const UnCheckedIcon = () => (
  <div className="w-5 h-5 rounded border-[1.5px] border-text-assistive bg-surface-foreground" />
);
