'use client';

import { ReactNode, useEffect, useState } from 'react';

import { ToastIconType, ToastProps } from '@/types/toast';
import { cn } from '@/utils/tailwind';

import AlertIcon from '../icons/AlertIcon';
import CircleCheckIcon from '../icons/CircleCheckIcon';

export const ToastIcon: Record<ToastIconType, ReactNode> = {
  success: <CircleCheckIcon />,
  error: <AlertIcon />,
};

export const ToastItem = ({ ...props }: ToastProps) => {
  return (
    <div
      id={String(props.id)}
      role="alert"
      className="min-w-[24.125rem] max-w-[36.625rem] h-12 bg-surface-alternative text-text-invert font-body-16 flex items-center px-4 gap-2 rounded-lg"
    >
      {props.iconType && ToastIcon[props.iconType]}
      {props.message}
    </div>
  );
};

export const Toast = ({ ...props }: ToastProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'duration-300 ease-out mx-auto',
        show ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0',
      )}
    >
      <ToastItem {...props} />
    </div>
  );
};
