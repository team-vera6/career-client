'use client';

import { useSetAtom } from 'jotai';

import { currentTodoListAtom, nextTodoListAtom } from '@/app/review/stores';
import { WeekType } from '@/app/review/types';
import DeleteIcon from '@/components/icons/DeleteIcon';

interface Props {
  week: WeekType;
  index: number;
}

export const MoveNextButton = ({ week, index }: Props) => {
  return (
    <button
      type="button"
      className="button-line button-small whitespace-nowrap"
    >
      {week === 'current' ? '다음주로 이동' : '되돌리기'}
    </button>
  );
};

export const DeleteButton = ({ week, index }: Props) => {
  const setCurrentTodoList = useSetAtom(currentTodoListAtom);
  const setNextTodoList = useSetAtom(nextTodoListAtom);

  const onClickDelete = () => {
    if (week === 'current') {
      setCurrentTodoList((prev) => prev.filter((_, i) => i !== index));
    } else {
      setNextTodoList((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <button type="button" onClick={onClickDelete}>
      <DeleteIcon size={20} />
    </button>
  );
};
