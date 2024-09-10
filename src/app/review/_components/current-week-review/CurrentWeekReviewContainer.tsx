'use client';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { getProjectTitleList } from '@/apis/projects/get';
import { getHighlightList, getLowlightList } from '@/apis/review/get';
import { DropdownItem } from '@/components/dropdown/Dropdown';
import { getCurrentWeek } from '@/utils/date';

import {
  highLightListAtom,
  lowLightListAtom,
  pageButtonStatesAtom,
  reviewIdAtom,
} from '../../stores';
import { ReviewType } from '../../types';
import { CurrentWeekReviewItem } from './CurrentWeekReviewItem';

const { year, month, week } = getCurrentWeek();

const currentWeekInfo = {
  year,
  month,
  week,
};

export const CurrentWeekReviewContainer = ({
  category,
}: {
  category: ReviewType;
}) => {
  const [highLightList, setHighLightList] = useAtom(highLightListAtom);
  const [lowLightList, setLowLightList] = useAtom(lowLightListAtom);

  const setPageButtonStates = useSetAtom(pageButtonStatesAtom);
  const reviewId = useAtomValue(reviewIdAtom);

  const [projectList, setProjectList] = useState<DropdownItem[]>([]);

  const selectProject = (item: DropdownItem, reviewId: string | number) => {
    const selectedItem = {
      id: item.id,
      content: item.name,
      progressRate: 0,
    };
    const setter =
      category === 'highLight' ? setHighLightList : setLowLightList;

    setter((prev) =>
      prev.map((review) =>
        String(review.id) === String(reviewId)
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
    if (category === 'highLight') {
      async () => {
        const response = await getHighlightList(currentWeekInfo);
        setHighLightList(response.highlights);
      };
    } else {
      async () => {
        const response = await getLowlightList(currentWeekInfo);
        setLowLightList(response.lowlights);
      };
    }
  }, [
    highLightList,
    lowLightList,
    category,
    setHighLightList,
    setLowLightList,
  ]);

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
    <div className="w-full p-5 bg-surface-foreground rounded-xl flex flex-col gap-6 mb-3">
      {category === 'highLight'
        ? highLightList.map((el, index) => (
            <CurrentWeekReviewItem
              key={String(el.id)}
              category={category}
              index={index}
              items={projectList}
              onSelect={selectProject}
              reviewId={reviewId}
              {...el}
            />
          ))
        : lowLightList.map((el, index) => (
            <CurrentWeekReviewItem
              key={String(el.id)}
              category={category}
              index={index}
              items={projectList}
              onSelect={selectProject}
              reviewId={reviewId}
              {...el}
            />
          ))}
    </div>
  );
};

const INITIAL_PROJECT: DropdownItem = {
  id: 0,
  name: '프로젝트 선택',
  value: '프로젝트 선택',
};
