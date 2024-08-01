import { HTMLAttributes, InputHTMLAttributes, memo } from 'react';

import colors from '@/styles/colors';
import { cn } from '@/utils/tailwind';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  className?: HTMLAttributes<HTMLInputElement>['className'];
}

const LineInput = ({ errorText, className, ...rest }: Props) => {
  return (
    <>
      <input
        type="text"
        className={cn(
          'w-full outline-none bg-surface-foreground pt-3 pb-[.6875rem] border-b border-b-line-normal font-title-20 text-neutral-90 hover:border-b-line-normalHover placeholder:text-text-normal focus:border-b-line-focus disabled:border-b-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive',
          className,
        )}
        style={
          errorText
            ? {
                borderColor: colors.state.negative,
                outline: colors.state.negative,
              }
            : {}
        }
        {...rest}
      />

      <p className="text-state-negative font-body-12 mt-[2px]">{errorText}</p>
    </>
  );
};

export default memo(LineInput);
