import { ChangeEventHandler } from 'react';

import colors from '@/styles/colors';

interface Props {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorText?: string;
}

const NumberInput = ({ value, onChange, errorText }: Props) => {
  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        className="p-3 border border-line-normal bg-surface-foreground rounded-lg font-body-14 text-neutral-90 hover:border-line-normalHover placeholder:text-text-normal focus:outline-line-focus disabled:border-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive w-10 h-11 text-center"
        style={
          errorText ? { borderColor: colors.state.negative, outline: colors.state.negative } : {}
        }
        value={value}
        onChange={onChange}
        maxLength={1}
        size={1}
      />

      {errorText && <p className="text-state-negative font-body-12 mt-[2px]">{errorText}</p>}
    </>
  );
};

export default NumberInput;
