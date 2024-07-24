'use client';

import { useRouter } from 'next/navigation';

export const PagingButton = () => {
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <div className="flex justify-between gap-2.5">
        <button
          type="button"
          className="button-secondary button-large"
          onClick={() => router.push('/review/step2')}
        >
          이전
        </button>
        <button type="button" className="button-primary button-large">
          등록
        </button>
      </div>
    </div>
  );
};
