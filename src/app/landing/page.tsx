import Catchphrase from './_components/Catchphrase';
import Footer from './_components/Footer';
import Header from './_components/Header';
import Images from './_components/Images';

export default function LandingPage() {
  return (
    <main className="h-full min-h-screen min-w-[1024px] bg-surface-foreground">
      <Header />

      <section className="w-full flex flex-col items-center mt-20">
        <Images />

        <Catchphrase />

        <Footer />
      </section>
    </main>
  );
}
