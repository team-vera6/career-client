'use client';

import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';

import { addHighlights, addLowlights } from '@/apis/review/post';
import { deleteTodo } from '@/apis/todos/delete';
import { addTodoList } from '@/apis/todos/post';
import { modifyTodoList } from '@/apis/todos/put';
import {
  highLightListAtom,
  lowLightListAtom,
  pageButtonStatesAtom,
  reviewIdAtom,
} from '@/app/review/stores';
import { usePagingButton } from '@/app/review/utils';
import useToast from '@/hooks/useToast';
import { useTodosApi } from '@/hooks/useTodosApi';
import { getCurrentWeek, getNextWeek } from '@/utils/date';

const { year, month, week } = getCurrentWeek();
const { nextYear, nextMonth, nextWeek } = getNextWeek();

const currentWeekInfo = {
  year,
  month,
  week,
};

const nextWeekInfo = {
  year: nextYear,
  month: nextMonth,
  week: nextWeek,
};

export const PagingButton = () => {
  const router = useRouter();

  const pageButtonStates = useAtomValue(pageButtonStatesAtom);

  const reviewId = useAtomValue(reviewIdAtom);
  // const score = useAtomValue(scoreAtom);

  const highlights = useAtomValue(highLightListAtom);
  const lowlights = useAtomValue(lowLightListAtom);

  if (!reviewId || !pageButtonStates.step1 || !pageButtonStates.step2) {
    router.push('/review/step1');
  }

  const { onClickPagingButton } = usePagingButton();
  const { addToast } = useToast();
  const {
    postCurrentTodos,
    postNextTodos,
    putCurrentTodos,
    putNextTodos,
    deleteCurrentTodos,
    deleteNextTodos,
  } = useTodosApi();

  const onSubmit = async () => {
    // const reviewInfo = {
    //   id: reviewId ?? 0,
    //   like: score,
    // };

    const newCurrentTodos = postCurrentTodos.map((el) => ({
      content: el.todo,
    }));
    const newNextTodos = postNextTodos.map((el) => ({ content: el.todo }));

    const newPutCurrentTodos = putCurrentTodos.map((el) => ({
      id: Number(el.id),
      content: el.todo,
      status: el.isChecked ? 'DONE' : 'ONGOING',
    }));
    const newPutNextTodos = putNextTodos.map((el) => ({
      id: Number(el.id),
      content: el.todo,
      status: el.isChecked ? 'DONE' : 'ONGOING',
    }));

    const newDeleteCurrentTodos = deleteCurrentTodos.map((el) => el.id);
    const newDeleteNextTodos = deleteNextTodos.map((el) => el.id);

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
        // 만족도
        // modifyScore(reviewInfo),
        // 할일
        addTodoList({ weekNumber: currentWeekInfo, contents: newCurrentTodos }), // 이번주할일 추가
        addTodoList({ weekNumber: nextWeekInfo, contents: newNextTodos }), // 다음주할일 추가
        modifyTodoList(newPutCurrentTodos), // 이번주할일 수정
        modifyTodoList(newPutNextTodos), // 다음주할일 삭제
        deleteTodo(newDeleteCurrentTodos), // 이번주할일 삭제
        deleteTodo(newDeleteNextTodos), // 다음주할일 삭제
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
