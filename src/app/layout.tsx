import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '@/components/header/Header';
import LeftNavigationBar from '@/components/navigation-bar/LeftNavigationBar';
import ToastContainer from '@/components/toast/ToastContainer';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const designer = localFont({
  src: '../assets/fonts/Designer.otf',
  display: 'swap',
  variable: '--font-designer',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} ${designer.variable} font-pretendard bg-surface-background`}
      >
        <Header />

        <div className="w-full h-full px-12 max-w-[1696px] mx-auto pt-[3.75rem] relative">
          <LeftNavigationBar />
          {children}
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
