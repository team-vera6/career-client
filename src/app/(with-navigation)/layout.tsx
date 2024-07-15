import Header from '@/components/header/Header';
import LeftNavigationBar from '@/components/navigation-bar/LeftNavigationBar';
import ToastContainer from '@/components/toast/ToastContainer';

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />

      <div className="w-full h-full px-12 max-w-[1696px] mx-auto pt-[3.75rem] relative">
        <LeftNavigationBar />
        <main>{children}</main>
        <ToastContainer />
      </div>
    </div>
  );
}
