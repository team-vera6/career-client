'use client';

import { useAtomValue } from 'jotai';
import { createPortal } from 'react-dom';

import { toastAtom } from '@/stores/toastAtom';

import Toast from './Toast';

const ToastContainer = () => {
  const toasts = useAtomValue(toastAtom);

  return toasts.length > 0
    ? createPortal(
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 space-y-3 z-50">
          {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} id={toast.id} iconType={toast.iconType} />
          ))}
        </div>,
        document.body,
      )
    : null;
};

export default ToastContainer;
