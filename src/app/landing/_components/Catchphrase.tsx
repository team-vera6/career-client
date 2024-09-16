import Link from 'next/link';

const Catchphrase = () => {
  return (
    <section className="w-full flex flex-col items-center mt-[6.25rem] gap-7">
      <h2 className="font-head-36 text-text-strong">
        매주 금요일, <span className="text-text-primary">PITSTOP</span>으로
        커리어를 혁신해 보세요.
      </h2>

      <Link href="/dashboards" className="button-primary button-large w-fit">
        <p className="font-title-16 text-text-invert">오픈베타 시작하기</p>
      </Link>
    </section>
  );
};

export default Catchphrase;
