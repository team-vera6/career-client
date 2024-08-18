'use client';

import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

import { pageButtonStatesAtom } from '@/app/review/stores';
import { usePagingButton } from '@/app/review/utils';
import useToast from '@/hooks/useToast';

export const PagingButton = () => {
  const router = useRouter();

  const pageButtonStates = useAtomValue(pageButtonStatesAtom);

  const { onClickPagingButton } = usePagingButton();
  const { addToast } = useToast();

  const onSubmit = () => {
    addToast({
      message: '이번주 회고가 성공적으로 등록됐어요.',
      iconType: 'success',
    });
    router.push('/dashboard-page');
  };

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
        <button
          type="button"
          className="button-primary button-large"
          // disabled={
          //   !pageButtonStates.step1 &&
          //   !pageButtonStates.step2 &&
          //   !pageButtonStates.step3
          // } FIXME: 데모데이 끝나고 주석 풀기
          disabled={!pageButtonStates.step3}
          onClick={onSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
};
