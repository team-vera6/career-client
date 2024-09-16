import TextLogo from '@/components/icons/TextLogo';

import LoginComponents from './components';

const LoginPage = () => {
  return (
    <div className="w-[25rem] pt-12 flex flex-col items-center gap-24">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-head-24 text-text-strong">
          회고를 위한 가장 쉬운 선택
        </h1>
        <TextLogo />
      </div>

      <LoginComponents />
    </div>
  );
};

export default LoginPage;
