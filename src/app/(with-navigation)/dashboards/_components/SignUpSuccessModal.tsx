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
        <div className="mt-6 mb-2 flex flex-col items-center font-head-20 text-text-strong">
          <strong style={{ fontWeight: 600 }}>매주 금요일 13시!</strong>
          <p style={{ fontWeight: 400 }}>회고 메일을 보내드릴게요</p>
        </div>
        <p className="mb-5 font-body-14 text-text-strong">
          피트스탑과 함께 성공적인 한주를 이뤄봐요👍
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
