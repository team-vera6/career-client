import Link from 'next/link';

import Input from '@/components/inputs/input/Input';

const Int03Page = () => {
  return (
    <div className="w-[25rem] flex flex-col items-center pt-[3.75rem]">
      <p className="font-body-14 mb-12 text-text-strong">
        사용 중이신 이메일 주소로 가입할 수 있어요.
      </p>
      <div className="flex flex-col items-center gap-7 w-[22.25rem]">
        <Input placeholder="이메일 주소" style={{ width: '100%' }} />
        <button type="button" className="button-primary h-12 rounded-xl w-full">
          메일인증
        </button>
        <div className="font-body-14 flex gap-2 text-text-strong">
          <p>이미 계정이 있으신가요?</p>
          <Link href="/" style={{ fontWeight: 700 }}>
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Int03Page;
