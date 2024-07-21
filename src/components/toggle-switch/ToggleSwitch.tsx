'use client';

import { useState } from 'react';

import { cn } from '@/utils/tailwind';

interface ToggleSwitchProps {
  initialState?: boolean;
  onChange?: (state: boolean) => void;
}

const ToggleSwitch = ({
  initialState = false,
  onChange,
}: ToggleSwitchProps) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => {
    setIsOn((prev) => !prev);

    if (onChange) {
      onChange(isOn);
    }
  };

  return (
    <button
      className={cn(
        'w-[2.125rem] h-5 flex items-center rounded-2xl p-[0.188rem] cursor-pointer',
        isOn ? 'bg-surface-normal' : 'bg-surface-base',
      )}
      onClick={toggle}
      type="button"
    >
      <div
        className={cn(
          'w-3.5 h-3.5 bg-surface-foreground rounded-full duration-300',
          isOn ? 'translate-x-[.9rem]' : 'translate-x-0',
        )}
      />
    </button>
  );
};

export default ToggleSwitch;
