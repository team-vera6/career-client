'use client';

import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';

import { modifyScore } from '@/apis/review/patch';
import { deleteTodo } from '@/apis/todos/delete';
import { addTodoList } from '@/apis/todos/post';
import { modifyTodoList } from '@/apis/todos/put';
import {
  pageButtonStatesAtom,
  reviewIdAtom,
  scoreAtom,
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
  const reviewId = useAtomValue(reviewIdAtom);
  const score = useAtomValue(scoreAtom);
  const [pageButtonStates, setPageButtonStates] = useAtom(pageButtonStatesAtom);

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
    const reviewInfo = {
      id: reviewId ?? 0,
      like: score,
    };

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

    try {
      const responses = await Promise.all([
        // 만족도
        modifyScore(reviewInfo),
        // 할일
        addTodoList({ weekNumber: currentWeekInfo, contents: newCurrentTodos }), // 이번주할일 추가
        addTodoList({ weekNumber: nextWeekInfo, contents: newNextTodos }), // 다음주할일 추가
        modifyTodoList(newPutCurrentTodos), // 이번주할일 수정
        modifyTodoList(newPutNextTodos), // 다음주할일 삭제
        deleteTodo(newDeleteCurrentTodos), // 이번주할일 삭제
        deleteTodo(newDeleteNextTodos), // 다음주할일 삭제
      ]);
      addToast({
        iconType: 'success',
        message: '임시저장 되었습니다.',
      });
      onClickPagingButton({ path: 'step2', activePage: 2 });
      return responses;
    } catch (error) {
      addToast({
        iconType: 'error',
        message: '다시 시도해 주세요.',
      });
    }
  };

  useEffect(() => {
    if (reviewId) {
      setPageButtonStates((prev) => ({
        ...prev,
        step1: true,
      }));
    }
  }, [reviewId, setPageButtonStates]);

  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="button-primary button-large"
        onClick={onSubmit}
        disabled={!pageButtonStates['step1']}
      >
        다음
      </button>
    </div>
  );
};
