'use client';

import { toastAtom } from '@/stores/toastAtom';
import { useAtomValue } from 'jotai';
import { createPortal } from 'react-dom';
import Toast from './Toast';

const ToastContainer = () => {
  const toasts = useAtomValue(toastAtom);

  return toasts.length > 0
    ? createPortal(
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 space-y-3 z-50">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              id={toast.id}
              alertType={toast.alertType}
            />
          ))}
        </div>,
        document.body,
      )
    : null;
};

export default ToastContainer;
