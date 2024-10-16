import Image from 'next/image';

import EmptyReviewImage from '@/assets/images/review-empty.png';

const EmptyReviewHistory = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-[7rem]">
      <p className="font-body-16 text-text-normal">
        첫 번째 회고를 기다리고 있어요!
      </p>
      <Image
        src={EmptyReviewImage}
        width={100}
        height={100}
        priority
        alt="no-review-history"
      />
    </div>
  );
};

export default EmptyReviewHistory;
