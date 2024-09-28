import Link from 'next/link';

import LoginComponents from './components';

const LoginPage = () => {
  return (
    <div className="w-[25rem] pt-11 flex flex-col items-center">
      <h1 className="mb-9 font-head-24 text-text-strong">
        회고를 위한 가장 쉬운 선택
      </h1>

      <LoginComponents />
      <div className="flex gap-2 mt-5 font-body-14">
        <p>비밀번호를 잊으셨나요?</p>
        <Link href="/auth/reset-password" className="font-bold">
          비밀번호 재설정
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
