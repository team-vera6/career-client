'use client';

import { useEffect, useState } from 'react';

import colors from '@/styles/colors';

import BookmarkIcon from '../icons/BookmarkIcon';

interface Props {
  isBookmark: boolean;
  date: string;
}

const MemoBottom = ({ isBookmark, date }: Props) => {
  const [isMark, setIsMark] = useState(isBookmark);

  useEffect(() => {
    setIsMark(isBookmark);
  }, [isBookmark]);

  return (
    <div className="w-full flex items-center justify-between">
      <p className="font-body-12 text-text-neutral">{date}</p>
      <BookmarkIcon
        onClick={() => setIsMark((prev) => !prev)}
        fill={isMark ? colors.line.focus : 'none'}
        stroke={isMark ? colors.line.focus : colors.text.neutral}
        className="cursor-pointer"
      />
    </div>
  );
};

export default MemoBottom;
