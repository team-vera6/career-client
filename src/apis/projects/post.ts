import { typedPost } from '..';

export const addProject = async (body: AddProjectRequest) => {
  const response = await typedPost('/project', body);
  return response;
};

interface AddProjectRequest {
  title: string;
  startDate: string;
  endDate: string;
  goal: string;
}
