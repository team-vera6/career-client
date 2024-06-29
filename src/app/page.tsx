'use client';

import StarIcon from '@/components/icons/StarIcon';
import useToast from '../hooks/useToast';

export default function Home() {
  const { addToast } = useToast();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-state-caution w-11 h-11" />

      <button
        className="button-primary button-large"
        onClick={() => addToast({ message: 'Success!', iconType: 'error' })}
      >
        버튼 테스트
      </button>
      <button className="button-primary button-large" onClick={() => addToast({ message: 'you!' })}>
        버튼 테스트
      </button>

      <StarIcon width={100} height={100} fill="red" stroke="blue" />
      <StarIcon size={20} />
      <p className="font-title-16">폰트 테스트</p>
      <p className="font-designer">designer font test 012012</p>
    </main>
  );
}
