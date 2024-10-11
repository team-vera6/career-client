'use client';

import { useAtomValue } from 'jotai';
import { useEffect, useRef, useState } from 'react';

import { useReviewReset } from '@/hooks/useResetReview';
import { cn } from '@/utils/tailwind';

import { Step1 } from './step1/Step1';
import { Step2 } from './step2/Step2';
import { Step3 } from './step3/Step3';
import { reviewStepAtom } from './stores';

const steps = [
  <Step1 key="step1" />,
  <Step2 key="step2" />,
  <Step3 key="step3" />,
];

const SIZE = 53.625; // width + gap 150px

export default function ReviewPage() {
  const reviewStep = useAtomValue(reviewStepAtom);

  const [containerHeight, setContainerHeight] = useState('100%');
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const resetReview = useReviewReset();

  useEffect(() => {
    resetReview();
  }, []);

  const position = SIZE * (reviewStep - 1);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { height } = entry.contentRect;
        setContainerHeight(`${height + 120}px`);
      }
    });

    if (stepRefs.current[reviewStep - 1]) {
      resizeObserver.observe(stepRefs.current[reviewStep - 1]!);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [reviewStep]);

  return (
    <div
      className="w-fit flex gap-[150px] overflow-hidden"
      style={{ height: containerHeight }}
    >
      {steps.map((el, index) => (
        <div
          key={`Step-${index}`}
          ref={(el) => (stepRefs.current[index] = el)}
          className={cn(
            'w-[44.25rem] transition duration-500 h-fit',
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
