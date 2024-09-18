'use client';

import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getUserDetail } from '@/apis/user/get';
import TextLogo from '@/components/icons/TextLogo';
import { userInfoAtom } from '@/stores/user/userInfo';

import SettingProfileModal from '../modal/setting-profile';
import WeekInfo from './WeekInfo';

const Header = () => {
  const router = useRouter();

  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);

  useEffect(() => {
    (async () => {
      try {
        const response = await getUserDetail();
        setUserInfo(response);
      } catch (error) {
        console.error('fail to get user profile', error);
      }
    })();
  }, [setUserInfo]);

  return (
    <header className="h-[3.25rem] w-full min-w-[1440px] sticky top-0 left-0 right-0 bg-surface-invert flex items-center justify-center z-10">
      <div className="w-full max-w-[1696px] flex items-center justify-between px-12">
        <Link href="/dashboards">
          <TextLogo />
        </Link>

        <WeekInfo />

        <button
          className="w-10 h-10 bg-surface-alternative rounded-[14px] flex items-center justify-center text-text-invert select-none"
          onClick={() =>
            userInfo.email
              ? setOpenSettingModal(true)
              : router.push('/auth/login')
          }
        >
          {userInfo.nickname ? userInfo.nickname[0] : userInfo.email[0]}
        </button>
      </div>

      <SettingProfileModal
        isOpen={openSettingModal}
        onDismiss={() => setOpenSettingModal(false)}
      />
    </header>
  );
};

export default Header;
