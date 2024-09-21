'use client';

import { useAtom } from 'jotai';
import { useState } from 'react';

import { changeNickname } from '@/apis/user/put';
import Input from '@/components/inputs/input/Input';
import useToast from '@/hooks/useToast';
import { userInfoAtom } from '@/stores/user/userInfo';

const SettingProfile = () => {
  const { addToast } = useToast();

  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
  const [nickname, setNickname] = useState(userInfo.nickname ?? '');

  const onClickChangeNickname = async () => {
    try {
      await changeNickname(nickname);
      addToast({
        message: '닉네임이 변경되었어요.',
        iconType: 'success',
      });
      setUserInfo((prev) => ({ ...prev, nickname }));
    } catch (error) {
      console.error('fail to change nickname', error);
      addToast({
        message: '닉네임 변경에 실패했어요.',
        iconType: 'error',
      });
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full mt-1">
      <div>
        <p className="font-body-14 text-text-strong mb-2">가입한 이메일</p>
        <Input value={userInfo.email} readOnly />
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await onClickChangeNickname();
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
