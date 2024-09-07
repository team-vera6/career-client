'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { addTodos } from '@/apis/dashboard/post';
import { changeTodos } from '@/apis/dashboard/put';
import { getTodos } from '@/apis/reports/get';
import { deleteTodo } from '@/apis/todos/delete';
import EmptyTodoImage from '@/assets/images/todo-empty.png';
import DeleteIcon from '@/components/icons/DeleteIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import CheckboxInput from '@/components/inputs/checkbox/CheckboxInput';
import { Todo } from '@/types/todo';
import { getCurrentWeek } from '@/utils/date';

const { year, month, week } = getCurrentWeek();

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [addNewTodo, setAddNewTodo] = useState(false);

  useEffect(() => {
    getCurrentWeekTodos();
  }, []);

  const getCurrentWeekTodos = async () => {
    const response = await getTodos({ year, month, week });
    setTodos(response.todos);
  };

  const onClickCheckbox = async (todoId: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          status: todo.status === 'DONE' ? 'ONGOING' : 'DONE',
        };
      }
      return todo;
    });

    try {
      await changeTodos(updatedTodos);
      await getCurrentWeekTodos();
    } catch (error) {
      console.error('fail to change checkbox', error);
    }
  };

  const saveNewTodo = async () => {
    try {
      addTodos({
        weekNumber: { year, month, week },
        contents: todos
          .filter((todo) => todo.id < 1)
          .map((todo) => ({ content: todo.content })),
      });
    } catch (error) {
      console.error('fail to add todos', error);
    }
  };

  const editTodo = async () => {
    try {
      await changeTodos(todos);
    } catch (error) {
      console.error('fail to edit todos', error);
    }
  };

  const deleteSelectedTodo = async (todoId: string) => {
    try {
      await deleteTodo([todoId]);
    } catch (error) {
      console.error('fail to delete todo', error);
    }
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between w-full">
        <p className="font-title-16 text-text-strong">이번 주 할 일</p>
        <button
          className="button-line button-small"
          onClick={() => {
            setAddNewTodo(true);
            setTodos((prev) => [
              ...prev,
              {
                id: Math.random() * 0.9,
                content: '',
                status: 'ONGOING',
              },
            ]);
          }}
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
              value={todo.content}
              checked={todo.status === 'DONE'}
              onChange={(value) =>
                setTodos((prev) =>
                  prev.map((item) =>
                    item.id === todo.id ? { ...item, content: value } : item,
                  ),
                )
              }
              onClickCheckbox={() => onClickCheckbox(todo.id)}
              buttons={
                <button
                  onClick={async () => {
                    await deleteSelectedTodo(String(todo.id));
                    setTodos((prev) => prev.filter((items) => items !== todo));
                  }}
                >
                  <DeleteIcon size={20} />
                </button>
              }
              onBlur={async () => {
                if (addNewTodo) {
                  await saveNewTodo();
                  setAddNewTodo(false);
                } else {
                  await editTodo();
                }
              }}
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
