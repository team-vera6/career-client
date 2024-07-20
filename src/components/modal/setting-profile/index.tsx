'use client';

import { useState } from 'react';

import Modal from '../Modal';
import { ModalProps } from '../ModalContainer';

import SettingAccount from './SettingAccount';
import SettingProfile from './SettingProfile';

const menus = [
  {
    label: '프로필',
    component: <SettingProfile />,
  },
  {
    label: '계정',
    component: <SettingAccount />,
  },
];

const SettingProfileModal = (props: ModalProps) => {
  const [currentMenu, setCurrentMenu] = useState(menus[0].label);

  return (
    <Modal title="설정" closeIcon {...props}>
      <div className="flex gap-[1.375rem] pl-3 pr-7 pt-1 pb-[3.75rem] w-[29rem] h-[14.25rem]">
        {/* left navigation bar */}
        <div className="flex flex-col gap-1">
          {menus.map((menu) => (
            <button
              key={menu.label}
              className={
                currentMenu === menu.label
                  ? 'w-[4.625rem] h-8 flex items-center font-body-16 text-text-strong pl-3'
                  : 'w-[4.625rem] h-8 flex items-center font-body-16 text-text-neutral pl-3'
              }
              onClick={() => setCurrentMenu(menu.label)}
            >
              {menu.label}
            </button>
          ))}
        </div>

        {menus.find((menu) => menu.label === currentMenu)?.component}
      </div>
    </Modal>
  );
};

export default SettingProfileModal;
