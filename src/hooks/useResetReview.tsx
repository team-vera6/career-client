import { useSetAtom } from 'jotai';

import {
  currentTodoListAtom,
  disabledClickAttemptAtom,
  highLightListAtom,
  initialCurrentTodoListAtom,
  initialHighLightListAtom,
  initialLowLightListAtom,
  initialNextTodoListAtom,
  initialReviewItem,
  initialStepStatus,
  lastHighLightListAtom,
  lastLowLightListAtom,
  lowLightListAtom,
  memoListAtom,
  nextTodoListAtom,
  pageButtonStatesAtom,
  projectListAtom,
  reviewIdAtom,
  reviewStepAtom,
  scoreAtom,
} from './../app/review/stores';

export const useReviewReset = () => {
  const setScore = useSetAtom(scoreAtom);
  const setReviewIdAtom = useSetAtom(reviewIdAtom);
  const setReviewStepAtom = useSetAtom(reviewStepAtom);

  const setPageButtonStatesAtom = useSetAtom(pageButtonStatesAtom);
  const setDisabledClickAttemptAtom = useSetAtom(disabledClickAttemptAtom);

  const setInitialCurrentTodoListAtom = useSetAtom(initialCurrentTodoListAtom);
  const setInitialNextTodoListAtom = useSetAtom(initialNextTodoListAtom);
  const setCurrentTodoListAtom = useSetAtom(currentTodoListAtom);
  const setNextTodoListAtom = useSetAtom(nextTodoListAtom);

  const setInitialHighLightListAtom = useSetAtom(initialHighLightListAtom);
  const setInitialLowLightListAtom = useSetAtom(initialLowLightListAtom);
  const setHighLightListAtom = useSetAtom(highLightListAtom);
  const setLowLightListAtom = useSetAtom(lowLightListAtom);
  const setLastHighLightListAtom = useSetAtom(lastHighLightListAtom);
  const setLastLowLightListAtom = useSetAtom(lastLowLightListAtom);

  const setMemoListAtom = useSetAtom(memoListAtom);

  const setProjectListAtom = useSetAtom(projectListAtom);

  const resetReviewState = () => {
    setScore(0);
    setReviewIdAtom(0);
    setReviewStepAtom(1);

    setPageButtonStatesAtom(initialStepStatus);
    setDisabledClickAttemptAtom(initialStepStatus);

    setInitialCurrentTodoListAtom([]);
    setInitialNextTodoListAtom([]);
    setCurrentTodoListAtom([]);
    setNextTodoListAtom([]);

    setInitialHighLightListAtom([initialReviewItem]);
    setInitialLowLightListAtom([initialReviewItem]);
    setHighLightListAtom([initialReviewItem]);
    setLowLightListAtom([initialReviewItem]);
    setLastHighLightListAtom([]);
    setLastLowLightListAtom([]);

    setMemoListAtom([]);
    setProjectListAtom([]);
  };

  return resetReviewState;
};
