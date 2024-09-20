import Image from 'next/image';
import Link from 'next/link';

import HeaderImage from '@/assets/images/landing/Header.webp';
import Logo from '@/assets/logos/Logo.webp';

const Header = () => {
  return (
    <section className="w-full h-[444px] bg-surface-foregroundOn flex items-center justify-center relative">
      <Image
        src={HeaderImage}
        alt="header background"
        className="w-full h-[444px] object-cover absolute left-0 right-0 top-0 bottom-0 z-0"
      />

      <div className="w-[1120px] flex flex-col gap-[50px] z-10">
        <div>
          <Image
            src={Logo}
            alt="pitstop logo"
            className="w-[273px] h-[42px] mb-2.5"
          />
          <h1 className="font-head-20 text-text-normal">
            회고를 위한 가장 쉬운 선택, PITSTOP
          </h1>
        </div>

        <Link href="/dashboards" className="button-primary button-large w-fit">
          <p className="font-title-16 text-text-invert">오픈베타 시작하기</p>
        </Link>
      </div>
    </section>
  );
};

export default Header;
