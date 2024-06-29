import { toastAtom, toastIdAtom } from '@/stores/toastAtom';
import { useAtomValue, useSetAtom } from 'jotai';

import { ToastProps } from '@/components/toast/toastType';
import { useCallback } from 'react';

const useToast = () => {
  const setToasts = useSetAtom(toastAtom);
  const setIdCounter = useSetAtom(toastIdAtom);
  const idCounter = useAtomValue(toastIdAtom);

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
    [idCounter, setIdCounter, setToasts],
  );

  return {
    addToast,
  };
};

export default useToast;
