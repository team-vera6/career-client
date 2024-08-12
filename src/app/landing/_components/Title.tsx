import Image from 'next/image';

import FridayIcon from '../../../assets/images/friday.png';

const Title = () => {
  return (
    <section className="mt-[6.5rem] w-full mobile:mt-12">
      <div className="flex gap-3 mobile:block">
        <div className="flex mb-4 gap-1 mobile:mb-0">
          <p className="font-bold text-text-strong text-5xl leading-[3rem] -tracking-[0.0125rem] mobile:font-head-28">
            매주 금요일
          </p>

          <Image
            src={FridayIcon}
            alt="friday"
            className="w-12 h-12 mobile:w-9 mobile:h-9"
          />

          <p className="font-bold text-text-strong text-5xl leading-[3rem] -tracking-[0.0125rem] mobile:font-head-28">
            에 도착하는
          </p>
        </div>

        <p className="font-bold text-text-strong text-5xl -tracking-[0.0125rem] mobile:font-head-28">
          {' '}
          회고 편지
        </p>
      </div>

      <h1 className="font-bold text-text-primary text-5xl leading-[3rem] -tracking-[0.0125rem] mb-6 mobile:whitespace-pre-wrap mobile:font-head-28 mobile:mb-3">
        {'작은 기록으로 \n커리어를 혁신'}
        <span className="text-text-strong">하세요.</span>
      </h1>

      <h2 className="font-head-28 text-text-neutral mobile:font-title-16">
        회고를 위한 가장 쉬운 선택, PITSTOP
      </h2>
    </section>
  );
};

export default Title;
