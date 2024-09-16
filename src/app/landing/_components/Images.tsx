import Image from 'next/image';

import Landing1 from '@/assets/images/landing/landing-1.webp';
import Landing2 from '@/assets/images/landing/landing-2.webp';
import Landing3 from '@/assets/images/landing/landing-3.webp';

const Images = () => {
  return (
    <section className="flex flex-col gap-10">
      <Image
        src={Landing1}
        alt="review every friday"
        className="rounded-3xl h-[424px] w-[1120px] object-contain"
      />
      <Image
        src={Landing2}
        alt="write todo list and ideas"
        className="rounded-3xl h-[424px] w-[1120px] object-contain"
      />
      <Image
        src={Landing3}
        alt="project management"
        className="rounded-3xl h-[424px] w-[1120px] object-contain"
      />
    </section>
  );
};

export default Images;
