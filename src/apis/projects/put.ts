import { typedPut } from '..';

export const editProject = async (id: number, body: EditProjectResponse) => {
  const response = await typedPut(`/projects/${id}`, body);
  return response;
};

interface EditProjectResponse {
  title: string;
  startDate: string;
  endDate: string;
  goal: string;
  content: string;
}
