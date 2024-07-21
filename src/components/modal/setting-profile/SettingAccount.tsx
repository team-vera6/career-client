'use client';

import { useState } from 'react';

import Alert from '../Alert';

const SettingAccount = () => {
  const [showConfirmAlert, setShowConfirmAlert] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-16 w-full">
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
          <button className="button-line button-medium text-text-strong flex-1">
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
          },
        }}
      />
    </>
  );
};

export default SettingAccount;
