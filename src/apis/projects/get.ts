import { typedGet } from '..';

export const getProjectList = async () => {
  const response = await typedGet<ProjectList>('/projects');
  return response;
};

export const getProject = async ({ id }: { id: number | string }) => {
  const response = await typedGet<Project>(`/projects/${id}`);
  return response;
};

interface ProjectList {
  projects: Project[];
}

export interface Project {
  id: number;
  title: string;
  goal: string;
  startDate: [number, number, number];
  endDate: [number, number, number];
  progress: number;
  // highlights: {
  //   id: number;
  //   content: string;
  //   month: number;
  //   week: number;
  // }[];
  // lowlights: {
  //   id: number;
  //   content: string;
  //   month: number;
  //   week: number;
  // }[];
}
