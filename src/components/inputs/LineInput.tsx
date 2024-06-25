import { InputHTMLAttributes } from 'react';

import colors from '@/styles/colors';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
}

const LineInput = ({ errorText, ...rest }: Props) => {
  return (
    <>
      <input
        type="text"
        className="outline-none bg-surface-foreground py-3 border-b border-b-line-normal font-title-20 text-neutral-90 hover:border-b-line-normalHover placeholder:text-text-normal focus:border-b-line-focus disabled:border-b-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive"
        style={
          errorText ? { borderColor: colors.state.negative, outline: colors.state.negative } : {}
        }
        {...rest}
      />

      <p className="text-state-negative font-body-12 mt-[2px]">{errorText}</p>
    </>
  );
};

export default LineInput;
