import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';

import { reviewPageAtom } from './stores';
import { PagingButtonProps } from './types';

export const usePagingButton = () => {
  const router = useRouter();
  const setActivePage = useSetAtom(reviewPageAtom);

  const onClickPagingButton = ({ path, activePage }: PagingButtonProps) => {
    router.push(`/review/${path}`);
    setActivePage(activePage);
  };

  return { onClickPagingButton };
};
