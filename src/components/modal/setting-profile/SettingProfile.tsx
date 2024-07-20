'use client';

import { useState } from 'react';

import Input from '@/components/inputs/input/Input';
import useToast from '@/hooks/useToast';

const SettingProfile = () => {
  const { addToast } = useToast();

  const [nickname, setNickname] = useState('');

  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <p className="font-body-14 text-text-strong mb-2">가입한 이메일</p>
        <Input value="hkjkjklj@gmail.com" readOnly />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          addToast({
            message: '닉네임이 변경되었어요.',
            iconType: 'success',
          });
        }}
      >
        <label htmlFor="nickname" className="font-body-14 text-text-strong">
          닉네임
        </label>
        <div className="flex gap-2 mt-2">
          <Input
            id="nickname"
            name="nickname"
            autoComplete="off"
            value={nickname}
            onChange={(e) => setNickname(e.currentTarget.value)}
          />
          <button
            type="submit"
            className="button-primary button-medium shrink-0"
            disabled={nickname.length === 0}
          >
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingProfile;
