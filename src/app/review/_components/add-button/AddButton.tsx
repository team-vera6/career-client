'use client';

import { useSetAtom } from 'jotai';
import { useState } from 'react';

import PlusIcon from '@/components/icons/PlusIcon';
import colors from '@/styles/colors';
import { cn } from '@/utils/tailwind';

import { currentTodoListAtom, nextTodoListAtom } from '../../stores';
import { TodoListItem, WeekType } from '../../types';

interface Props {
  category: 'currentTodo' | 'nextTodo' | 'highLight' | 'lowLight';
}

export const AddButton = ({ category }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const setCurrentTodoList = useSetAtom(currentTodoListAtom);
  const setNextTodoList = useSetAtom(nextTodoListAtom);

  const isTodo = category === 'currentTodo' || category === 'nextTodo';

  const onClickAddButton = (category: Props['category']) => {
    const weekInfo = category.slice(0, -4);

    const newItemValues: TodoListItem = {
      week: weekInfo as WeekType,
      isChecked: false,
      todo: '',
    };

    if (category === 'currentTodo') {
      setCurrentTodoList((prev) => [...prev, newItemValues]);
    } else if (category === 'nextTodo') {
      setNextTodoList((prev) => [...prev, newItemValues]);
    }
    return;
  };

  return (
    <button
      className={cn(
        'button-small',
        isTodo
          ? 'button-text text-center'
          : 'button-line hover:bg-surface-blank hover:opacity-100',
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
            stroke={isHovered ? colors.text.neutral : colors.text.strong}
          />
        </div>
      )}
      <p className={cn(isHovered ? 'text-text-neutral' : 'text-text-strong')}>
        추가
      </p>
    </button>
  );
};
