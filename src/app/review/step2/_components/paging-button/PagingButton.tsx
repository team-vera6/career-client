'use client';

import { useRouter } from 'next/navigation';

export const PagingButton = () => {
  const router = useRouter();

  const onClickButton = (path: string) => {
    router.push(`/review/${path}`);
  };
  return (
    <div className="flex justify-end">
      <div className="flex justify-between gap-2.5">
        <button
          type="button"
          className="button-secondary button-large"
          onClick={() => onClickButton('step1')}
        >
          이전
        </button>
        <button
          type="button"
          className="button-primary button-large"
          onClick={() => onClickButton('step3')}
        >
          다음
        </button>
      </div>
    </div>
  );
};
