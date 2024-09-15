'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { getProjectTitleList } from '@/apis/projects/get';
import { getHighlightList, getLowlightList } from '@/apis/review/get';
import { DropdownItem } from '@/components/dropdown/Dropdown';
import { getCurrentWeek } from '@/utils/date';

import {
  highLightListAtom,
  initialHighLightListAtom,
  initialLowLightListAtom,
  lowLightListAtom,
  pageButtonStatesAtom,
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

  const setInitialHighLightList = useSetAtom(initialHighLightListAtom);
  const setInitialLowLightList = useSetAtom(initialLowLightListAtom);

  const setPageButtonStates = useSetAtom(pageButtonStatesAtom);

  const [projectList, setProjectList] = useState<DropdownItem[]>([]);
  const writeReview = (value: string, id: string | number) => {
    if (category === 'highLight') {
      setHighLightList((prev) =>
        prev.map((review) =>
          String(review.id) === String(id)
            ? { ...review, content: value }
            : review,
        ),
      );
    } else {
      setLowLightList((prev) =>
        prev.map((review) =>
          String(review.id) === String(id)
            ? { ...review, content: value }
            : review,
        ),
      );
    }
  };

  const selectProject = (item: DropdownItem, reviewId: string | number) => {
    const selectedItem = {
      id: Number(item.id),
      content: item.name,
      progressRate: 0,
    };

    if (category === 'highLight') {
      setHighLightList((prev) =>
        prev.map((review) =>
          String(review.id) === String(reviewId)
            ? {
                ...review,
                id: review.id,
                project: selectedItem,
              }
            : review,
        ),
      );
    } else {
      setLowLightList((prev) =>
        prev.map((review) =>
          String(review.id) === String(reviewId)
            ? {
                ...review,
                id: review.id,
                project: selectedItem,
              }
            : review,
        ),
      );
    }
  };

  useEffect(() => {
    if (category === 'highLight') {
      (async () => {
        const response = await getHighlightList(currentWeekInfo);
        setInitialHighLightList(response.highlights);
        setHighLightList(response.highlights);
      })();
    } else {
      (async () => {
        const response = await getLowlightList(currentWeekInfo);
        setInitialLowLightList(response.lowlights);
        setLowLightList(response.lowlights);
      })();
    }
  }, [
    category,
    setHighLightList,
    setInitialHighLightList,
    setInitialLowLightList,
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

  return (
    <div className="w-full p-5 bg-surface-foreground rounded-xl flex flex-col gap-6 mb-8">
      {category === 'highLight'
        ? highLightList.map((el, index) => (
            <CurrentWeekReviewItem
              key={String(el.id)}
              category={category}
              index={index}
              items={projectList}
              onSelect={selectProject}
              writeReview={writeReview}
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
              writeReview={writeReview}
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
