import { Project } from '@/types/project';

import { typedPost } from '..';

export const addProject = async (body: Project) => {
  const response = await typedPost('/projects', body);
  return response;
};
