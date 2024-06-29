import { ReactNode } from 'react';
import AlertIcon from '../icons/AlertIcon';
import CircleCheckIcon from '../icons/CircleCheckIcon';

type ToastType = 'alert' | 'text';
type AlertType = 'success' | 'error';

export interface ToastProps {
  id: number;
  message: string;
  type: ToastType;
  alertType?: AlertType;
}

export const ToastIcon: { [key in AlertType]: ReactNode } = {
  success: <CircleCheckIcon />,
  error: <AlertIcon />,
};
