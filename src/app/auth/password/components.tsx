'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import PasswordInput from '@/components/inputs/password/PasswordInput';
import { FormEvent, useMemo, useState } from 'react';
import useToast from '@/hooks/useToast';

const PasswordComponents = () => {
  const router = useRouter();
  const { addToast } = useToast();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showErrorText, setShowErrorText] = useState(false); // FIXME: 디자인 선반영 필요

  const isValidate = (pwd: string) => {
    const MIN_LENGTH = 8;

    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);

    if (
      pwd.length < MIN_LENGTH ||
      !(hasUpperCase && hasLowerCase && hasNumber)
    ) {
      return false;
    }

    return true;
  };

  const handlePasswordChange = (pwd: string) => {
    setPassword(pwd);
    setShowErrorText(() => !isValidate(pwd));
  };

  const handleConfirmPassword = (pwd: string) => {
    setConfirmPassword(pwd);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      addToast({
        message: '비밀번호가 일치하지 않습니다.',
        iconType: 'error',
      });
    }
    // FIXME: api 전송 로직 추가
  };

  const isButtonEnabled = useMemo(() => {
    const isValidPassword = isValidate(password);
    return isValidPassword && confirmPassword.length > 0;
  }, [password, confirmPassword]);

  return (
    <form
      className="flex flex-col items-center w-[22.25rem]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-full gap-3 mb-6">
        <PasswordInput
          placeholder="비밀번호 입력"
          onChange={(e) => handlePasswordChange(e.currentTarget.value)}
          value={password}
        />
        {showErrorText && (
          <p className="font-body-12 text-state-negative">
            비밀번호는 8자 이상, 영문, 숫자를 포함해 주세요.
          </p>
        )}
        <PasswordInput
          placeholder="비밀번호 확인"
          onChange={(e) => handleConfirmPassword(e.currentTarget.value)}
          value={confirmPassword}
        />
      </div>

      <button
        type="submit"
        className="button-primary h-12 rounded-xl w-full mb-4"
        disabled={!isButtonEnabled}
      >
        완료
      </button>
      <p className="font-body-13 text-text-strong">
        서비스 가입 시{' '}
        <Link href="/" className="underline">
          이용약관
        </Link>
        에 동의하며{' '}
        <Link href="/" className="underline">
          개인정보 처리방침
        </Link>
        의 내용을 확인한 것으로 간주됩니다.
      </p>
    </form>
  );
};

export default PasswordComponents;
