import EmailComponents from './components';

const EmailPage = () => {
  return (
    <div className="w-[25rem] flex flex-col items-center pt-[3.75rem]">
      <p className="font-body-14 mb-12 text-text-strong">
        <span className="font-title-14 mr-0.5">example@gmail.com</span>
        으로 전송된 인증 메일을 확인해 주세요.
      </p>
      <EmailComponents />
      <p className="font-body-14 text-center mt-10 whitespace-pre-wrap text-text-strong">
        메일이 오지 않으셨나요?{'\n'}스팸함을 확인하거나 인증 메일을{' '}
        <span style={{ fontWeight: 700 }}>재전송</span>해 주세요.
      </p>
    </div>
  );
};

export default EmailPage;
