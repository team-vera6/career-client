import { useAtom, useSetAtom } from 'jotai';
import { useCallback } from 'react';

import { toastAtom, toastIdAtom } from '@/stores/toastAtom';
import { ToastProps } from '@/types/toast';

const useToast = () => {
  const setToasts = useSetAtom(toastAtom);
  const [toastId, setToastId] = useAtom(toastIdAtom);

  const addToast = useCallback(
    ({ message, iconType }: { message: string; iconType?: ToastProps['iconType'] }) => {
      const id = toastId;
      setToastId((prevId) => prevId + 1);

      setToasts((prevToasts) => [{ id, message, iconType }, ...prevToasts]);

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      }, 3000);
    },
    [toastId, setToastId, setToasts],
  );

  return {
    addToast,
  };
};

export default useToast;
