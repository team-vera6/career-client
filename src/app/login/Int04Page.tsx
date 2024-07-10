import NumberInput from '@/components/inputs/number/NumberInput';

const Int04Page = () => {
  return (
    <div className="w-[25rem] flex flex-col items-center pt-[3.75rem]">
      <p className="font-body-14 mb-12 text-text-strong">
        <span className="font-title-14 mr-0.5">example@gmail.com</span>
        으로 전송된 인증 메일을 확인해 주세요.
      </p>
      <div className="flex flex-col items-center gap-5 w-[22.25rem]">
        <div className="flex gap-2">
          <NumberInput value="1" />
          <NumberInput value="2" />
          <NumberInput value="3" />
          <NumberInput value="4" />
          <NumberInput value="5" />
          <NumberInput value="6" />
        </div>
        <p className="font-body-14">4:55</p>
        <button type="button" className="button-secondary h-12 rounded-xl w-full">
          확인
        </button>
      </div>
      <p className="font-body-14 text-center mt-10 whitespace-pre-wrap text-text-strong">
        메일이 오지 않으셨나요?{'\n'}스팸함을 확인하거나 인증 메일을{' '}
        <span style={{ fontWeight: 700 }}>재전송</span>해 주세요.
      </p>
    </div>
  );
};

export default Int04Page;
