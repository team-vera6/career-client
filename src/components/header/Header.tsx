'use client';

import Link from 'next/link';
import { useState } from 'react';

import TextLogo from '@/components/icons/TextLogo';

import SettingProfileModal from '../modal/setting-profile';
import WeekInfo from './WeekInfo';

const Header = () => {
  const [openSettingModal, setOpenSettingModal] = useState(false);

  return (
    <header className="h-[4.875rem] w-full min-w-[1440px] sticky top-0 left-0 right-0 bg-surface-invert flex items-center justify-center z-10">
      <div className="w-full max-w-[1696px] flex items-center justify-between px-12">
        <Link href="/dashboard">
          <TextLogo />
        </Link>

        <WeekInfo totalWeek={4} currentWeek={1} />

        <button
          className="w-10 h-10 bg-surface-alternative rounded-[14px] flex items-center justify-center text-text-invert select-none"
          onClick={() => setOpenSettingModal(true)}
        >
          이
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
