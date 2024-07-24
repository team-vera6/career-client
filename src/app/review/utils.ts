import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';

import { reviewPageAtom } from './stores';
import { pagingButtonProps } from './types';

export const usePagingButton = () => {
  const router = useRouter();
  const setActivePage = useSetAtom(reviewPageAtom);

  const onClickPagingButton = ({ path, activePage }: pagingButtonProps) => {
    router.push(`/review/${path}`);
    setActivePage(activePage);
  };

  return { onClickPagingButton };
};
