'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import PasswordInput from '@/components/inputs/password/PasswordInput';

const PasswordComponents = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-[22.25rem]">
      <div className="flex flex-col w-full gap-3 mb-6">
        <PasswordInput placeholder="비밀번호 입력" />
        <PasswordInput placeholder="비밀번호 확인" />
      </div>

      <button
        type="button"
        className="button-primary h-12 rounded-xl w-full mb-4"
        onClick={() => router.push('/')}
      >
        완료
      </button>
      <p className="font-body-13 text-text-strong">
        서비스 가입 시{' '}
        <Link href="/" className="underline">
          이용약관
        </Link>
        에 동의하며{' '}
        <Link href="/" className="underline">
          개인정보 처리방침
        </Link>
        의 내용을 확인한 것으로 간주됩니다.
      </p>
    </div>
  );
};

export default PasswordComponents;
