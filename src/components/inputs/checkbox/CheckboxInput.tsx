'use client';

import { memo, ReactNode } from 'react';

import RectangleCheckIcon from '@/components/icons/RectangleCheckIcon';
import colors from '@/styles/colors';

interface Props {
  value?: string;
  onChange: (value: string) => void;
  checked: boolean;
  onClickCheckbox: () => void;
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
  return (
    <div
      className={CONTAINER_STYLE[category]}
      style={{
        width: width ?? '100%',
        boxShadow: category === 'dashboard' ? '0px 4px 12px 0px rgba(0, 0, 0, 0.08)' : 'none',
      }}
    >
      <div className="flex items-center gap-2">
        <button type="button" onClick={onClickCheckbox}>
          {checked ? <RectangleCheckIcon size={20} /> : <UnCheckedIcon />}
        </button>
        <input
          type="text"
          className="w-full font-body-16 outline-none bg-transparent"
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          style={{
            color: checked ? colors.text.normal : colors.text.strong,
          }}
        />
      </div>

      {buttons}
    </div>
  );
};

export default memo(CheckboxInput);

const UnCheckedIcon = () => (
  <div className="w-5 h-5 rounded border-[1.5px] border-text-assistive bg-surface-foreground" />
);

const CONTAINER_STYLE = {
  dashboard: `px-3 py-3.5 flex items-center justify-between rounded-lg h-12 bg-surface-foreground 
      focus-within:outline focus-within:outline-1 focus-within:outline-text-primary
      hover:bg-[#EBEBEB]
      `,
  review: `px-3 py-3.5 flex items-center justify-between h-12 bg-transparent box-border border-b border-transparent
    focus-within:outline-none focus-within:border-b focus-within:border-text-primary`,
};
