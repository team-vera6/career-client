import { HTMLAttributes } from 'react';

export type ClassName<T = HTMLDivElement> = HTMLAttributes<T>['className'];
