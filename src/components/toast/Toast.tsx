'use client';

import { useEffect, useState } from 'react';
import { ToastIcon, ToastProps } from './toastType';

const Toast = ({ id, message, iconType }: ToastProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id={String(id)}
      role="alert"
      className={`mx-auto min-w-[24.125rem] max-w-[36.625rem] h-12 bg-surface-alternative text-text-invert font-body-16 flex items-center px-4 gap-2 rounded-lg transition-transform transform-gpu duration-300 ease-in-out ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      {iconType && ToastIcon[iconType]}
      {message}
    </div>
  );
};

export default Toast;
