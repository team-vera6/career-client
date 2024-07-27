'use client';

import Image from 'next/image';
import { useState } from 'react';

import EmptyTodoImage from '@/assets/images/todo-empty.png';
import DeleteIcon from '@/components/icons/DeleteIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import CheckboxInput from '@/components/inputs/checkbox/CheckboxInput';

const TodoList = () => {
  const [todos, setTodos] =
    useState<{ text: string; checked: boolean }[]>(dummy);

  return (
    <section className="w-full">
      <div className="flex items-center justify-between w-full">
        <p className="font-title-16 text-text-strong">이번 주 할 일</p>
        <button
          className="button-line button-small"
          onClick={() =>
            setTodos((prev) => [...prev, { text: '', checked: false }])
          }
        >
          <PlusIcon size={20} />
          <p className="font-body-13 text-text-strong">추가</p>
        </button>
      </div>

      {todos.length > 0 ? (
        <div className="flex flex-col gap-3 mt-4">
          {todos.map((todo, index) => (
            <CheckboxInput
              key={index}
              value={todo.text}
              checked={todo.checked}
              onChange={(value) =>
                setTodos((prev) => ({ ...prev, text: value }))
              }
              onClickCheckbox={() =>
                setTodos((prev) => ({ ...prev, checked: !todo.checked }))
              }
              buttons={
                <button
                  onClick={() =>
                    setTodos((prev) => prev.filter((items) => items !== todo))
                  }
                >
                  <DeleteIcon size={20} />
                </button>
              }
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center flex-col gap-5 mt-[3.75rem]">
          <p className="font-body-16 text-text-normal">작성한 할 일이 없어요</p>
          <Image src={EmptyTodoImage} width={100} height={100} alt="no memo" />
        </div>
      )}
    </section>
  );
};

export default TodoList;

const dummy: { text: string; checked: boolean }[] = [
  {
    text: '판매자 정산 플로우 누락케이스 기획 보완',
    checked: false,
  },
  {
    text: '백로그 정리하고 우선순위 재조정',
    checked: true,
  },
  {
    text: '월간 사용자 VOC 검토하고 개선점 도출',
    checked: false,
  },
];
