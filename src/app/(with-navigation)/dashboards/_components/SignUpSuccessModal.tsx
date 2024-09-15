'use client';

import { useAtom } from 'jotai';
import Image from 'next/image';

import SignUpSuccessImage from '@/assets/images/sign-up-success.png';
import ModalContainer from '@/components/modal/ModalContainer';
import { signUpAtom } from '@/stores/user/signUpAtom';

export const SignUpSuccessModal = () => {
  const [isSignUp, setIsSignUp] = useAtom(signUpAtom);

  if (!isSignUp) return null;

  return (
    <ModalContainer isOpen={isSignUp}>
      <div className="flex flex-col items-center relative overflow-hidden rounded-[20px]">
        <Image
          src={SignUpSuccessImage}
          width={342}
          height={172}
          alt="no-memo-history"
        />
        <p className="mt-6 mb-2 text-text-strong font-normal text-xl">
          이제, <strong className="font-semibold">매주 금요일 13시</strong>에
          <br /> 회고 메일을 보내드릴게요.
        </p>
        <p className="mb-5 font-body-14 text-text-strong">
          회고를 위해 이번 주 할 일을 작성해 보세요!
        </p>
        <button
          className="mb-7 button-primary button-large"
          onClick={() => setIsSignUp(false)}
        >
          시작하기
        </button>
      </div>
    </ModalContainer>
  );
};
