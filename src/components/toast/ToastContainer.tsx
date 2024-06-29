// components/ToastContainer.tsx

import Toast, { ToastProps } from '.';

interface ToastContainerProps {
  toasts: ToastProps[];
}

const ToastContainer = ({ toasts }: ToastContainerProps) => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 space-y-2">
      {toasts.map((toast, index) => (
        <Toast key={index} message={toast.message} type={toast.type} />
      ))}
    </div>
  );
};

export default ToastContainer;
