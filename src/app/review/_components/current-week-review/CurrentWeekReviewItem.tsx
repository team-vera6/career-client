'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { getProjectTitleList } from '@/apis/projects/get';
import { DropdownItem } from '@/components/dropdown/Dropdown';
import LinkIcon from '@/components/icons/LinkIcon';
import Textarea from '@/components/inputs/textarea/Textarea';

import {
  highLightListAtom,
  lowLightListAtom,
  pageButtonStatesAtom,
} from '../../stores';
import { ReviewListItem, ReviewType } from '../../types';
import { DeleteButton } from '../delete-button/DeleteButton';
import ProjectDropdown from '../project-dropdown/ProjectDropdown';

interface Props extends ReviewListItem {
  category: ReviewType;
  index: number;
}

export const CurrentWeekReviewItem = ({
  id,
  category,
  content,
  project,
  index,
}: Props) => {
  const [projectList, setProjectList] = useState<DropdownItem[]>([]);
  const [highLightList, setHighLightList] = useAtom(highLightListAtom);
  const [lowLightList, setLowLightList] = useAtom(lowLightListAtom);
  const setPageButtonStates = useSetAtom(pageButtonStatesAtom);

  const writeReview = (value: string) => {
    const setter =
      category === 'highLight' ? setHighLightList : setLowLightList;
    setter((prev) =>
      prev.map((review) =>
        String(review.id) === String(id)
          ? { ...review, content: value }
          : review,
      ),
    );
  };

  const selectProject = (item: DropdownItem) => {
    const selectedItem = {
      id: item.id,
      content: item.name,
      progressRate: 0,
    };
    const setter =
      category === 'highLight' ? setHighLightList : setLowLightList;

    setter((prev) =>
      prev.map((review) =>
        String(review.id) === String(item.id)
          ? {
              ...review,
              project: selectedItem,
            }
          : review,
      ),
    );
  };

  useEffect(() => {
    if (category === 'highLight') {
      if (highLightList[0]?.content?.length > 0) {
        setPageButtonStates((prev) => ({ ...prev, step2: true }));
      } else {
        setPageButtonStates((prev) => ({ ...prev, step2: false }));
      }
    } else {
      if (lowLightList[0]?.content?.length > 0) {
        setPageButtonStates((prev) => ({ ...prev, step3: true }));
      } else {
        setPageButtonStates((prev) => ({ ...prev, step3: false }));
      }
    }
  }, [category, highLightList, lowLightList, setPageButtonStates]);

  useEffect(() => {
    (async () => {
      const response = await getProjectTitleList();
      const newList = response?.projects.map((el) => ({
        id: el.id,
        name: el.title,
        value: el.title,
      }));

      setProjectList([INITIAL_PROJECT, ...newList]);
    })();
  }, [setProjectList]);

  return (
    <div className="flex flex-col gap-1">
      <div>
        <Textarea
          className="min-h-[6.5rem]"
          value={content}
          onChange={(val) => writeReview(val)}
        />
        <div className="flex">
          <LinkIcon size={36} />
          <ProjectDropdown
            items={projectList}
            className="mt-2"
            initialItem={project.content ?? '프로젝트 선택'}
            onSelect={selectProject}
          />
        </div>
      </div>
      {/* TODO: 에러 텍스트 추가 예정 */}
      {index !== 0 && <DeleteButton id={String(id)} category={category} />}
    </div>
  );
};

const INITIAL_PROJECT: DropdownItem = {
  id: 0,
  name: '프로젝트 선택',
  value: '프로젝트 선택',
};
