'use client';

import { useState } from 'react';

import { TodoListItem } from '@/app/review/types';
import CheckboxInput from '@/components/inputs/checkbox/CheckboxInput';

import { DeleteButton, MoveNextButton } from './Buttons';

interface Props extends TodoListItem {
  index: number;
}

export const ListItem = ({ isChecked, todo, week, index }: Props) => {
  const [text, setText] = useState(todo);
  const [isCheck, setIsCheck] = useState(isChecked);

  return (
    <div className="h-12 flex items-center">
      <CheckboxInput
        value={text}
        onChange={(val) => setText(val)}
        checked={isCheck}
        onClickCheckbox={() => setIsCheck((prev) => !prev)}
        category="review"
      />
      <div className="flex items-center gap-2">
        <MoveNextButton week={week} index={index} />
        <DeleteButton week={week} index={index} />
      </div>
    </div>
  );
};
