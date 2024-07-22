export type ToastIconType = 'success' | 'error';

export interface ToastProps {
  id: number | string;
  message: string;
  iconType?: ToastIconType; // 아이콘 필요한 경우
}
