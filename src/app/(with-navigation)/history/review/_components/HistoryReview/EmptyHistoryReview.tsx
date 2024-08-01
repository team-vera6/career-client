import Image from 'next/image';

import EmptyReviewImage from '@/assets/images/review-empty.png';

const EmptyHistoryReview = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-[7rem]">
      <p>아직 작성된 회고가 없어요</p>
      <Image
        src={EmptyReviewImage}
        width={100}
        height={100}
        priority
        alt="no-history-review"
      />
    </div>
  );
};

export default EmptyHistoryReview;
