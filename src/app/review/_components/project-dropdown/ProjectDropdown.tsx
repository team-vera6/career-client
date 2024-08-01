'use client';

import { useState } from 'react';

import PlusIcon from '@/components/icons/PlusIcon';
import DemoAlert from '@/components/modal/demo-alert/DemoAlert';
import colors from '@/styles/colors';

import Dropdown, {
  DropdownProps,
} from '../../../../components/dropdown/Dropdown';

const ProjectDropdown = ({ ...rest }: DropdownProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Dropdown {...rest}>
        <li
          className="h-[2.75rem] py-3 px-5 hover:bg-surface-background flex items-center gap-1 text-text-primary"
          onClick={() => setShowModal(true)}
        >
          <PlusIcon size={16} stroke={colors.text.primary} />
          새로운 프로젝트 추가
        </li>
      </Dropdown>

      <DemoAlert isOpen={showModal} setIsOpen={setShowModal} />
    </>
  );
};

export default ProjectDropdown;
