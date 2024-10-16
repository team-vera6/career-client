'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import Input from '@/components/inputs/input/Input';
import { useUser } from '@/hooks/useUser';

const SignUpComponents = () => {
  const router = useRouter();

  const [emailInput, setEmailInput] = useState('');

  const { userEmailCheck } = useUser();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await userEmailCheck(emailInput);

    if (res === 'success') {
      router.push('/auth/email-verification');
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-7 w-[22.25rem]"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="이메일 주소"
        style={{ width: '100%' }}
        value={emailInput}
        onChange={(e) => setEmailInput(e.currentTarget.value)}
      />

      <button type="submit" className="button-primary h-12 rounded-xl w-full">
        메일 인증
      </button>

      <div className="flex gap-2 text-text-strong">
        <p className="font-body-14">이미 계정이 있으신가요?</p>
        <Link href="/auth/login">
          <p className="font-title-14">로그인</p>
        </Link>
      </div>
    </form>
  );
};

export default SignUpComponents;
