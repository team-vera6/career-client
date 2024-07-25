'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import PlusIcon from '@/components/icons/PlusIcon';
import colors from '@/styles/colors';
import { cn } from '@/utils/tailwind';

import {
  currentTodoListAtom,
  highLightListAtom,
  lowLightListAtom,
  nextTodoListAtom,
} from '../../stores';
import { WeekType } from '../../types';

interface Props {
  category: 'currentTodo' | 'nextTodo' | 'highLight' | 'lowLight';
}

export const AddButton = ({ category }: Props) => {
  const setCurrentTodoList = useSetAtom(currentTodoListAtom);
  const setNextTodoList = useSetAtom(nextTodoListAtom);

  const [highLightList, setHighLightList] = useAtom(highLightListAtom);
  const [lowLightList, setLowLightList] = useAtom(lowLightListAtom);

  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const isTodo = category === 'currentTodo' || category === 'nextTodo';

  const onClickAddButton = (category: Props['category']) => {
    const weekInfo = category.slice(0, -4);

    switch (category) {
      case 'currentTodo':
        setCurrentTodoList((prev) => [
          ...prev,
          {
            id: `current-${prev.length + 1}`,
            week: weekInfo as WeekType,
            isChecked: false,
            todo: '',
          },
        ]);
        break;
      case 'nextTodo':
        setNextTodoList((prev) => [
          ...prev,
          {
            id: `next-${prev.length + 1}`,
            week: weekInfo as WeekType,
            isChecked: false,
            todo: '',
          },
        ]);
        break;
      case 'highLight':
        setHighLightList((prev) => [
          ...prev,
          {
            id: `highLight-${prev.length + 1}`,
            text: '',
            project: '',
          },
        ]);
        break;
      case 'lowLight':
        setLowLightList((prev) => [
          ...prev,
          {
            id: `lowLight-${prev.length + 1}`,
            text: '',
            project: '',
          },
        ]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    category === 'highLight' &&
      highLightList.length >= 3 &&
      setIsDisabled(true);
    category === 'lowLight' && lowLightList.length >= 3 && setIsDisabled(true);
  }, [category, highLightList, lowLightList]);

  return (
    <button
      className={cn(
        'button-small',
        isTodo
          ? 'button-text text-center'
          : 'button-line hover:bg-surface-blank hover:opacity-100',
        isHovered ? 'text-text-neutral' : 'text-text-strong',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClickAddButton(category)}
      disabled={isDisabled}
    >
      {isTodo ? (
        <PlusIcon size={20} stroke={colors.text.normal} />
      ) : (
        <div className="h-5 w-5 flex items-center justify-center">
          <PlusIcon
            size={15}
            stroke={
              isHovered || isDisabled ? colors.text.neutral : colors.text.strong
            }
          />
        </div>
      )}
      추가
    </button>
  );
};
