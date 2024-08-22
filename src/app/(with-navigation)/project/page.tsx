'use client';

import { useEffect, useState } from 'react';

import { getProjectList, ProjectList } from '@/apis/projects/get';

import AddButton from './_components/add-button/AddButton';
import NoItem from './_components/project-item/NoItem';
import ProjectItem from './_components/project-item/ProjectItem';

export default function ProjectPage() {
  const [projects, setProjects] = useState<ProjectList['projects']>([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const { projects } = await getProjectList();
    setProjects(projects);

    console.log(projects);
  };

  return (
    <div className="w-[60rem]">
      <AddButton />

      <div className="w-full flex flex-col gap-3">
        {projects.length > 0 ? (
          <>
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                progress={project.progress}
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
