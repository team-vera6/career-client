'use client';

import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { deleteHighlights } from '@/apis/review/delete';
import { addHighlights } from '@/apis/review/post';
import { editHighlight } from '@/apis/review/put';
import { pageButtonStatesAtom, reviewIdAtom } from '@/app/review/stores';
import { usePagingButton } from '@/app/review/utils';
import { useReviewsApi } from '@/hooks/useReviewsApi';
import useToast from '@/hooks/useToast';

export const PagingButton = () => {
  const router = useRouter();

  const pageButtonStates = useAtomValue(pageButtonStatesAtom);
  const reviewId = useAtomValue(reviewIdAtom);

  const { onClickPagingButton } = usePagingButton();
  const { addToast } = useToast();

  const { postHighlights, putHighlights, deleteHightlightIds } =
    useReviewsApi();

  const onSubmit = async () => {
    const newPostHighlights = postHighlights.map((el) => ({
      content: el.content,
      projectId: Number(el.project?.id) ?? null,
    }));

    const newPutHighlights = putHighlights.map((el) => ({
      id: el.id,
      content: el.content,
      projectId: Number(el.project?.id) ?? null,
    }));

    try {
      await Promise.all([
        // newPostHighlights가 있을 때만 addHighlights 호출
        ...(newPostHighlights.length > 0
          ? [
              addHighlights({
                reviewId,
                highlights: newPostHighlights,
              }),
            ]
          : []),

        // newPutHighlights를 Promise.all로
        ...(newPutHighlights.length > 0
          ? [
              Promise.all(
                newPutHighlights.map((el) =>
                  editHighlight(el.id, {
                    content: el.content,
                    projectId: el.projectId,
                  }),
                ),
              ),
            ]
          : []),

        // deleteHightlightIds를 Promise.all로
        ...(deleteHightlightIds.length > 0
          ? [Promise.all(deleteHightlightIds.map((el) => deleteHighlights(el)))]
          : []),
      ]);

      addToast({
        message: '임시저장 되었습니다.',
        iconType: 'success',
      });

      onClickPagingButton({ direction: 'next', activePage: 3 });
    } catch (error) {
      addToast({
        iconType: 'error',
        message: '다시 시도해 주세요.',
      });
    }
  };

  useEffect(() => {
    if (!reviewId || !pageButtonStates.step1) {
      router.push('/review');
    }
  }, [reviewId, pageButtonStates, router]);

  return (
    <div className="flex justify-end">
      <div className="flex justify-between gap-2.5">
        <button
          type="button"
          className="button-secondary button-large"
          onClick={() =>
            onClickPagingButton({ direction: 'prev', activePage: 1 })
          }
        >
          이전
        </button>
        <button
          type="button"
          className="button-primary button-large"
          onClick={onSubmit}
          disabled={!pageButtonStates.step2}
        >
          다음
        </button>
      </div>
    </div>
  );
};
