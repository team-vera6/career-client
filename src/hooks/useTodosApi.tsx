import { useAtomValue } from 'jotai';

import {
  currentTodoListAtom,
  initialCurrentTodoListAtom,
  initialNextTodoListAtom,
  nextTodoListAtom,
} from '@/app/review/stores';
import { TodoListItem } from '@/app/review/types';

export const useTodosApi = () => {
  const initialCurrentList = useAtomValue(initialCurrentTodoListAtom);
  const initialNextList = useAtomValue(initialNextTodoListAtom);

  const newCurrentList = useAtomValue(currentTodoListAtom);
  const newNextList = useAtomValue(nextTodoListAtom);

  const getIdsList = (list: TodoListItem[]) => {
    return list.map((el) => el.id);
  };

  // 비교 배열엔 없으나 새로운 배열에서 생긴 id
  const getNewIds = (list1: number[], list2: number[]) => {
    const differentIdList = list1.filter((id) => !list2.includes(id));

    return differentIdList;
  };

  // 초기 배열, 새로운 배열에서 동일한 id
  const getPutIds = (list1: number[], list2: number[]) => {
    const commonIdList = list1.filter((id) => list2.includes(id));

    return commonIdList;
  };

  const initialIdList = [
    ...getIdsList(initialCurrentList),
    ...getIdsList(initialNextList),
  ];
  const newIdList = [...getIdsList(newCurrentList), ...getIdsList(newNextList)];

  // POST 초기 배열엔 없으나 새로운 배열에 생긴 id
  const postIdList = getNewIds(newIdList, initialIdList);

  // PUT 초기 배열과 새로운 배열에 동일하게 있는 id
  const putIdList = getPutIds(initialIdList, newIdList);

  // DELETE 초기 배열엔 있으나 새로운 배열에는 없는 id
  const deleteIdList = getNewIds(initialIdList, newIdList);

  const postCurrentTodos = newCurrentList.filter((el) =>
    postIdList.includes(el.id),
  );
  const postNextTodos = newNextList.filter((el) => postIdList.includes(el.id));

  const putCurrentTodos = newCurrentList.filter((el) =>
    putIdList.includes(el.id),
  );
  const putNextTodos = newNextList.filter((el) => putIdList.includes(el.id));

  const deleteCurrentTodos = initialCurrentList.filter((el) =>
    deleteIdList.includes(el.id),
  );
  const deleteNextTodos = initialNextList.filter((el) =>
    deleteIdList.includes(el.id),
  );

  return {
    postCurrentTodos,
    postNextTodos,
    putCurrentTodos,
    putNextTodos,
    deleteCurrentTodos,
    deleteNextTodos,
  };
};
