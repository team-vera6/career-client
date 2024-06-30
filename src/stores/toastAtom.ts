import { atom } from 'jotai';

import { ToastProps } from '@/types/toast';

export const toastAtom = atom<ToastProps[]>([]);
export const toastIdAtom = atom(0);
