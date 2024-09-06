'use client';

import { useAtom } from 'jotai';
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
  const [currentTodoList, setCurrentTodoList] = useAtom(currentTodoListAtom);
  const [nextTodoList, setNextTodoList] = useAtom(nextTodoListAtom);

  const [highLightList, setHighLightList] = useAtom(highLightListAtom);
  const [lowLightList, setLowLightList] = useAtom(lowLightListAtom);

  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [listLengths, setListLengths] = useState({
    current: currentTodoList.length,
    next: nextTodoList.length,
    highlight: highLightList.length,
    lowlight: lowLightList.length,
  });

  const isTodo = category === 'currentTodo' || category === 'nextTodo';

  const onClickAddButton = (category: Props['category']) => {
    const weekInfo = category.slice(0, -4);

    switch (category) {
      case 'currentTodo':
        setCurrentTodoList((prev) => [
          ...prev,
          {
            id: `current-${listLengths.current + 1}`,
            week: weekInfo as WeekType,
            isChecked: false,
            todo: '',
          },
        ]);
        setListLengths((prev) => ({ ...prev, current: prev.current + 1 }));
        break;
      case 'nextTodo':
        setNextTodoList((prev) => [
          ...prev,
          {
            id: `next-${listLengths.next + 1}`,
            week: weekInfo as WeekType,
            isChecked: false,
            todo: '',
          },
        ]);
        setListLengths((prev) => ({ ...prev, next: prev.next + 1 }));
        break;
      case 'highLight':
        setHighLightList((prev) => [
          ...prev,
          {
            id: `highLight-${listLengths.highlight + 1}`,
            text: '',
            project: '',
          },
        ]);
        setListLengths((prev) => ({ ...prev, highlight: prev.highlight + 1 }));
        break;
      case 'lowLight':
        setLowLightList((prev) => [
          ...prev,
          {
            id: `lowLight-${listLengths.lowlight + 1}`,
            text: '',
            project: '',
          },
        ]);
        setListLengths((prev) => ({ ...prev, highlight: prev.lowlight + 1 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    category === 'highLight' &&
      listLengths.highlight >= 3 &&
      setIsDisabled(true);
    category === 'lowLight' && listLengths.lowlight >= 3 && setIsDisabled(true);
  }, [
    category,
    highLightList,
    listLengths.highlight,
    listLengths.lowlight,
    lowLightList,
  ]);

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
