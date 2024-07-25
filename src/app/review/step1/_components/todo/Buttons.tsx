'use client';

import { useAtom, useSetAtom } from 'jotai';

import { currentTodoListAtom, nextTodoListAtom } from '@/app/review/stores';
import { WeekType } from '@/app/review/types';
import DeleteIcon from '@/components/icons/DeleteIcon';

interface Props {
  week: WeekType;
  id: string;
}

export const MoveNextButton = ({ week, id }: Props) => {
  const [currentTodoList, setCurrentTodoList] = useAtom(currentTodoListAtom);
  const [nextTodoList, setNextTodoList] = useAtom(nextTodoListAtom);

  const onClickMove = () => {
    if (week === 'current') {
      const moveValues = currentTodoList.filter((el) => el.id === id)[0];
      moveValues['week'] = 'next';
      moveValues['isChecked'] = false;

      setCurrentTodoList((prev) => prev.filter((el) => el.id !== id));
      setNextTodoList((prev) => [...prev, moveValues]);
    } else {
      const moveValues = nextTodoList.filter((el) => el.id === id)[0];
      moveValues['week'] = 'current';
      moveValues['isChecked'] = false;

      setNextTodoList((prev) => prev.filter((el) => el.id !== id));
      setCurrentTodoList((prev) => [...prev, moveValues]);
    }
  };

  return (
    <button
      type="button"
      className="button-line button-small whitespace-nowrap"
      onClick={() => onClickMove()}
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
