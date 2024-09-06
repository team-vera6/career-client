import { typedDelete } from '..';

export const deleteProject = async (id: number) => {
  const response = await typedDelete(`/projects/${id}`);
  return response;
};
