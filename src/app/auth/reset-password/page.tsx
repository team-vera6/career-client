import ResetPasswordComponents from './components';

const ResetPasswordPage = () => {
  return (
    <div className="w-[25rem] flex flex-col items-center pt-[3.75rem]">
      <p className="font-body-14 mb-12 text-text-strong text-center whitespace-pre-wrap">
        {`가입한 이메일을 입력해 주세요.\n이메일로 비밀번호 재설정 링크를 보내드릴게요.`}
      </p>
      <ResetPasswordComponents />
    </div>
  );
};

export default ResetPasswordPage;
