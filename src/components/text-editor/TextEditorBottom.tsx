import { format } from 'date-fns';
import { useSetAtom } from 'jotai';
import { useState } from 'react';

import { bookmarkMemo } from '@/apis/memo/put';
import { memoListAtom } from '@/app/review/stores';
import BookmarkIcon from '@/components/icons/BookmarkIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';
import colors from '@/styles/colors';
import { getUpdatedDate } from '@/utils/date';

interface Props {
  id?: string;
  isBookmark?: boolean;
  updatedAt?: string;
  deleteMemo?: () => void;
}

const TextEditorBottom = ({
  id,
  isBookmark,
  updatedAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  deleteMemo,
}: Props) => {
  const [isMarked, setIsMarked] = useState(isBookmark);
  const setMemoList = useSetAtom(memoListAtom);

  const onClickBookmark = async () => {
    try {
      await bookmarkMemo(Number(id));
      setIsMarked((prev) => !prev);
      setMemoList((prev) =>
        prev.map((memo) =>
          memo.id === id ? { ...memo, isBookmark: !memo.isBookmark } : memo,
        ),
      );
    } catch {
      console.error('fail to bookmark memo');
    }
  };

  return (
    <div className="flex items-center justify-between absolute bottom-4 left-5 right-6 bg-neutral-white">
      {/* buttons */}
      <div className="flex gap-1">
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-1.5"
          onClick={deleteMemo}
        >
          <DeleteIcon />
          <p className="font-body-13 text-text-strong">삭제</p>
        </button>
        <button
          type="button"
          className="flex items-center gap-1 px-3 py-1.5"
          onClick={onClickBookmark}
        >
          <BookmarkIcon
            fill={isMarked ? colors.line.focus : 'none'}
            stroke={isMarked ? colors.line.focus : colors.text.neutral}
          />
          <p className="font-body-13 text-text-strong">북마크</p>
        </button>
      </div>

      {/* updated date */}
      <p className="font-body-12 text-text-normal">
        최종수정 : {getUpdatedDate(updatedAt)}
      </p>
    </div>
  );
};

export default TextEditorBottom;
