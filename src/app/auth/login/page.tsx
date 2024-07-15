import LoginComponents from './LoginComponents';

const LoginPage = () => {
  return (
    <div className="w-[25rem] pt-12 flex flex-col items-center">
      <h1 className="font-head-24 mb-9 text-text-strong">
        더 나은 커리어를 위한 가장 쉬운 회고 방법
      </h1>
      <LoginComponents />
    </div>
  );
};

export default LoginPage;
