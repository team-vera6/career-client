import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';

import { reviewPageAtom } from './stores';

interface onClickPagingButtonProps {
  path: string;
  activePage: number;
}
export const usePagingButton = () => {
  const router = useRouter();
  const setActivePage = useSetAtom(reviewPageAtom);

  const onClickPagingButton = ({
    path,
    activePage,
  }: onClickPagingButtonProps) => {
    router.push(`/review/${path}`);
    setActivePage(activePage);
  };

  return { onClickPagingButton };
};
