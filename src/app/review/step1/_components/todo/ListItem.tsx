'use client';

import { useState } from 'react';

import CheckboxInput from '@/components/inputs/checkbox/CheckboxInput';

import { DeleteButton, MoveNextButton } from './Buttons';

export const ListItem = ({ week }: { week: 'current' | 'next' }) => {
  const [todo, setTodo] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  return (
    <div className="h-12 flex items-center">
      <CheckboxInput
        value={todo}
        onChange={(e) => setTodo(e)}
        checked={isCheck}
        onClickCheckbox={() => setIsCheck((prev) => !prev)}
        category="review"
      />
      <div className="flex items-center gap-2">
        <MoveNextButton week={week} />
        <DeleteButton />
      </div>
    </div>
  );
};
