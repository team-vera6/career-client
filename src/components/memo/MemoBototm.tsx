'use client';

import BookmarkIcon from '../icons/BookmarkIcon';
import colors from '@/styles/colors';
import { useState } from 'react';

interface Props {
  isBookmark: boolean;
  date: string;
}

const MemoBottom = ({ isBookmark = false, date }: Props) => {
  const [isMark, setIsMark] = useState(isBookmark);

  return (
    <div className="w-full flex items-center justify-between">
      <p className="font-body-12 text-text-neutral">{date}</p>
      <BookmarkIcon
        cursor="pointer"
        onClick={() => setIsMark((prev) => !prev)}
        fill={isMark ? colors.line.focus : 'none'}
        stroke={isMark ? colors.line.focus : colors.text.neutral}
      />
    </div>
  );
};

export default MemoBottom;
