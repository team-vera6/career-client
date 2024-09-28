'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

import Input from '@/components/inputs/input/Input';
import PasswordInput from '@/components/inputs/password/PasswordInput';
import { useUser } from '@/hooks/useUser';

const LoginComponents = () => {
  const router = useRouter();
  const { userLogin } = useUser();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onClickButton = (path: string) => {
    router.push(path);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const login = await userLogin(formData.email, formData.password);

    if (login === 'success') {
      router.push('/dashboards');
    }
  };

  const isLoginDisabled = useMemo(() => {
    return !formData.email || !formData.password;
  }, [formData.email, formData.password]);

  return (
    <div>
      <form
        className="flex flex-col gap-7 w-[22.25rem]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <Input
            placeholder="이메일 주소"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <PasswordInput
            placeholder="비밀번호"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="button-primary h-12 rounded-xl"
            disabled={isLoginDisabled}
          >
            로그인
          </button>
          <button
            type="button"
            className="button-line h-12 rounded-xl"
            onClick={() => onClickButton('/auth/enter-email')}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponents;
