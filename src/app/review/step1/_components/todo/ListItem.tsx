'use client';

import { useEffect, useState } from 'react';

import { TodoListItem } from '@/app/review/types';
import CheckboxInput from '@/components/inputs/checkbox/CheckboxInput';

import { DeleteButton, MoveNextButton } from './Buttons';

export const ListItem = ({ isChecked, todo, week, id }: TodoListItem) => {
  const [text, setText] = useState(todo);
  const [isCheck, setIsCheck] = useState(isChecked);

  useEffect(() => {
    setText(todo);
    setIsCheck(isChecked);
  }, [todo, isChecked]);

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
        <MoveNextButton week={week} id={id} />
        <DeleteButton week={week} id={id} />
      </div>
    </div>
  );
};
