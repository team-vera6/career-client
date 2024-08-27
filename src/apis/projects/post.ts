import { Project } from '@/types/project';

import { typedPost } from '..';

export const addProject = async (body: Project) => {
  const response = await typedPost('/project', body);
  return response;
};
