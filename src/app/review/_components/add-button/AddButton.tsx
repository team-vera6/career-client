'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useMemo, useState } from 'react';

import PlusIcon from '@/components/icons/PlusIcon';
import useToast from '@/hooks/useToast';
import colors from '@/styles/colors';
import { getRandomNumber } from '@/utils/number';
import { cn } from '@/utils/tailwind';

import {
  currentTodoListAtom,
  highLightListAtom,
  lowLightListAtom,
  nextTodoListAtom,
} from '../../stores';
import { ReviewListItem, WeekType } from '../../types';

interface Props {
  category: 'currentTodo' | 'nextTodo' | 'highLight' | 'lowLight';
}

export const AddButton = ({ category }: Props) => {
  const { addToast } = useToast();

  const setCurrentTodoList = useSetAtom(currentTodoListAtom);
  const setNextTodoList = useSetAtom(nextTodoListAtom);

  const [highLightList, setHighLightList] = useAtom(highLightListAtom);
  const [lowLightList, setLowLightList] = useAtom(lowLightListAtom);

  const [isHovered, setIsHovered] = useState(false);

  const isTodo = category === 'currentTodo' || category === 'nextTodo';

  const onClickAddButton = (category: Props['category']) => {
    const weekInfo = category.slice(0, -4);

    switch (category) {
      case 'currentTodo':
        setCurrentTodoList((prev) => [
          ...prev,
          {
            id: -Math.abs(getRandomNumber()),
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
            id: -Math.abs(getRandomNumber()),
            week: weekInfo as WeekType,
            isChecked: false,
            todo: '',
          },
        ]);
        break;
      case 'highLight': {
        if (highLightList.length >= 3) {
          addToast({
            iconType: 'error',
            message: 'Beta 버전에서는 최대 3개까지 작성할 수 있어요.',
          });
        } else {
          const newList: ReviewListItem = {
            id: `highlight-${getRandomNumber()}`,
            content: '',
            project: {
              id: '',
              content: '',
              progressRate: 0,
            },
          };

          setHighLightList((prev) => [...prev, newList]);
        }
        break;
      }
      case 'lowLight': {
        if (lowLightList.length >= 3) {
          addToast({
            iconType: 'error',
            message: 'Beta 버전에서는 최대 3개까지 작성할 수 있어요.',
          });
        } else {
          const newList: ReviewListItem = {
            id: `lowlight-${getRandomNumber()}`,
            content: '',
            project: {
              id: '',
              content: '',
              progressRate: 0,
            },
          };

          setLowLightList((prev) => [...prev, newList]);
        }
        break;
      }
      default:
        break;
    }
  };

  const isDisabled = useMemo(() => {
    if (category === 'highLight') {
      return highLightList.length >= 3;
    } else if (category === 'lowLight') {
      return lowLightList.length >= 3;
    }
    return false;
  }, [category, highLightList.length, lowLightList.length]);

  return (
    <button
      className={cn(
        'button-small',
        isTodo
          ? 'button-text text-center'
          : 'button-line hover:bg-surface-blank hover:opacity-100',
        isHovered ? 'text-text-neutral' : 'text-text-strong',
        isDisabled && 'bg-surface-blank text-text-neutral',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClickAddButton(category)}
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
