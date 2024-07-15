import SignupComponents from './SignupComponents';

const SignUpPage = () => {
  return (
    <div className="w-[25rem] flex flex-col items-center pt-[3.75rem]">
      <p className="font-body-14 mb-12 text-text-strong">
        사용 중이신 이메일 주소로 가입할 수 있어요.
      </p>
      <SignupComponents />
    </div>
  );
};

export default SignUpPage;
