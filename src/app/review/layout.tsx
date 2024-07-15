import LeftNavigationBar from '@/components/navigation-bar/LeftNavigationBar';
import ToastContainer from '@/components/toast/ToastContainer';

export default function ReviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="w-full h-full px-12 max-w-[1696px] mx-auto pt-[3.75rem] relative">
        <LeftNavigationBar />
        <main>{children}</main>
        <ToastContainer />
      </div>
    </section>
  );
}
