import { Highlight } from '@/types/highlight';
import { Project } from '@/types/project';

import { typedGet } from '..';

export interface ProjectList {
  projects: Omit<ProjectResponse, 'content'>[];
}

export const getProjectList = async () => {
  const response = await typedGet<ProjectList>('/projects');
  return response;
};

export interface ProjectResponse extends Project {
  id: number;
  progress: number;
  highlights: Highlight[];
  lowlights: Highlight[];
}

export const getProject = async (id: number) => {
  const response = await typedGet<ProjectResponse>(`/projects/${id}`);
  return response;
};

export type ProjectTitleListResponse = Array<
  Pick<ProjectResponse, 'id' | 'title'>
>;
export const getProjectTitleList = async () => {
  const response = await typedGet<ProjectTitleListResponse>('/projects/title');
  return response;
};
