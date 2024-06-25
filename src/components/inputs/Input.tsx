import { InputHTMLAttributes } from 'react';

import colors from '@/styles/colors';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  errorText?: string;
}

const Input = ({ placeholder, errorText, ...rest }: Props) => {
  return (
    <>
      <input
        type="text"
        className="p-3 border border-line-normal bg-surface-foreground rounded-lg font-body-14 text-neutral-90 hover:border-line-normalHover placeholder:text-text-normal focus:outline-line-focus disabled:border-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive h-11"
        placeholder={placeholder}
        style={
          errorText ? { borderColor: colors.state.negative, outline: colors.state.negative } : {}
        }
        {...rest}
      />

      {errorText && <p className="text-state-negative font-body-12 mt-[2px]">{errorText}</p>}
    </>
  );
};

export default Input;
