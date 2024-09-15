'use client';

import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { bookmarkMemo } from '@/apis/memo/put';
import { memoListAtom } from '@/app/review/stores';
import { MemoItem } from '@/app/review/types';
import colors from '@/styles/colors';
import { getMemoCreateDate } from '@/utils/date';

import BookmarkIcon from '../icons/BookmarkIcon';

const MemoBottom = ({
  isBookmark,
  date,
  id,
}: Pick<MemoItem, 'isBookmark' | 'date' | 'id'>) => {
  const [isMark, setIsMark] = useState(isBookmark);
  const setMemoList = useSetAtom(memoListAtom);

  useEffect(() => {
    setIsMark(isBookmark);
  }, [isBookmark]);

  const changeBookmark = async () => {
    try {
      await bookmarkMemo(Number(id));
    } catch (error) {
      console.error('fail to bookmark memo', error);
    }
  };

  const onClickBookmark = async () => {
    await changeBookmark();
    setIsMark((prev) => !prev);
    setMemoList((prev) =>
      prev.map((memo) =>
        memo.id === id ? { ...memo, isBookmark: !memo.isBookmark } : memo,
      ),
    );
  };

  return (
    <div className="w-full flex items-center justify-between">
      <p className="font-body-12 text-text-neutral">
        {getMemoCreateDate(date)}
      </p>
      <button
        type="button"
        onClick={async (e) => {
          e.stopPropagation();
          await onClickBookmark();
        }}
      >
        <BookmarkIcon
          fill={isMark ? colors.line.focus : 'none'}
          stroke={isMark ? colors.line.focus : colors.text.neutral}
          className="cursor-pointer"
        />
      </button>
    </div>
  );
};

export default MemoBottom;
