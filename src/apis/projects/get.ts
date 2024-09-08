import { Highlight } from '@/types/highlight';
import { Project } from '@/types/project';

import { typedGet } from '..';

export interface ProjectDetail extends Project {
  id: number;
  progress: number;
  highlights: Highlight[];
  lowlights: Highlight[];
}

export interface ProjectListResponse {
  projects: Omit<ProjectDetail, 'content'>[];
}

export const getProjectList = async () => {
  const response = await typedGet<ProjectListResponse>('/projects');
  return response;
};

export const getProject = async (id: number) => {
  const response = await typedGet<ProjectDetail>(`/projects/${id}`);
  return response;
};

export type ProjectTitleListResponse = Array<
  Pick<ProjectDetail, 'id' | 'title'>
>;
export const getProjectTitleList = async () => {
  const response = await typedGet<ProjectTitleListResponse>('/projects/title');
  return response;
};
