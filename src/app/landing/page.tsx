import Image from 'next/image';

import PitstopLogo from '@/assets/logos/Logo.png';
import FridayIcon from '@/components/icons/FridayIcon';

export default function LandingPage() {
  return (
    <main className="h-full min-h-screen bg-surface-foreground px-[10rem]">
      <header className="py-8 bg-surface-foreground w-full">
        <Image
          src={PitstopLogo}
          alt="pitstop logo"
          width={164}
          height={25}
          priority
        />
      </header>

      <section className="mt-[6.5rem] w-full">
        <div className="flex items-center gap-1 mb-4">
          <p className="font-bold text-text-strong text-5xl leading-[3rem] -tracking-[0.0125rem]">
            매주 금요일
          </p>
          <FridayIcon size={48} />
          <p className="font-bold text-text-strong text-5xl leading-[3rem] -tracking-[0.0125rem]">
            에 도착하는 회고 편지
          </p>
        </div>

        <h1 className="font-bold text-text-primary text-5xl leading-[3rem] -tracking-[0.0125rem] mb-6">
          작은 기록으로 커리어를 혁신
          <span className="text-text-strong">하세요.</span>
        </h1>

        <h2 className="font-head-28 text-text-neutral">
          회고를 위한 가장 쉬운 선택, PITSTOP
        </h2>
      </section>
    </main>
  );
}
