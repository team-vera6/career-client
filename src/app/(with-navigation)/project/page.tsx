'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getProjectList, ProjectListResponse } from '@/apis/projects/get';

import AddButton from './_components/add-button/AddButton';
import NoItem from './_components/project-item/NoItem';
import ProjectItem from './_components/project-item/ProjectItem';

export default function ProjectPage() {
  const searchParams = useSearchParams();
  const initialProjectId = searchParams.get('project');

  const [projects, setProjects] = useState<ProjectListResponse['projects']>([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const { projects } = await getProjectList();
    setProjects(projects);
  };

  return (
    <div className="w-[60rem]">
      <AddButton fetchProjects={getProjects} />

      <div className="w-full flex flex-col gap-3">
        {projects.length > 0 ? (
          <>
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                progress={project.progress}
                onClose={getProjects}
                initialOpen={project.id === Number(initialProjectId)}
              />
            ))}
          </>
        ) : (
          <NoItem />
        )}
      </div>
    </div>
  );
}
