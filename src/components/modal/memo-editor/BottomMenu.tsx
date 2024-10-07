import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { bookmarkMemo } from '@/apis/memo/put';
import { memoListAtom } from '@/app/review/stores';
import BookmarkIcon from '@/components/icons/BookmarkIcon';
import colors from '@/styles/colors';
import { getUpdatedDate } from '@/utils/date';

interface Props {
  id?: number;
  lastUpdated?: string;
  readonly?: boolean;
  isBookmark?: boolean;
}

const BottomMenu = ({ id, lastUpdated, readonly, isBookmark }: Props) => {
  const [isMarked, setIsMarked] = useState(isBookmark);
  const setMemoList = useSetAtom(memoListAtom);

  useEffect(() => {
    setIsMarked(isBookmark);
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
    setIsMarked((prev) => !prev);
    setMemoList((prev) =>
      prev.map((memo) =>
        memo.id === String(id)
          ? { ...memo, isBookmark: !memo.isBookmark }
          : memo,
      ),
    );
  };

  return (
    <div className="flex items-center justify-between p-[1.625rem]">
      {lastUpdated ? (
        <p className="font-body-12 text-text-normal">
          {getUpdatedDate(lastUpdated)}
        </p>
      ) : (
        <div />
      )}

      <button
        type="button"
        disabled={readonly}
        onClick={async (e) => {
          e.stopPropagation();
          await onClickBookmark();
        }}
      >
        <BookmarkIcon
          size={20}
          fill={isMarked ? colors.line.focus : 'none'}
          stroke={isMarked ? colors.line.focus : colors.text.neutral}
          className={readonly ? 'cursor-default' : 'cursor-pointer'}
        />
      </button>
    </div>
  );
};

export default BottomMenu;
