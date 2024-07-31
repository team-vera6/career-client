'use client';

import { useAtomValue } from 'jotai';
import Image from 'next/image';

import { memoListAtom } from '@/app/review/stores';
import EmptyMemoImage from '@/assets/images/memo-empty.png';
import Memo from '@/components/memo/Memo';

const MemoList = () => {
  const memos = useAtomValue(memoListAtom);

  return (
    <>
      {memos.length > 0 ? (
        <div className="flex flex-col gap-3 mt-4">
          {memos.map((memo, index) => (
            <Memo
              id={String(index)}
              key={index}
              title={memo.title}
              memo={memo.memo}
              date={memo.date}
            />
          ))}
        </div>
      ) : (
        <div className="w-[15.75rem] flex items-center flex-col gap-5 mt-[3.75rem]">
          <p className="font-body-16 text-text-normal">남긴 메모가 없어요</p>
          <Image src={EmptyMemoImage} width={100} height={100} alt="no memo" />
        </div>
      )}
    </>
  );
};

export default MemoList;
