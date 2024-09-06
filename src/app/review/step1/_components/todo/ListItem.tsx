'use client';

import { TodoListItem } from '@/app/review/types';
import CheckboxInput from '@/components/inputs/checkbox/CheckboxInput';

import { DeleteButton, MoveNextButton } from './Buttons';

interface ListItemProps extends TodoListItem {
  setIsChecked: () => void;
  setTodo: (value: string) => void;
}

export const ListItem = ({
  isChecked,
  setIsChecked,
  todo,
  setTodo,
  week,
  id,
  isMoved = false,
}: ListItemProps) => {
  return (
    <div className="h-12 flex items-center">
      <CheckboxInput
        value={todo}
        onChange={setTodo}
        checked={isChecked}
        onClickCheckbox={setIsChecked}
        category="review"
      />
      <div className="flex items-center gap-2">
        <MoveNextButton week={week} id={id} isMoved={isMoved} />
        <DeleteButton week={week} id={id} />
      </div>
    </div>
  );
};
