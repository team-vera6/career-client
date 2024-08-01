'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ToggleSwitch from '@/components/toggle-switch/ToggleSwitch';
import { cn } from '@/utils/tailwind';

const menus = [
  {
    label: '회고',
    path: '/history/review',
  },
  {
    label: '메모',
    path: '/history/memo',
  },
];

const Category = () => {
  const currentPathname = usePathname();

  return (
    <div className="flex gap-5">
      {menus.map((el) => (
        <Link key={el.path} href={el.path}>
          <p
            className={cn(
              'font-head-20',
              el.path === currentPathname
                ? 'text-text-strong'
                : 'text-text-neutral',
            )}
          >
            {el.label}
          </p>
        </Link>
      ))}
      {currentPathname === '/history/memo' && (
        <div className="flex items-center gap-1">
          <p className="font-body-14 text-text-normal">북마크만 보기</p>
          <ToggleSwitch />
        </div>
      )}
    </div>
  );
};

export default Category;
