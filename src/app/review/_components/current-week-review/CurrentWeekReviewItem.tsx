'use client';

import { useAtom } from 'jotai';

import { DropdownProps } from '@/components/dropdown/Dropdown';
import LinkIcon from '@/components/icons/LinkIcon';
import Textarea from '@/components/inputs/textarea/Textarea';

import { highLightListAtom, lowLightListAtom } from '../../stores';
import { ReviewListItem, ReviewType } from '../../types';
import { DeleteButton } from '../delete-button/DeleteButton';
import ProjectDropdown from '../project-dropdown/ProjectDropdown';

interface Props extends ReviewListItem, DropdownProps {
  category: ReviewType;
  index: number;
}

export const CurrentWeekReviewItem = ({
  reviewId,
  category,
  content,
  project,
  index,
  items,
  onSelect,
}: Props) => {
  const [highLightList, setHighLightList] = useAtom(highLightListAtom);
  const [lowLightList, setLowLightList] = useAtom(lowLightListAtom);

  const writeReview = (value: string) => {
    const setter =
      category === 'highLight' ? setHighLightList : setLowLightList;
    setter((prev) =>
      prev.map((review) =>
        String(review.id) === String(reviewId)
          ? { ...review, content: value }
          : review,
      ),
    );
  };

  return (
    <div className="flex flex-col gap-1">
      <div>
        <Textarea
          className="min-h-[6.5rem]"
          value={content}
          onChange={(val: string) => writeReview(val)}
        />
        <div className="flex">
          <LinkIcon size={36} />
          <ProjectDropdown
            reviewId={reviewId}
            items={items}
            className="mt-2"
            initialItem={
              project.content !== '' ? project.content : '프로젝트 선택'
            }
            onSelect={onSelect}
          />
        </div>
      </div>
      {/* TODO: 에러 텍스트 추가 예정 */}
      {index !== 0 && (
        <DeleteButton id={String(reviewId)} category={category} />
      )}
    </div>
  );
};
