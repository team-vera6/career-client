import LoginComponents from './components';

const LoginPage = () => {
  return (
    <div className="w-[25rem] pt-11 flex flex-col items-center gap-9">
      <h1 className="font-head-24 text-text-strong">
        회고를 위한 가장 쉬운 선택
      </h1>

      <LoginComponents />
    </div>
  );
};

export default LoginPage;
