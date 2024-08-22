import { CurrentWeek } from '@/types/currentWeek';

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
  startDate: [number, number, number];
  endDate: [number, number, number];
  progress: number;
  highlights: {
    id: number;
    content: string;
    weekNumber: CurrentWeek;
  }[];
  lowlights: {
    id: number;
    content: string;
    weekNumber: CurrentWeek;
  }[];
}
