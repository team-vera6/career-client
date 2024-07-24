'use client';

import { usePagingButton } from '@/app/review/utils';

export const PagingButton = () => {
  const { onClickPagingButton } = usePagingButton();

  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="button-primary button-large"
        onClick={() => onClickPagingButton({ path: 'step2', activePage: 2 })}
      >
        다음
      </button>
    </div>
  );
};
