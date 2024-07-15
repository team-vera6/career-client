import { ReactNode } from 'react';

import RectangleCheckIcon from '@/components/icons/RectangleCheckIcon';
import colors from '@/styles/colors';

interface Props {
  value?: string;
  onChange: (value: string) => void;
  checked: boolean;
  onClickCheckbox: () => void;
  width?: string;
  buttons?: ReactNode;
  disabled?: boolean;
}

const CheckboxInput = ({
  value,
  onChange,
  checked,
  onClickCheckbox,
  width,
  buttons,
  disabled,
}: Props) => {
  return (
    <div
      className="px-3 py-3.5 flex items-center justify-between rounded-lg h-12 focus-within:outline focus-within:outline-1 focus-within:outline-text-primary bg-surface-foreground"
      style={{
        width: width ?? '100%',
        boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
        backgroundColor: disabled ? colors.surface.assistive : '',
        opacity: disabled ? 0.8 : 1,
      }}
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
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </div>

      {buttons}
    </div>
  );
};

export default CheckboxInput;

const UnCheckedIcon = () => (
  <div className="w-5 h-5 rounded border-[1.5px] border-text-assistive bg-surface-foreground" />
);
