import { ToastProps } from '@/components/toast/toastType';
import { atom } from 'jotai';

export const toastAtom = atom<ToastProps[]>([]);
export const toastIdAtom = atom(0);
