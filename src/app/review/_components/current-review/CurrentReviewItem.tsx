'use client';

import { useAtomValue, useSetAtom } from 'jotai';

import { DropdownItem } from '@/components/dropdown/Dropdown';
import LinkIcon from '@/components/icons/LinkIcon';
import Textarea from '@/components/inputs/textarea/Textarea';

import {
  highLightListAtom,
  lowLightListAtom,
  projectListAtom,
} from '../../stores';
import { ReviewListItem, ReviewType } from '../../types';
import { DeleteButton } from '../delete-button/DeleteButton';
import ProjectDropdown from '../project-dropdown/ProjectDropdown';

interface Props extends ReviewListItem {
  category: ReviewType;
  index: number;
}

export const CurrentReviewItem = ({
  id,
  category,
  text,
  project,
  index,
}: Props) => {
  const projectList = useAtomValue(projectListAtom);
  const setHighLight = useSetAtom(highLightListAtom);
  const setLowLight = useSetAtom(lowLightListAtom);

  const writeReview = (value: string) => {
    const setter = category === 'highLight' ? setHighLight : setLowLight;
    setter((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, text: value } : review,
      ),
    );
  };

  const selectProject = (item: DropdownItem) => {
    const setter = category === 'highLight' ? setHighLight : setLowLight;
    setter((prev) =>
      prev.map((review) =>
        review.id === id
          ? { ...review, project: item.value as string }
          : review,
      ),
    );
  };

  return (
    <div className="flex flex-col gap-1">
      <div>
        <Textarea
          className="min-h-[6.5rem]"
          value={text}
          onChange={(val) => writeReview(val)}
        />
        <div className="flex">
          <LinkIcon size={36} />
          <ProjectDropdown
            id={projectList['id']}
            items={projectList['items']}
            className="mt-2"
            initialItem={project}
            onSelect={selectProject}
          />
        </div>
      </div>
      {/* TODO: 에러 텍스트 추가 예정 */}
      {index !== 0 && <DeleteButton id={id} category={category} />}
    </div>
  );
};
