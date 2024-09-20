import { CurrentWeek } from '@/types/currentWeek';
import { Todo } from '@/types/todo';

import { typedPost } from '..';

export interface TodoRequest {
  weekNumber: CurrentWeek;
  content: number;
}

export const addTodo = async (body: TodoRequest) => {
  const response = await typedPost('/todos', body);
  return response;
};

export interface TodoListRequest {
  weekNumber: CurrentWeek;
  contents: { content: string }[];
}

export interface TodoListResponse {
  todos: Todo[];
}

export const addTodoList = async (body: TodoListRequest) => {
  const response = await typedPost<TodoListResponse>('/todos', body);
  return response;
};
