import FridayIcon from '@/components/icons/FridayIcon';

const Title = () => {
  return (
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

      <h1 className="font-bold text-text-primary text-5xl leading-[3rem] -tracking-[0.0125rem] mb-6 mobile:whitespace-pre-wrap">
        {'작은 기록으로 \n커리어를 혁신'}
        <span className="text-text-strong">하세요.</span>
      </h1>

      <h2 className="font-head-28 text-text-neutral">
        회고를 위한 가장 쉬운 선택, PITSTOP
      </h2>
    </section>
  );
};

export default Title;
