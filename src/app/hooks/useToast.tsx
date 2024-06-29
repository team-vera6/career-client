import { useCallback, useState } from 'react';

type ToastType = 'success' | 'error';

export interface ToastProps {
  id: number;
  message: string;
  type: ToastType;
}

const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const addToast = useCallback(
    (message: string, type: ToastType) => {
      const id = idCounter;
      setIdCounter((prevId) => prevId + 1);

      setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      }, 3000);
    },
    [idCounter],
  );

  return { toasts, addToast };
};

export default useToast;
