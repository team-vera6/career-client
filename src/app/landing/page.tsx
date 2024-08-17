import Link from 'next/link';

import Footer from './_components/Footer';
import Header from './_components/Header';
import Images from './_components/Images';
import Title from './_components/Title';

export default function LandingPage() {
  return (
    <main className="h-full min-h-screen min-w-[1024px] bg-surface-foreground px-[10rem] mobile:px-6 mobile:min-w-[360px]">
      <Header />

      <Title />

      <Link href="/dashboard">
        <button className="button-primary button-large mb-20 mt-10 mobile:mt-7 mobile:mb-16">
          오픈베타 시작하기
        </button>
      </Link>

      <Images />

      <Footer />
    </main>
  );
}
