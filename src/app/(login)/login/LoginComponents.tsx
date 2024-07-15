'use client';

import { useRouter } from 'next/navigation';

import Input from '@/components/inputs/input/Input';
import PasswordInput from '@/components/inputs/password/PasswordInput';

const LoginComponents = () => {
  const router = useRouter();

  const onClickButton = (path: string) => {
    router.push(path);
  };
  return (
    <div className="flex flex-col gap-7 w-[22.25rem]">
      <div className="flex flex-col gap-3">
        <Input placeholder="이메일 주소" />
        <PasswordInput placeholder="비밀번호" />
      </div>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="button-primary h-12 rounded-xl"
          onClick={() => onClickButton('/')}
        >
          로그인
        </button>
        <button
          type="button"
          className="button-line h-12 rounded-xl"
          onClick={() => onClickButton('/signup')}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default LoginComponents;
