'use client';

import { useSetAtom } from 'jotai';

import { currentTodoListAtom, nextTodoListAtom } from '@/app/review/stores';
import { WeekType } from '@/app/review/types';
import DeleteIcon from '@/components/icons/DeleteIcon';

interface Props {
  week: WeekType;
  id: string;
}

export const MoveNextButton = ({ week, id }: Props) => {
  return (
    <button
      type="button"
      className="button-line button-small whitespace-nowrap"
    >
      {week === 'current' ? '다음주로 이동' : '되돌리기'}
    </button>
  );
};
export const DeleteButton = ({ week, id }: Props) => {
  const setCurrentTodoList = useSetAtom(currentTodoListAtom);
  const setNextTodoList = useSetAtom(nextTodoListAtom);

  const onClickDelete = () => {
    if (week === 'current') {
      setCurrentTodoList((prev) => prev.filter((el) => el.id !== id));
    } else {
      setNextTodoList((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <button type="button" onClick={onClickDelete}>
      <DeleteIcon size={20} />
    </button>
  );
};
