import { ReactNode } from 'react';
import AlertIcon from '../icons/AlertIcon';
import CircleCheckIcon from '../icons/CircleCheckIcon';

type ToastType = 'success' | 'error';

export interface ToastProps {
  id: number;
  message: string;
  type: ToastType;
}

export const ToastIcon: { [key in ToastType]: ReactNode } = {
  success: <CircleCheckIcon />,
  error: <AlertIcon />,
};
