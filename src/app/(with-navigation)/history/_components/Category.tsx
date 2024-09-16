'use client';

import { useAtom, useSetAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { AllMemosResponse, getAllMemos } from '@/apis/memo/get';
import { addNewMemo } from '@/apis/memo/post';
import PlusIcon from '@/components/icons/PlusIcon';
import TextEditorModal from '@/components/modal/text-editor';
import ToggleSwitch from '@/components/toggle-switch/ToggleSwitch';
import { showOnlyBookmarkAtom } from '@/stores/bookmark/showOnlyBookmarkAtom';
import { historyMemoListAtom, MemoList } from '@/stores/memos/memos';
import { sortByWeek } from '@/types/sort';
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
  const setMemoList = useSetAtom(historyMemoListAtom);

  const [openTextEditor, setOpenTextEditor] = useState(false);

  const groupMemosByWeek = (receivedMemos: AllMemosResponse) => {
    const groupedMemos = receivedMemos.contents.reduce(
      (acc, cur) => {
        const { year, month, week } = cur.weekNumber;

        const item = {
          id: cur.id,
          content: cur.content,
          isMarked: cur.isMarked,
          updatedAt: cur.updatedAt,
        };

        const key = `${year}-${month}-${week}`;
        if (acc[key]) {
          acc[key].memos.push(item);
        } else {
          acc[key] = {
            weekNumber: cur.weekNumber,
            memos: [item],
          };
        }

        return acc;
      },
      {} as Record<string, MemoList>,
    );

    return Object.values(groupedMemos).sort(sortByWeek);
  };

  const addMemo = async (content: string) => {
    try {
      await addNewMemo({ content, isMarked: false });
    } catch (error) {
      console.log('fail to add memo', error);
    }
  };

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
        <button
          type="button"
          className="button-primary button-medium"
          onClick={() => setOpenTextEditor(true)}
        >
          <PlusIcon size={20} stroke="#fff" />
          <p className="font-body-14 text-text-invert">메모 추가</p>
        </button>
      )}

      <TextEditorModal
        isOpen={openTextEditor}
        onDismiss={() => {
          setOpenTextEditor(false);
        }}
        onSaveText={async (text) => {
          await addMemo(text);
          const response = await getAllMemos({});

          const sorted = groupMemosByWeek(response);
          setMemoList(sorted);
        }}
        value=""
      />
    </div>
  );
};

export default Category;
