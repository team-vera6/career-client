import { Project } from '@/types/project';

import { typedPut } from '..';

export const editProject = async (id: number, body: Project) => {
  const response = await typedPut(`/projects/${id}`, body);
  return response;
};
