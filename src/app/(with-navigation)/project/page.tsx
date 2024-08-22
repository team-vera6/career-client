'use client';

import { useEffect, useState } from 'react';

import { getProject, getProjectList, Project } from '@/apis/projects/get';

import AddButton from './_components/add-button/AddButton';
import NoItem from './_components/project-item/NoItem';
import ProjectItem from './_components/project-item/ProjectItem';

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const { projects } = await getProjectList();
    setProjects(projects);

    const data = await getProject();
    console.log(data);
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
