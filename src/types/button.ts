import { ButtonHTMLAttributes } from 'react';

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
