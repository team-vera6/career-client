import Image from 'next/image';
import Link from 'next/link';

import PitstopLogoGray from '../../../assets/logos/LogoGray.png';

const Footer = () => {
  return (
    <footer>
      <Image
        src={PitstopLogoGray}
        alt="gray pitstop logo on footer"
        width={164}
        height={25}
      />

      <div className="flex items-center justify-between pb-9 mt-1 w-full mobile:block">
        <p className="font-body-12 text-text-normal mobile:mb-5">
          회고를 위한 가장 쉬운 선택
        </p>

        <div className="flex items-center mobile:justify-between">
          <div className="flex items-center gap-3 mr-4">
            <Link href="/">
              <p className="text-text-normal font-normal text-xs leading-[1.0625rem] underline">
                이용약관
              </p>
            </Link>
            <Link href="/">
              <p className="text-text-normal font-normal text-xs leading-[1.0625rem] underline">
                개인정보 처리방침
              </p>
            </Link>
          </div>

          <p className="font-body-13 text-text-normal">© 2024 PITSTOP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
