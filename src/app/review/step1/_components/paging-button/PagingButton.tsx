'use client';

import { useRouter } from 'next/navigation';

export const PagingButton = () => {
  const router = useRouter();

  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="button-primary button-large"
        onClick={() => router.push('/review/step2')}
      >
        다음
      </button>
    </div>
  );
};
