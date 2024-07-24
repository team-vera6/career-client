'use client';

import { usePagingButton } from '@/app/review/utils';

export const PagingButton = () => {
  const { onClickPagingButton } = usePagingButton();

  return (
    <div className="flex justify-end">
      <div className="flex justify-between gap-2.5">
        <button
          type="button"
          className="button-secondary button-large"
          onClick={() => onClickPagingButton({ path: 'step2', activePage: 2 })}
        >
          이전
        </button>
        <button type="button" className="button-primary button-large">
          등록
        </button>
      </div>
    </div>
  );
};
