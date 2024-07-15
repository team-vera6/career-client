'use client';

import Image from 'next/image';
import { useState } from 'react';

import EmptyTodoImage from '@/assets/images/todo-empty.png';
import PlusIcon from '@/components/icons/PlusIcon';

const TodoListComponents = () => {
  const [todo, setTodo] = useState({
    text: '',
    checked: false,
  });
  const [todo2, setTodo2] = useState({
    text: '',
    checked: false,
  });
  const [todo3, setTodo3] = useState({
    text: '',
    checked: false,
  });
  const [todo4, setTodo4] = useState({
    text: '',
    checked: false,
  });

  return (
    <section className="w-full">
      <div className="flex items-center justify-between w-full">
        <p className="font-title-16 text-text-strong">이번 주 할 일</p>
        <button className="button-line button-small">
          <PlusIcon size={20} />
          <p className="font-body-13 text-text-strong">추가</p>
        </button>
      </div>

      {/* <div className="flex flex-col gap-3 mt-4">
              <CheckboxInput
                value={todo.text}
                checked={todo.checked}
                onChange={(value) => setTodo((prev) => ({ ...prev, text: value }))}
                onClickCheckbox={() => setTodo((prev) => ({ ...prev, checked: !prev.checked }))}
                showButtonsOnHover
                buttons={
                  <button>
                    <DeleteIcon size={20} />
                  </button>
                }
              />
              <CheckboxInput
                value={todo2.text}
                checked={todo2.checked}
                onChange={(value) => setTodo2((prev) => ({ ...prev, text: value }))}
                onClickCheckbox={() => setTodo2((prev) => ({ ...prev, checked: !prev.checked }))}
                showButtonsOnHover
                buttons={
                  <button>
                    <DeleteIcon size={20} />
                  </button>
                }
              />
              <CheckboxInput
                value={todo3.text}
                checked={todo3.checked}
                onChange={(value) => setTodo3((prev) => ({ ...prev, text: value }))}
                onClickCheckbox={() => setTodo3((prev) => ({ ...prev, checked: !prev.checked }))}
                showButtonsOnHover
                buttons={
                  <button>
                    <DeleteIcon size={20} />
                  </button>
                }
              />
              <CheckboxInput
                value={todo4.text}
                checked={todo4.checked}
                onChange={(value) => setTodo4((prev) => ({ ...prev, text: value }))}
                onClickCheckbox={() => setTodo4((prev) => ({ ...prev, checked: !prev.checked }))}
                showButtonsOnHover
                disabled
                buttons={
                  <button>
                    <DeleteIcon size={20} />
                  </button>
                }
              />
            </div> */}

      <div className="w-full flex items-center flex-col gap-5 mt-[3.75rem]">
        <p className="font-body-16 text-text-normal">작성한 할 일이 없어요</p>
        <Image src={EmptyTodoImage} width={100} height={100} alt="no memo" />
      </div>
    </section>
  );
};

export default TodoListComponents;
