'use client';

import { useState } from 'react';

import CreateProjectSheet from '@/components/action-sheets/create-project/CreateProjectSheet';
import PlusIcon from '@/components/icons/PlusIcon';
import colors from '@/styles/colors';

import Dropdown, {
  DropdownProps,
} from '../../../../components/dropdown/Dropdown';

const ProjectDropdown = ({ ...rest }: DropdownProps) => {
  const [showSheet, setShowSheet] = useState(false);

  return (
    <>
      <Dropdown {...rest}>
        <li
          className="h-[2.75rem] py-3 px-5 hover:bg-surface-background flex items-center gap-1 text-text-primary"
          onClick={() => setShowSheet(true)}
        >
          <PlusIcon size={16} stroke={colors.text.primary} />
          새로운 프로젝트 추가
        </li>
      </Dropdown>
      <CreateProjectSheet
        isOpen={showSheet}
        closeSheet={() => setShowSheet(false)}
      />
    </>
  );
};

export default ProjectDropdown;
