'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { cn } from '@/utils/tailwind';

import { Step1 } from './step1/Step1';
import { Step2 } from './step2/Step2';
import { Step3 } from './step3/Step3';
import { disabledClickAttemptAtom, reviewStepAtom } from './stores';

const steps = [
  <Step1 key="step1" />,
  <Step2 key="step2" />,
  <Step3 key="step3" />,
];

const SIZE = 53.625; // width + gap 150px

export default function ReviewPage() {
  const [reviewStep, setReviewStep] = useAtom(reviewStepAtom);
  const setDisabledClickAttempt = useSetAtom(disabledClickAttemptAtom);

  useEffect(() => {
    setReviewStep(1);
    setDisabledClickAttempt({
      step1: false,
      step2: false,
      step3: false,
    });
  }, [setReviewStep, setDisabledClickAttempt]);

  const position = SIZE * (reviewStep - 1);

  return (
    <div className="w-fit flex gap-[150px]">
      {steps.map((el, index) => (
        <div
          key={`Step-${index}`}
          className={cn(
            'w-[44.25rem] transition duration-500',
            reviewStep - 1 === index ? 'opacity-100' : 'opacity-0',
          )}
          style={{
            transform: `translateX(-${position}rem)`,
          }}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
