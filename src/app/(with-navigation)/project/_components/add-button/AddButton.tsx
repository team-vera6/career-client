'use client';

import { useState } from 'react';

import CreateProjectSheet from '@/components/action-sheets/create-project/CreateProjectSheet';
import PlusIcon from '@/components/icons/PlusIcon';

interface Props {
  fetchProjects: () => Promise<void>;
}
const AddButton = ({ fetchProjects }: Props) => {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <>
      <div className="w-full flex items-center justify-between mb-[1.875rem]">
        <p className="font-head-20 text-text-strong">프로젝트</p>
        <button
          className="button-primary button-medium"
          onClick={() => setShowSheet(true)}
        >
          <PlusIcon size={20} stroke="#fff" />
          <p className="font-body-14 text-text-invert">추가</p>
        </button>
      </div>

      <CreateProjectSheet
        isOpen={showSheet}
        closeSheet={() => setShowSheet(false)}
        fetchProjects={fetchProjects}
      />
    </>
  );
};

export default AddButton;
