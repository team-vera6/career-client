import Toast from './Toast';
import { ToastProps } from './toastType';

interface ToastContainerProps {
  toasts: ToastProps[];
}

const ToastContainer = ({ toasts }: ToastContainerProps) => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 space-y-3 z-50">
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} id={toast.id} />
      ))}
    </div>
  );
};

export default ToastContainer;
