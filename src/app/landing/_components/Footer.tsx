import Image from 'next/image';
import Link from 'next/link';

import LogoGray from '@/assets/logos/LogoGray.png';

const Footer = () => {
  return (
    <footer className="w-full max-w-[1120px] mt-20 mb-10">
      <hr className="w-full border-line-normal mb-9" />

      <Image
        src={LogoGray}
        alt="pitstop logo"
        className="w-[164px] h-[25px] mb-1"
      />

      <div className="flex items-center justify-between">
        <p className="font-body-12 text-text-normal">
          회고를 위한 가장 쉬운 선택
        </p>

        <div className="flex items-center gap-3">
          <Link
            href="https://ancient-gladiolus-215.notion.site/PITSTOP-c91558f34f8b4e32bd2f307ce4215447?pvs=4"
            target="_blank"
          >
            <p className="font-body-12 text-text-normal underline">이용약관</p>
          </Link>
          <Link
            href="https://ancient-gladiolus-215.notion.site/PITSTOP-73e2c3e4dc87490aa6417b00ae060355?pvs=4"
            target="_blank"
          >
            <p className="font-body-12 text-text-normal underline">
              개인정보 처리방침
            </p>
          </Link>
          <p className="font-body-12 text-text-normal">© 2024 PITSTOP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
