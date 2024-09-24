'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { deleteHighlights } from '@/apis/review/delete';
import { addHighlights } from '@/apis/review/post';
import { editHighlight } from '@/apis/review/put';
import {
  disabledClickAttemptAtom,
  pageButtonStatesAtom,
  reviewIdAtom,
  reviewStepAtom,
} from '@/app/review/stores';
import { useReviewsApi } from '@/hooks/useReviewsApi';
import useToast from '@/hooks/useToast';
import { cn } from '@/utils/tailwind';

export const PagingButton = () => {
  const router = useRouter();

  const pageButtonStates = useAtomValue(pageButtonStatesAtom);
  const reviewId = useAtomValue(reviewIdAtom);
  const setReviewStep = useSetAtom(reviewStepAtom);
  const setDisabledClickAttempt = useSetAtom(disabledClickAttemptAtom);

  const { addToast } = useToast();

  const { postHighlights, putHighlights, deleteHightlightIds } =
    useReviewsApi();

  const onSubmit = async () => {
    if (!pageButtonStates['step2']) {
      setDisabledClickAttempt((prev) => ({
        ...prev,
        step2: true,
      }));

      return;
    }
    const newPostHighlights = postHighlights.map((el) => ({
      content: el.content,
      projectId: Number(el.project?.id) !== 0 ? Number(el.project?.id) : null,
    }));

    const newPutHighlights = putHighlights.map((el) => ({
      id: el.id,
      content: el.content,
      projectId: Number(el.project?.id) !== 0 ? Number(el.project?.id) : null,
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

      setReviewStep(3);
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
          onClick={() => setReviewStep(1)}
        >
          이전
        </button>
        <button
          type="button"
          className={cn(
            'button-primary button-large',
            !pageButtonStates['step2'] &&
              'bg-button-disabled text-text-neutral hover:bg-button-disabled',
          )}
          onClick={onSubmit}
        >
          다음
        </button>
      </div>
    </div>
  );
};
