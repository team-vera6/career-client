import Image from 'next/image';

import PitstopLogo from '@/assets/logos/Logo.png';

import FeatureItem from './FeatureItem';
import VerticalDivider from './VerticalDivider';

export default function LandingPage() {
  return (
    <main className="h-full min-h-screen">
      <header className="p-10 bg-surface-foreground">
        <div className="w-full h-full relative flex items-center justify-center">
          <Image
            src={PitstopLogo}
            alt="pitstop logo"
            width={164}
            height={25}
            priority
          />

          <button className="button-large button-primary absolute right-0">
            시작하기
          </button>
        </div>
      </header>

      <section className="px-[11.25rem] pt-20 mb-[7.5rem]">
        <div className="w-full h-[25.1875rem] bg-neutral-30 flex items-center justify-center mb-[11.875rem] rounded-[50rem]">
          캐치 프레이즈 영역
        </div>

        <div className="w-full flex flex-col gap-[4.5rem] relative">
          <FeatureItem imageUrl="" content="주요 기능 소개글 1" />
          <FeatureItem imageUrl="" content="주요 기능 소개글 2" reverse />
          <FeatureItem imageUrl="" content="주요 기능 소개글 3" />

          <div className="absolute top-[12.5rem] left-auto right-auto w-full">
            <VerticalDivider />
          </div>
        </div>
      </section>

      <section className="w-full h-[25.25rem] bg-neutral-30 flex items-center justify-center">
        서비스 소개 영역
      </section>

      <footer className="w-full h-[6.25rem] flex items-center pl-[11.25rem] bg-surface-strong">
        <p className="font-body-13 text-text-invert">
          <span className="underline cursor-pointer">Terms & Conditions</span> |
          © 2024 Vera All rights reserved.
        </p>
      </footer>
    </main>
  );
}
