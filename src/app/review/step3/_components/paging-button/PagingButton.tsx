'use client';

import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

import { addHighlights, addLowlights } from '@/apis/review/post';
import {
  highLightListAtom,
  lowLightListAtom,
  pageButtonStatesAtom,
  reviewIdAtom,
} from '@/app/review/stores';
import { usePagingButton } from '@/app/review/utils';
import useToast from '@/hooks/useToast';

export const PagingButton = () => {
  const router = useRouter();

  const pageButtonStates = useAtomValue(pageButtonStatesAtom);

  const reviewId = useAtomValue(reviewIdAtom);

  const highlights = useAtomValue(highLightListAtom);
  const lowlights = useAtomValue(lowLightListAtom);

  if (!reviewId || !pageButtonStates.step1 || !pageButtonStates.step2) {
    router.push('/review/step1');
  }

  const { onClickPagingButton } = usePagingButton();
  const { addToast } = useToast();

  const onSubmit = async () => {
    const newHighlights = highlights.map((el) => ({
      content: el.content,
      projectId: el.id ? Number(el.id) : 0,
    }));
    const newLowlights = lowlights.map((el) => ({
      content: el.content,
      projectId: el.id ? Number(el.id) : 0,
    }));

    try {
      const responses = await Promise.all([
        // 하이라이트 / 로우라이트
        addHighlights({ reviewId: reviewId ?? 0, highlights: newHighlights }), // 하이라이트 추가
        addLowlights({ reviewId: reviewId ?? 0, lowlights: newLowlights }), // 로우라이트 추가
      ]);

      addToast({
        message: '이번주 회고가 성공적으로 등록됐어요.',
        iconType: 'success',
      });

      router.push('/dashboards');
      return responses;
    } catch (error) {
      console.log(error);
    }
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
          disabled={!pageButtonStates.step3}
          onClick={onSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
};
