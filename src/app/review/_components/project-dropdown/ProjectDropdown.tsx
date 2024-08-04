'use client';

import PlusIcon from '@/components/icons/PlusIcon';
import colors from '@/styles/colors';

import Dropdown, {
  DropdownProps,
} from '../../../../components/dropdown/Dropdown';

const ProjectDropdown = ({ ...rest }: DropdownProps) => {
  return (
    <>
      <Dropdown {...rest}>
        <li className="h-[2.75rem] py-3 px-5 hover:bg-surface-background flex items-center gap-1 text-text-primary">
          <PlusIcon size={16} stroke={colors.text.primary} />
          새로운 프로젝트 추가
        </li>
      </Dropdown>
    </>
  );
};

export default ProjectDropdown;
