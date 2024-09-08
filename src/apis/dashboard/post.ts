import { typedPost } from '@/apis';
import { CurrentWeek } from '@/types/currentWeek';

interface TodoRequest {
  weekNumber: CurrentWeek;
  contents: {
    content: string;
  }[];
}

export const addTodos = async ({ weekNumber, contents }: TodoRequest) => {
  const response = await typedPost('/todos', {
    weekNumber,
    contents,
  });
  return response;
};
