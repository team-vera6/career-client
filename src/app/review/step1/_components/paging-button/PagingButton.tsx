'use client';

import { useAtomValue } from 'jotai';

import { pageButtonStatesAtom } from '@/app/review/stores';
import { usePagingButton } from '@/app/review/utils';

export const PagingButton = () => {
  const pageButtonStates = useAtomValue(pageButtonStatesAtom);

  const { onClickPagingButton } = usePagingButton();

  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="button-primary button-large"
        onClick={() => onClickPagingButton({ path: 'step2', activePage: 2 })}
        disabled={!pageButtonStates['step1']}
      >
        다음
      </button>
    </div>
  );
};
