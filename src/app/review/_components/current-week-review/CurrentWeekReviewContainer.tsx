'use client';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { getProjectTitleList } from '@/apis/projects/get';
import { getHighlightList, getLowlightList } from '@/apis/review/get';
import { DropdownItem } from '@/components/dropdown/Dropdown';
import { getCurrentWeek } from '@/utils/date';

import {
  disabledClickAttemptAtom,
  highLightListAtom,
  initialHighLightListAtom,
  initialLowLightListAtom,
  lowLightListAtom,
  pageButtonStatesAtom,
  reviewStepAtom,
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
  const disabledClickAttempt = useAtomValue(disabledClickAttemptAtom);
  const reviewStep = useAtomValue(reviewStepAtom);

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
    if (reviewStep === 2) {
      (async () => {
        const response = await getHighlightList(currentWeekInfo);
        if (response?.highlights.length > 0) {
          setInitialHighLightList(response.highlights);
          setHighLightList(response.highlights);
        }
      })();
    } else {
      (async () => {
        const response = await getLowlightList(currentWeekInfo);
        if (response?.lowlights.length > 0) {
          setInitialLowLightList(response.lowlights);
          setLowLightList(response.lowlights);
        }
      })();
    }
  }, [
    reviewStep,
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

      setProjectList(newList);
    })();
  }, [setProjectList]);

  useEffect(() => {
    if (category === 'highLight') {
      if (
        highLightList.length > 0 &&
        highLightList.every((item) => item?.content?.length > 0)
      ) {
        setPageButtonStates((prev) => ({ ...prev, step2: true }));
      } else {
        setPageButtonStates((prev) => ({ ...prev, step2: false }));
      }
    } else {
      if (
        lowLightList.length > 0 &&
        lowLightList.every((item) => item?.content?.length > 0)
      ) {
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
              items={projectList}
              index={index}
              onSelect={selectProject}
              writeReview={writeReview}
              isRequiredError={
                highLightList.length === 1 &&
                el.content.length === 0 &&
                disabledClickAttempt.step2
              }
              isShowErrorText={
                highLightList.length > 1 &&
                el.content.length === 0 &&
                disabledClickAttempt.step2
              }
              {...el}
            />
          ))
        : lowLightList.map((el, index) => (
            <CurrentWeekReviewItem
              key={String(el.id)}
              category={category}
              items={projectList}
              index={index}
              onSelect={selectProject}
              writeReview={writeReview}
              isRequiredError={
                lowLightList.length === 1 &&
                el.content.length === 0 &&
                disabledClickAttempt.step3
              }
              isShowErrorText={
                lowLightList.length > 1 &&
                el.content.length === 0 &&
                disabledClickAttempt.step3
              }
              {...el}
            />
          ))}
    </div>
  );
};
