'use client';

import { useState } from 'react';

interface ToggleSwitchProps {
  initialState?: boolean;
  onChange?: (state: boolean) => void;
}

const ToggleSwitch = ({ initialState = false, onChange }: ToggleSwitchProps) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => {
    setIsOn((prev) => !prev);

    if (onChange) {
      onChange(isOn);
    }
  };

  return (
    <button
      className={
        isOn
          ? 'w-[2.125rem] h-5 flex items-center rounded-2xl p-[0.188rem] cursor-pointer bg-surface-normal'
          : 'w-[2.125rem] h-5 flex items-center rounded-2xl p-[0.188rem] cursor-pointer bg-surface-base'
      }
      onClick={toggle}
      type="button"
    >
      <div
        className={
          isOn
            ? 'w-3.5 h-3.5 bg-surface-foreground rounded-full duration-300 translate-x-[.9rem]'
            : 'w-3.5 h-3.5 bg-surface-foreground rounded-full duration-300 translate-x-0'
        }
      />
    </button>
  );
};

export default ToggleSwitch;
