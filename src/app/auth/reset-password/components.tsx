'use client';

import { useSetAtom } from 'jotai';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

import Input from '@/components/inputs/input/Input';
import { emailAtom } from '@/stores/user/emailAtom';

const ResetPasswordComponents = () => {
  const [email, setEmail] = useState('');
  const setEnteredEmail = useSetAtom(emailAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setEmail(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setEnteredEmail(email);
    console.log(e);
  };

  const isDisabled = useMemo(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return !emailRegex.test(email);
  }, [email]);

  return (
    <form className="flex flex-col gap-7 w-[22.25rem]" onSubmit={handleSubmit}>
      <Input
        placeholder="이메일 주소"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="button-primary h-12 rounded-xl"
        disabled={isDisabled}
      >
        확인
      </button>
    </form>
  );
};

export default ResetPasswordComponents;
