import Image from 'next/image';

import Landing1 from '@/assets/images/landing/landing-1.webp';
import Landing2 from '@/assets/images/landing/landing-2.webp';
import Landing3 from '@/assets/images/landing/landing-3.webp';

const Images = () => {
  return (
    <section className="grid grid-rows-3 grid-cols-2 gap-10 mb-[6.25rem] mobile:flex mobile:flex-col mobile:gap-5 mobile:mb-[4.5rem]">
      <Image
        src={Landing1}
        alt="this week to do list"
        className="bg-surface-foregroundOn rounded-3xl h-[17rem] mobile:h-[9.8125rem] object-contain"
      />
      <Image
        src={Landing2}
        alt="review indicators"
        className="bg-surface-foregroundOn rounded-3xl h-[272px] mobile:h-[9.8125rem] object-contain"
      />
      <Image
        src={Landing3}
        alt="highlights and lowlights"
        className="bg-surface-foregroundOn rounded-3xl h-[35.25rem] mobile:h-[9.8125rem] col-span-2 row-span-2 object-contain"
      />
    </section>
  );
};

export default Images;
