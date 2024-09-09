'use client';

import { useAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import PlusIcon from '@/components/icons/PlusIcon';
import ToggleSwitch from '@/components/toggle-switch/ToggleSwitch';
import { showOnlyBookmarkAtom } from '@/stores/bookmark/showOnlyBookmarkAtom';
import { cn } from '@/utils/tailwind';

import { dummy } from '../memo/_components/MemoHistory/dummy';

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

  const [showBookmarkOnly, setShowBookmarkOnly] = useAtom(showOnlyBookmarkAtom);

  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-5">
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

        {currentPathname === '/history/memo' && dummy.length > 0 && (
          <div className="flex items-center gap-1">
            <p className="font-body-14 text-text-normal">북마크만 보기</p>
            <ToggleSwitch
              initialState={showBookmarkOnly}
              onChange={setShowBookmarkOnly}
            />
          </div>
        )}
      </div>

      {currentPathname === '/history/memo' && (
        <button type="button" className="button-primary button-medium">
          <PlusIcon size={20} stroke="#fff" />
          <p className="font-body-14 text-text-invert">추가</p>
        </button>
      )}
    </div>
  );
};

export default Category;
