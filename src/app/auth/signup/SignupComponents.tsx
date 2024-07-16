'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Input from '@/components/inputs/input/Input';

const SignupComponents = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-7 w-[22.25rem]">
      <Input placeholder="이메일 주소" style={{ width: '100%' }} />
      <button
        type="button"
        className="button-primary h-12 rounded-xl w-full"
        onClick={() => router.push('/auth/email')}
      >
        메일인증
      </button>
      <div className="font-body-14 flex gap-2 text-text-strong">
        <p>이미 계정이 있으신가요?</p>
        <Link href="/auth/login" style={{ fontWeight: 700 }}>
          로그인
        </Link>
      </div>
    </div>
  );
};

export default SignupComponents;
