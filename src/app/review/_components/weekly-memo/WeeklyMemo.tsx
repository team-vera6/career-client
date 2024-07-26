'use client';

import { useAtomValue } from 'jotai';

import Memo from '@/components/memo/Memo';

import { memoListAtom } from '../../stores';

const WeeklyMemo = () => {
  const memoList = useAtomValue(memoListAtom);

  return (
    <div className="flex flex-col gap-3">
      {memoList.map((el, index) => (
        <Memo key={index} {...el} />
      ))}
    </div>
  );
};

export default WeeklyMemo;
