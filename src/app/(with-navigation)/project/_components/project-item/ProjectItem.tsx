'use client';

import { useState } from 'react';

import ProjectDetailSheet from '@/components/action-sheets/project-detail/ProjectDetailSheet';
import ProgressChip from '@/components/progress-chip/ProgressChip';

interface Props {
  project: string;
  progress: number;
}

const ProjectItem = ({ project, progress }: Props) => {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <>
      <div
        key={project}
        className="w-full rounded-lg flex items-center justify-between gap-2.5 bg-surface-foreground px-5 py-3 hover:bg-surface-foregroundOn cursor-pointer"
        onClick={() => setShowSheet(true)}
      >
        <p
          className="font-body-16 text-text-strong max-w-[53.375rem] text-ellipsis whitespace-nowrap overflow-hidden"
          title={project}
        >
          {project}
        </p>
        <ProgressChip percentage={progress} />
      </div>

      <ProjectDetailSheet
        projectId={1}
        isOpen={showSheet}
        closeSheet={() => setShowSheet(false)}
      />
    </>
  );
};

export default ProjectItem;
