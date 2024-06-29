// hooks/useToast.tsx
import { ToastProps } from '@/components/toast';
import { useState } from 'react';

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (message: string, type: 'success' | 'error') => {
    setToasts((prevToasts) => [...prevToasts, { message, type }]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1));
    }, 3000); // 3초 후에 사라지게 설정
  };

  return { toasts, addToast };
};
