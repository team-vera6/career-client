import { toastAtom, toastIdAtom } from '@/stores/toastAtom';

import { ToastProps } from '@/components/toast/toastType';
import { useAtom } from 'jotai';
import { useCallback } from 'react';

const useToast = () => {
  const [toasts, setToasts] = useAtom<ToastProps[]>(toastAtom);
  const [idCounter, setIdCounter] = useAtom(toastIdAtom);

  const addToast = useCallback(
    ({
      message,
      type,
      alertType,
    }: {
      message: string;
      type: ToastProps['type'];
      alertType?: ToastProps['alertType'];
    }) => {
      const id = idCounter;
      setIdCounter((prevId) => prevId + 1);

      setToasts((prevToasts) => [{ id, message, type, alertType }, ...prevToasts]);

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      }, 3000);
    },
    [idCounter],
  );

  return {
    toasts,
    addToast,
  };
};

export default useToast;
