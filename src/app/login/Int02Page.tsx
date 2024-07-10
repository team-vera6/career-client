import Input from '@/components/inputs/input/Input';
import PasswordInput from '@/components/inputs/password/PasswordInput';

const Int02Page = () => {
  return (
    <div className="w-[25rem] pt-12 flex flex-col items-center">
      <h1 className="font-head-24 mb-9 text-text-strong">
        더 나은 커리어를 위한 가장 쉬운 회고 방법
      </h1>
      <div className="flex flex-col gap-7 w-[22.25rem]">
        <div className="flex flex-col gap-3">
          <Input placeholder="이메일 주소" />
          <PasswordInput placeholder="비밀번호" />
        </div>
        <div className="flex flex-col gap-3">
          <button type="button" className="button-primary h-12 rounded-xl">
            로그인
          </button>
          <button type="button" className="button-line h-12 rounded-xl">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Int02Page;
