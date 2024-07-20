import PasswordComponents from './components';

const PasswordPage = () => {
  return (
    <div className="w-[25rem] flex flex-col items-center pt-[3.75rem]">
      <p className="font-body-14 mb-12 text-text-strong">
        PITSTOP에서 사용하실 비밀번호를 입력해 주세요.
      </p>
      <PasswordComponents />
    </div>
  );
};

export default PasswordPage;
