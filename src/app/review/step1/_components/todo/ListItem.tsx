import { TodoListItem } from '@/app/review/types';
import CheckboxInput from '@/components/inputs/checkbox/CheckboxInput';

import { DeleteButton, MoveNextButton } from './Buttons';
import { NextTodoInput } from './NextTodoInput';

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
      {week === 'current' ? (
        <CheckboxInput
          id={id}
          value={todo}
          onChange={setTodo}
          checked={isChecked}
          onClickCheckbox={setIsChecked}
          category="review"
          placeholder="할 일을 입력해 주세요"
        />
      ) : (
        <NextTodoInput value={todo} onChange={setTodo} />
      )}
      <div className="flex items-center gap-2">
        <MoveNextButton week={week} id={id} isMoved={isMoved} />
        <DeleteButton week={week} id={id} />
      </div>
    </div>
  );
};
