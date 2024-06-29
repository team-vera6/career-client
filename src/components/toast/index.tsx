// components/Toast.tsx
import { useEffect, useState } from 'react';
import AlertIcon from '../icons/AlertIcon';
import CircleCheckIcon from '../icons/CircleCheckIcon';

export interface ToastProps {
  message: string;
  type: 'success' | 'error';
}

const Toast = ({ message, type }: ToastProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // 3초 후에 사라지게 설정

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`mx-auto bottom-5 min-w-[24.125rem] max-w-[36.625rem] h-12 bg-surface-alternative text-text-invert font-body-16 flex items-center px-4 gap-2 rounded-lg transition-transform transform-gpu duration-300 ease-in-out ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      {type === 'success' ? <CircleCheckIcon /> : <AlertIcon />}
      {message}
    </div>
  );
};

export default Toast;
