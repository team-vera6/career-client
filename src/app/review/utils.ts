import { useSetAtom } from 'jotai';

import { reviewStepsAtom } from './stores';
import { PagingButtonProps } from './types';

export const usePagingButton = () => {
  const setReviewStep = useSetAtom(reviewStepsAtom);

  const onClickPagingButton = ({
    direction,
    activePage,
  }: PagingButtonProps) => {
    setReviewStep({ direction, activePage });
  };

  return { onClickPagingButton };
};
