'use client';

import { DropdownProps } from '@/components/dropdown/Dropdown';
import LinkIcon from '@/components/icons/LinkIcon';
import Textarea from '@/components/inputs/textarea/Textarea';

import { ReviewListItem, ReviewType } from '../../types';
import { DeleteButton } from '../delete-button/DeleteButton';
import ProjectDropdown from '../project-dropdown/ProjectDropdown';

interface Props extends ReviewListItem, DropdownProps {
  id: string | number;
  category: ReviewType;
  index: number;
  writeReview: (val: string, id: string | number) => void;
}

export const CurrentWeekReviewItem = ({
  id,
  category,
  content,
  project,
  index,
  items,
  onSelect,
  writeReview,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <Textarea
          className="min-h-[6.5rem]"
          value={content}
          onChange={(val: string) => {
            writeReview(val, id);
          }}
        />
        <div className="flex">
          <LinkIcon size={36} />
          <ProjectDropdown
            id={String(id)}
            items={items}
            className="mt-2"
            initialItem={
              project && project.content !== ''
                ? project.content
                : '프로젝트 선택'
            }
            onSelect={onSelect}
          />
        </div>
      </div>
      {/* TODO: 에러 텍스트 추가 예정 */}
      {index !== 0 && <DeleteButton id={String(id)} category={category} />}
    </div>
  );
};
