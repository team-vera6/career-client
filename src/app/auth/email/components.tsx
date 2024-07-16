'use client';

import { useRouter } from 'next/navigation';

import NumberInput from '@/components/inputs/number/NumberInput';

const EmailComponents = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-5 w-[22.25rem]">
      <div className="flex gap-2">
        <NumberInput value="1" />
        <NumberInput value="2" />
        <NumberInput value="3" />
        <NumberInput value="4" />
        <NumberInput value="5" />
        <NumberInput value="6" />
      </div>
      <p className="font-body-14">4:55</p>
      <button
        type="button"
        className="button-secondary h-12 rounded-xl w-full"
        onClick={() => router.push('/auth/password')}
      >
        확인
      </button>
    </div>
  );
};

export default EmailComponents;
