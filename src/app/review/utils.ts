import { useSetAtom } from 'jotai';

import { reviewStepsAtom } from './stores';
import { PagingButtonProps } from './types';

export const usePagingButton = () => {
  const setActivePage = useSetAtom(reviewStepsAtom);

  const onClickPagingButton = ({ direction, activePage }: PagingButtonProps) => {
    setActivePage({direction, activePage});
  };

  return { onClickPagingButton };
};
