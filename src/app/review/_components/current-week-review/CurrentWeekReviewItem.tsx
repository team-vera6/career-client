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
  const placeholder =
    category === 'highLight'
      ? `주목할만한 성취가 아니어도 괜찮아요.\n작은 기록이 모여, 큰 변화를 만들어 줄거예요.`
      : `이번 주에 아쉬웠던 것은 무엇인가요?\n누구나 실수할 수 있지만 반복하지 않는 것이 중요해요.`;

  return (
    <div className="flex flex-col gap-1">
      <div>
        <Textarea
          className="min-h-[6.5rem]"
          value={content}
          placeholder={placeholder}
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
