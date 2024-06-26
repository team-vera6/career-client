import { ReactNode } from 'react';

import colors from '@/styles/colors';

interface Props {
  width?: string;
  buttons?: ReactNode;
  disabled?: boolean;
}

const CheckboxInput = ({ width, buttons, disabled }: Props) => {
  return (
    <div
      className="px-3 py-3.5 flex items-center justify-between rounded-2xl h-12 focus-within:outline focus-within:outline-1 focus-within:outline-text-primary bg-surface-foreground"
      style={{
        width: width ?? '100%',
        boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.08)',
        backgroundColor: disabled ? colors.surface.base : '',
      }}
    >
      <div className="flex items-center gap-2">
        <input type="checkbox" className="w-5 h-5 accent-line-focus" disabled={disabled} />
        <input
          type="text"
          className="w-full font-body-16 text-text-strong outline-none bg-transparent"
          disabled={disabled}
        />
      </div>

      {buttons}
    </div>
  );
};

export default CheckboxInput;
