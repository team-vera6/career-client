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

      <div className="flex items-center justify-between pb-9 mt-1">
        <p className="font-body-12 text-text-normal">
          회고를 위한 가장 쉬운 선택
        </p>

        <div className="flex items-center">
          <Link href="/" className="mr-3">
            <p className="text-text-normal font-normal text-xs leading-[1.0625rem] underline">
              이용약관
            </p>
          </Link>
          <Link href="/" className="mr-4">
            <p className="text-text-normal font-normal text-xs leading-[1.0625rem] underline">
              개인정보 처리방침
            </p>
          </Link>

          <p className="font-body-13 text-text-normal">© 2024 PITSTOP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
