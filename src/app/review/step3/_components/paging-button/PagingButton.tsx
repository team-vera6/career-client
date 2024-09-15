'use client';

import { useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { deleteLowlights } from '@/apis/review/delete';
import { addLowlights } from '@/apis/review/post';
import { editLowlight } from '@/apis/review/put';
import {
  pageButtonStatesAtom,
  reviewIdAtom,
  reviewStepAtom,
} from '@/app/review/stores';
import { useReviewsApi } from '@/hooks/useReviewsApi';
import useToast from '@/hooks/useToast';

export const PagingButton = () => {
  const router = useRouter();

  const pageButtonStates = useAtomValue(pageButtonStatesAtom);
  const reviewId = useAtomValue(reviewIdAtom);
  const setReviewStep = useSetAtom(reviewStepAtom);

  const { postLowlights, putLowlights, deleteLowlightIds } = useReviewsApi();

  const { addToast } = useToast();

  const onSubmit = async () => {
    const newPostLowlights = postLowlights.map((el) => ({
      content: el.content,
      projectId: Number(el.project?.id) ?? null,
    }));

    const newPutLowlights = putLowlights.map((el) => ({
      id: el.id,
      content: el.content,
      projectId: Number(el.project?.id) ?? null,
    }));

    try {
      await Promise.all([
        // newPostLowlights가 있을 때만 addLowlights 호출
        ...(newPostLowlights.length > 0
          ? [
              addLowlights({
                reviewId,
                lowlights: newPostLowlights,
              }),
            ]
          : []),

        // newPutLowlights를 Promise.all로
        ...(newPutLowlights.length > 0
          ? [
              Promise.all(
                newPutLowlights.map((el) =>
                  editLowlight(el.id, {
                    content: el.content,
                    projectId: el.projectId,
                  }),
                ),
              ),
            ]
          : []),

        // deleteLowtlightIds를 Promise.all로
        ...(deleteLowlightIds.length > 0
          ? [Promise.all(deleteLowlightIds.map((el) => deleteLowlights(el)))]
          : []),
      ]);

      setReviewStep(3);

      addToast({
        message: '이번주 회고가 성공적으로 등록됐어요.',
        iconType: 'success',
      });

      router.push('/dashboards');
    } catch (error) {
      addToast({
        iconType: 'error',
        message: '다시 시도해 주세요.',
      });
    }
  };

  useEffect(() => {
    if (!reviewId || !pageButtonStates.step1 || !pageButtonStates.step2) {
      router.push('/review');
    }
  }, [reviewId, pageButtonStates, router]);

  return (
    <div className="flex justify-end">
      <div className="flex justify-between gap-2.5">
        <button
          type="button"
          className="button-secondary button-large"
          onClick={() => setReviewStep(2)}
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
