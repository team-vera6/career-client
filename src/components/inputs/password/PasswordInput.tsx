'use client';

import { InputHTMLAttributes, useState } from 'react';

import EyeOffIcon from '@/components/icons/EyeOffIcon';
import EyeOnIcon from '@/components/icons/EyeOnIcon';
import colors from '@/styles/colors';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
}

const PasswordInput = ({ errorText, ...rest }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        className="w-full p-3 border border-line-normal bg-surface-foreground rounded-lg font-body-14 text-neutral-90 hover:border-line-normalHover placeholder:text-text-normal focus:outline-line-focus disabled:border-line-normal disabled:text-text-assistive disabled:placeholder:text-text-assistive h-11 read-only:outline-0"
        style={
          errorText ? { borderColor: colors.state.negative, outline: colors.state.negative } : {}
        }
        {...rest}
      />

      <button onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-3">
        {showPassword ? <EyeOnIcon size={20} /> : <EyeOffIcon size={20} />}
      </button>

      {errorText && <p className="text-state-negative font-body-12 mt-[2px]">{errorText}</p>}
    </div>
  );
};

export default PasswordInput;
