import Image from 'next/image';

import EmptyMemoImage from '@/assets/images/memo-empty.png';

const EmptyMemoHistory = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-[7rem]">
      <p className="font-body-16 text-text-normal">작성된 메모가 없어요</p>
      <Image
        src={EmptyMemoImage}
        width={100}
        height={100}
        priority
        alt="no-memo-history"
      />
    </div>
  );
};

export default EmptyMemoHistory;
