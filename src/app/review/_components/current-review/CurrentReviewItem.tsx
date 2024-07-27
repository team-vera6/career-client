'use client';

import { useAtomValue } from 'jotai';
import { useState } from 'react';

import LinkIcon from '@/components/icons/LinkIcon';
import Textarea from '@/components/inputs/textarea/Textarea';

import { projectListAtom } from '../../stores';
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
  const [reviewText, setReviewText] = useState(text);

  return (
    <div className="flex flex-col gap-1">
      <div>
        <Textarea
          className="min-h-[6.5rem]"
          value={reviewText}
          onChange={(val) => setReviewText(val)}
        />
        <div className="flex">
          <LinkIcon size={36} />
          <ProjectDropdown
            id={projectList['id']}
            items={projectList['items']}
            className="mt-2"
            initialItem={project}
          />
        </div>
      </div>
      {/* TODO: 에러 텍스트 추가 예정 */}
      {index !== 0 && <DeleteButton id={id} category={category} />}
    </div>
  );
};
