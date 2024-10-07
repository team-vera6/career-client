'use client';

import { useState } from 'react';

import ProjectDetailSheet from '@/components/action-sheets/project-detail/ProjectDetailSheet';
import ProgressChip from '@/components/progress-chip/ProgressChip';

interface Props {
  id: number;
  title: string;
  progress: number;
  onClose?: () => void;
  initialOpen?: boolean;
}

const ProjectItem = ({ id, title, progress, onClose, initialOpen }: Props) => {
  const [showSheet, setShowSheet] = useState(initialOpen ?? false);

  return (
    <>
      <div
        key={id}
        className="w-full rounded-lg flex items-center justify-between gap-2.5 bg-surface-foreground px-5 py-3 hover:bg-surface-foregroundOn cursor-pointer"
        onClick={() => setShowSheet(true)}
      >
        <p
          className="font-body-16 text-text-strong max-w-[53.375rem] text-ellipsis whitespace-nowrap overflow-hidden"
          title={title}
        >
          {title}
        </p>
        <ProgressChip percentage={progress} />
      </div>

      <ProjectDetailSheet
        projectId={id}
        isOpen={showSheet}
        closeSheet={() => {
          onClose?.();
          setShowSheet(false);
        }}
      />
    </>
  );
};

export default ProjectItem;
