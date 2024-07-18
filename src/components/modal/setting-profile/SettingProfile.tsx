import { useState } from 'react';

import Input from '@/components/inputs/input/Input';

const SettingProfile = () => {
  const [nickname, setNickname] = useState('');

  return (
    <div className="flex flex-col gap-5 w-full">
      <div>
        <p className="font-body-14 text-text-strong mb-2">가입한 이메일</p>
        <Input value="hkjkjklj@gmail.com" readOnly />
      </div>

      <form>
        <p className="font-body-14 text-text-strong mb-2">닉네임</p>
        <div className="flex gap-2">
          <Input value={nickname} onChange={(e) => setNickname(e.currentTarget.value)} readOnly />
          <button type="submit" className="button-primary button-medium shrink-0">
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingProfile;
