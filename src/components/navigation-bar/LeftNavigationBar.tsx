'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/tailwind';

import IndicatorIcon from '../icons/IndicatorIcon';

const menus = [
  {
    label: '대시보드',
    path: '/dashboards',
  },
  {
    label: '프로젝트',
    path: '/project',
  },
  {
    label: '히스토리',
    path: '/history',
  },
];

const LeftNavigationBar = () => {
  const currentPathname = usePathname();

  return (
    <nav className="absolute left-12 h-full w-[132px] bg-surface-background">
      <ul className="flex flex-col gap-3">
        {menus.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className="flex items-center gap-2"
          >
            {currentPathname.includes(menu.path) && (
              <IndicatorIcon width={12} height={9} />
            )}
            <li
              className={cn(
                'font-title-20 cursor-pointer',
                currentPathname.includes(menu.path)
                  ? 'text-text-strong'
                  : 'text-text-neutral',
              )}
            >
              {menu.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default LeftNavigationBar;
