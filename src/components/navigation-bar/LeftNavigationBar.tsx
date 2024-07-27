'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@/utils/tailwind';

import IndicatorIcon from '../icons/IndicatorIcon';
import DemoAlert from '../modal/demo-alert/DemoAlert';

const menus = [
  {
    label: '대시보드',
    path: '/dashboard',
  },
  {
    label: '프로젝트',
    path: '/project',
  },
  {
    label: '히스토리',
    path: '/report',
  },
];

const LeftNavigationBar = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const getModalPage = (path: string) => {
    if (path === '/dashboard') {
      router.push(path);
    } else {
      setShowModal(true);
    }
  };

  const currentPathname = usePathname();

  return (
    <>
      <nav className="absolute left-12 h-full w-[132px] bg-surface-background">
        <ul className="flex flex-col gap-3">
          {menus.map((menu) => (
            <div
              key={menu.path}
              // href={menu.path}
              className="flex items-center gap-2"
            >
              {menu.path === currentPathname && (
                <IndicatorIcon width={12} height={9} />
              )}
              <li
                className={cn(
                  'font-title-20 cursor-pointer',
                  menu.path === currentPathname
                    ? 'text-text-strong'
                    : 'text-text-neutral',
                )}
                onClick={() => getModalPage(menu.path)}
              >
                {menu.label}
              </li>
            </div>
          ))}
        </ul>
      </nav>
      <DemoAlert isOpen={showModal} setIsOpen={setShowModal} />
    </>
  );
};

export default LeftNavigationBar;
