'use client';

import { useState } from 'react';

import TextLogo from '@/components/icons/TextLogo';

import SettingProfileModal from '../modal/setting-profile';

const Header = () => {
  const [openSettingModal, setOpenSettingModal] = useState(false);

  return (
    <header className="h-[4.875rem] w-full sticky top-0 left-0 right-0 bg-surface-invert flex items-center justify-center z-10">
      <div className="w-full max-w-[1696px] flex items-center justify-between px-12">
        <TextLogo />

        <div className="flex items-center gap-5">
          <div className="w-24 h-12 bg-red-10 flex items-center justify-center rounded-full">
            0/4
          </div>
          <div
            className="w-10 h-10 bg-surface-alternative rounded-[14px] flex items-center justify-center text-text-invert select-none"
            onClick={() => setOpenSettingModal(true)}
          >
            이
          </div>
        </div>
      </div>

      <SettingProfileModal isOpen={openSettingModal} onDismiss={() => setOpenSettingModal(false)} />
    </header>
  );
};

export default Header;
