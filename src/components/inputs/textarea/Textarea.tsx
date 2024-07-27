import { HTMLAttributes, TextareaHTMLAttributes } from 'react';

import { cn } from '@/utils/tailwind';

interface Props
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  errorText?: string;
  className?: HTMLAttributes<HTMLTextAreaElement>['className'];
  onChange?: (value: string) => void;
}

const Textarea = ({ errorText, className, onChange, ...rest }: Props) => {
  return (
    <>
      <textarea
        className={cn(
          `block w-full p-3 border border-line-normal bg-surface-foreground rounded-lg font-body-14 text-neutral-90 resize-none
          hover:border-line-normalHover placeholder:text-text-normal 
           focus:outline-none focus:border focus:border-line-focus
          disabled:border-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive 
          `,
          className,
          errorText && 'border-state-negative outline-state-negative',
        )}
        onChange={(e) => onChange?.(e.currentTarget.value)}
        {...rest}
      />

      {errorText && (
        <p className="text-state-negative font-body-12 mt-[2px]">{errorText}</p>
      )}
    </>
  );
};

export default Textarea;
