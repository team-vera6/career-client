'use client';

import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { memoListAtom } from '@/app/review/stores';
import { MemoItem } from '@/app/review/types';
import colors from '@/styles/colors';

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

  const onClickBookmark = () => {
    setIsMark((prev) => !prev);
    setMemoList((prev) =>
      prev.map((memo) =>
        memo.id === id ? { ...memo, isBookmark: !memo.isBookmark } : memo,
      ),
    );
  };

  return (
    <div className="w-full flex items-center justify-between">
      <p className="font-body-12 text-text-neutral">{date}</p>
      <BookmarkIcon
        onClick={onClickBookmark}
        fill={isMark ? colors.line.focus : 'none'}
        stroke={isMark ? colors.line.focus : colors.text.neutral}
        className="cursor-pointer"
      />
    </div>
  );
};

export default MemoBottom;
