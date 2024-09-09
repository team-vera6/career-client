'use client';

import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

import { pageButtonStatesAtom, reviewIdAtom } from '@/app/review/stores';
import { usePagingButton } from '@/app/review/utils';

export const PagingButton = () => {
  const router = useRouter();

  const { onClickPagingButton } = usePagingButton();

  const pageButtonStates = useAtomValue(pageButtonStatesAtom);
  const reviewId = useAtomValue(reviewIdAtom);

  if (!reviewId || !pageButtonStates.step1) {
    router.push('/review/step1');
  }

  return (
    <div className="flex justify-end">
      <div className="flex justify-between gap-2.5">
        <button
          type="button"
          className="button-secondary button-large"
          onClick={() => onClickPagingButton({ path: 'step1', activePage: 1 })}
        >
          이전
        </button>
        <button
          type="button"
          className="button-primary button-large"
          onClick={() => onClickPagingButton({ path: 'step3', activePage: 3 })}
          // disabled={!pageButtonStates.step1 && !pageButtonStates.step2} FIXME: 데모데이 끝나고 주석 풀기
          disabled={!pageButtonStates.step2}
        >
          다음
        </button>
      </div>
    </div>
  );
};
