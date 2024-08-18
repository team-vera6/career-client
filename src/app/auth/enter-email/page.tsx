import EmailComponents from './components';

const EmailPage = () => {
  return (
    <div className="w-[25rem] flex flex-col items-center pt-[3.75rem]">
      <p className="font-body-14 mb-12 text-text-strong">
        <span className="font-title-14 mr-0.5">example@gmail.com</span>
        으로 전송된 인증 메일을 확인해 주세요.
      </p>
      <EmailComponents />
    </div>
  );
};

export default EmailPage;
