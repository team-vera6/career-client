import Image from 'next/image';

import EmptyImage from '@/assets/images/project-empty.png';

const NoItem = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-10 mt-[5.625rem]">
      <p className="font-body-16 text-text-normal">
        프로젝트를 추가하고 회고해보세요
      </p>
      <Image src={EmptyImage} alt="no project" width={100} height={100} />
    </div>
  );
};

export default NoItem;
