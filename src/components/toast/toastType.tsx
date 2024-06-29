import { ReactNode } from 'react';
import AlertIcon from '../icons/AlertIcon';
import CircleCheckIcon from '../icons/CircleCheckIcon';

type IconType = 'success' | 'error';

export interface ToastProps {
  id: number;
  message: string;
  iconType?: IconType; // 아이콘 필요한 경우
}

export const ToastIcon: { [key in IconType]: ReactNode } = {
  success: <CircleCheckIcon />,
  error: <AlertIcon />,
};
