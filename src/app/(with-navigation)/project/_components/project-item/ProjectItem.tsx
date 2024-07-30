'use client';

import { useState } from 'react';

import CreateProjectSheet from '@/components/action-sheets/create-project/CreateProjectSheet';
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
      >
        <p
          className="font-body-16 text-text-strong max-w-[53.375rem] text-ellipsis whitespace-nowrap overflow-hidden"
          title={project}
        >
          {project}
        </p>
        <ProgressChip percentage={progress} />
      </div>

      <CreateProjectSheet
        isOpen={showSheet}
        closeSheet={() => setShowSheet(false)}
      />
    </>
  );
};

export default ProjectItem;
