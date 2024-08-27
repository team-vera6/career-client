import { Highlight } from '@/types/highlight';

import { typedGet } from '..';

export const getProjectList = async () => {
  const response = await typedGet<ProjectList>('/projects');
  return response;
};

export const getProject = async ({ id }: { id: number | string }) => {
  const response = await typedGet<Project>(`/projects/${id}`);
  return response;
};

export interface ProjectList {
  projects: Omit<Project, 'content'>[];
}

export interface Project {
  id: number;
  title: string;
  goal: string;
  content: string;
  startDate: string;
  endDate: string;
  progress: number;
  highlights: Highlight[];
  lowlights: Highlight[];
}
