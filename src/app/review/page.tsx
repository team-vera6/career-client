'use client';

import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { cn } from '@/utils/tailwind';

import { Step1 } from './step1/Step1';
import { Step2 } from './step2/page';
import { Step3 } from './step3/page';
import { reviewStepsAtom } from './stores';

const steps = [
  <Step1 key="step1" />,
  <Step2 key="step2" />,
  <Step3 key="step3" />,
];

const SIZE = 53.625; // width + gap 150px

export default function ReviewPage() {
  const [reviewSteps, setReviewSteps] = useAtom(reviewStepsAtom);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setReviewSteps({ direction: '', activePage: 1 });
    setPosition(0);
  }, []);

  useEffect(() => {
    if (position >= SIZE * 2) return;
    if (reviewSteps.direction === 'prev') {
      setPosition((prev) => prev - SIZE);
    } else if (reviewSteps.direction === 'next') {
      setPosition((prev) => prev + SIZE);
    } else {
      setPosition(0);
    }
  }, [reviewSteps]);

  return (
    <div className="w-fit flex gap-[150px]">
      {steps.map((el, index) => (
        <div
          key={`Step-${index}`}
          className={cn(
            'w-[44.25rem] transform transition-transform-opacity duration-500',
            `-translate-x-[${position}rem]`,
            reviewSteps.activePage - 1 === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
