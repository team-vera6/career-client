import { HTMLAttributes, TextareaHTMLAttributes } from 'react';

import colors from '@/styles/colors';
import { cn } from '@/utils/tailwind';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorText?: string;
  className?: HTMLAttributes<HTMLTextAreaElement>['className'];
}

const Textarea = ({ errorText, className, ...rest }: Props) => {
  return (
    <>
      <textarea
        className={cn(
          'w-full p-3 border border-line-normal bg-surface-foreground rounded-lg font-body-14 text-neutral-90 hover:border-line-normalHover placeholder:text-text-normal focus:outline-line-focus disabled:border-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive resize-none',
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

export default Textarea;
