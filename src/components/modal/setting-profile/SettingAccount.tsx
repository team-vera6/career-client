'use client';

import { useState } from 'react';

import { deleteUser } from '@/apis/auth/delete';
import { useUser } from '@/hooks/useUser';

import Alert from '../Alert';

const SettingAccount = () => {
  const { userLogout } = useUser();

  const [showConfirmAlert, setShowConfirmAlert] = useState(false);

  const deleteAccount = async () => {
    try {
      await deleteUser();
      userLogout();
    } catch (error) {
      console.error('fail to delete user', error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-16 w-full mt-1">
        <div>
          <p className="font-body-14 text-text-strong mb-4">이용약관</p>
          <p className="font-body-14 text-text-strong">개인정보 처리방침</p>
        </div>

        <div className="flex gap-2">
          <button
            className="button-line button-medium text-state-negative flex-1"
            onClick={() => setShowConfirmAlert(true)}
          >
            회원탈퇴
          </button>
          <button
            className="button-line button-medium text-text-strong flex-1"
            onClick={userLogout}
          >
            로그아웃
          </button>
        </div>
      </div>

      <Alert
        isOpen={showConfirmAlert}
        onDismiss={() => setShowConfirmAlert(false)}
        title="정말로 탈퇴하시겠어요?"
        buttons={{
          left: {
            text: '취소',
            className:
              'button-secondary button-medium font-body-14 text-text-strong',
          },
          right: {
            text: '확인',
            className:
              'button-primary button-medium font-body-14 text-text-invert bg-state-negative',
            onClick: deleteAccount,
          },
        }}
      />
    </>
  );
};

export default SettingAccount;
