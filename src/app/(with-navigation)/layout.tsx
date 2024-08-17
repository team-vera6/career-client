import Header from '@/components/header/Header';
import LeftNavigationBar from '@/components/navigation-bar/LeftNavigationBar';

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />

      <div className="w-full h-full px-12 max-w-[1696px] min-w-[1440px] mx-auto pt-[3.75rem] relative">
        <LeftNavigationBar />
        <main className="flex justify-center ml-[132px]">{children}</main>
      </div>
    </div>
  );
}
